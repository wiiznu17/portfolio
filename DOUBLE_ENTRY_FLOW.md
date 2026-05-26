# 🏦 J-Ledger Double-Entry Core Engine Flow

> **กระบวนการทำงานของ Double-Entry Financial Ledger Engine (Spring Boot & PostgreSQL)**
> เอกสารนี้เตรียมไว้สำหรับการแคปเจอร์หน้าจอ (Screenshot) เพื่อใช้เป็นภาพประกอบ `2_core.png` บนหน้า Portfolio

---

## 📐 1. Double-Entry Flowchart & Database Balancing Invariant

แผนภูมิกระบวนการโอนเงินและกลไกบัญชีแยกประเภทแบบคู่ เพื่อรักษาความถูกต้องของยอดเงินรวมในระบบแบบ Atomic Transaction

```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'background': '#ffffff',
    'primaryColor': '#ffffff',
    'primaryBorderColor': '#475569',
    'primaryTextColor': '#0f172a',
    'lineColor': '#475569',
    'fontFamily': 'Inter, system-ui, -apple-system, sans-serif',
    'fontSize': '13px'
  }
}}%%
flowchart TD
    %% Styles and Theme Configurations
    classDef default fill:#ffffff,stroke:#475569,stroke-width:1.5px,color:#0f172a;
    classDef startNode fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e40af,font-weight:bold;
    classDef lockNode fill:#fff7ed,stroke:#ea580c,stroke-width:2px,color:#c2410c;
    classDef dbNode fill:#faf5ff,stroke:#9333ea,stroke-width:2px,color:#6b21a8;
    classDef mutationNode fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#15803d;
    classDef successNode fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#047857,font-weight:bold;
    classDef failNode fill:#fef2f2,stroke:#dc2626,stroke-width:2px,color:#b91c1c,font-weight:bold;

    %% Nodes Definition
    START(["🚀 P2P Transfer Request"])
    
    subgraph LOCKING["🔒 1. Distributed Locking (Redis)"]
        SORT["Sort Account IDs:<br/>firstLock = min(A, B) | secondLock = max(A, B)"]
        ACQUIRE["Acquire Locks in Sorted Order<br/>(Prevents Concurrent Database Deadlocks)"]
    end

    subgraph DB_TX["💳 2. Atomic Database Transaction (@Transactional)"]
        FETCH["SELECT ... FOR UPDATE<br/>(Acquire Database Row-level Locks)"]
        VALIDATE{"Validate Wallet States:<br/>- Are both wallets active?<br/>- Does sender have sufficient balance?"}
        
        subgraph DEBIT_LEG["Debit Leg (Sender Wallet)"]
            DECREASE["1. Decrease Wallet Balance<br/>(balance = balance - amount)"]
            LEDGER_DR["2. Debit Ledger Account<br/>(dr_balance = dr_balance - amount)"]
            DR_ENTRY["3. Record Entry (DEBIT)<br/>in ledger_entry table"]
        end
        
        subgraph CREDIT_LEG["Credit Leg (Receiver Wallet)"]
            INCREASE["1. Increase Wallet Balance<br/>(balance = balance + amount)"]
            LEDGER_CR["2. Credit Ledger Account<br/>(cr_balance = cr_balance + amount)"]
            CR_ENTRY["3. Record Entry (CREDIT)<br/>in ledger_entry table"]
        end
        
        TX_RECORD["4. Write Event to transaction Table<br/>(type = TRANSFER, status = COMPLETED)"]
        COMMIT["5. COMMIT Transaction<br/>(Mathematically Balanced Entry)"]
        ROLLBACK["ROLLBACK Database Transaction<br/>(Throws IllegalArgumentException)"]
    end

    END_SUCCESS(["✅ Return 200 OK (Success)"])
    END_FAIL(["❌ Return 400 Bad Request"])

    %% Flow Connections
    START --> SORT
    SORT --> ACQUIRE
    ACQUIRE --> FETCH
    FETCH --> VALIDATE
    
    VALIDATE -- "Passed ✅" --> DECREASE
    VALIDATE -- "Passed ✅" --> INCREASE
    
    DECREASE --> LEDGER_DR
    LEDGER_DR --> DR_ENTRY
    
    INCREASE --> LEDGER_CR
    LEDGER_CR --> CR_ENTRY
    
    DR_ENTRY & CR_ENTRY --> TX_RECORD
    TX_RECORD --> COMMIT
    
    VALIDATE -- "Failed ❌" --> ROLLBACK
    
    COMMIT --> END_SUCCESS
    ROLLBACK --> END_FAIL

    %% Applying styles
    class START startNode;
    class SORT,ACQUIRE lockNode;
    class FETCH,VALIDATE dbNode;
    class DECREASE,LEDGER_DR,DR_ENTRY,INCREASE,LEDGER_CR,CR_ENTRY,TX_RECORD mutationNode;
    class COMMIT,END_SUCCESS successNode;
    class ROLLBACK,END_FAIL failNode;
```

---

## 📊 2. Double-Entry Accounting Journal Matching (PostgreSQL Schema)

การจำลองโครงสร้างข้อมูลและบันทึก Journal Entry เมื่อเกิดรายการโอนเงิน $100.00 จาก Wallet A ไปยัง Wallet B

```mermaid
%%{init: {
  'theme': 'default',
  'themeVariables': {
    'background': '#ffffff',
    'primaryColor': '#eff6ff',
    'primaryTextColor': '#1e40af',
    'primaryBorderColor': '#bfdbfe',
    'lineColor': '#64748b'
  }
}}%%
erDiagram
    WALLETS ||--o{ LEDGER_ACCOUNTS : "owns (1:1)"
    LEDGER_ACCOUNTS ||--o{ LEDGER_ENTRIES : "has many journal legs"
    TRANSACTIONS ||--o{ LEDGER_ENTRIES : "groups ledger entries"

    WALLETS {
        UUID id PK
        VARCHAR name
        DECIMAL balance "Current hot wallet balance"
        VARCHAR status "ACTIVE | SUSPENDED"
    }

    LEDGER_ACCOUNTS {
        UUID id PK
        UUID wallet_id FK "Owner's wallet reference"
        VARCHAR type "ASSET | LIABILITY | EQUITY | REVENUE | EXPENSE"
        DECIMAL dr_balance "Cumulative debits"
        DECIMAL cr_balance "Cumulative credits"
    }

    TRANSACTIONS {
        UUID id PK
        VARCHAR type "TRANSFER | TOPUP | WITHDRAW"
        VARCHAR status "PENDING | COMPLETED | FAILED"
        VARCHAR idempotency_key UK
        TIMESTAMP created_at
    }

    LEDGER_ENTRIES {
        UUID id PK
        UUID transaction_id FK "Parent Transaction Link"
        UUID ledger_account_id FK "Target Ledger Account"
        VARCHAR entry_type "DEBIT (DR) | CREDIT (CR)"
        DECIMAL amount "Transaction magnitude"
        TIMESTAMP created_at
    }
```

---

## 📊 3. Journal Entry Balance Ledger State (Example Ledger Match)

เมื่อโอนเงิน **$100.00** จากบัญชี A ไปยังบัญชี B:
* **Debit Account A** (ลดสินทรัพย์): -$100.00 (DEBIT)
* **Credit Account B** (เพิ่มสินทรัพย์): +$100.00 (CREDIT)
* **สมการดุลยภาพทางคณิตศาสตร์**: $\sum \text{Debit} = \sum \text{Credit} = \$100.00$ (ยอดดุลคงที่เสมอ)

```mermaid
%%{init: {
  'theme': 'default',
  'themeVariables': {
    'background': '#ffffff',
    'lineColor': '#64748b'
  }
}}%%
graph LR
    subgraph SENDER_LEDGER["🔴 Account A (Sender Leg)"]
        DR["DEBIT: -$100.00<br/>(Decrease Assets)"]
    end
    
    subgraph RECEIVER_LEDGER["🟢 Account B (Receiver Leg)"]
        CR["CREDIT: +$100.00<br/>(Increase Assets)"]
    end

    SENDER_LEDGER -- "Journal Entry A (Leg 1)" --> BALANCED{{"⚖️ Net Balance Balance: $0.00<br/>(Mathematically Equal Invariant)"}}
    RECEIVER_LEDGER -- "Journal Entry B (Leg 2)" --> BALANCED
    
    style BALANCED fill:#ecfeff,stroke:#06b6d4,stroke-width:2px,color:#155e75
    style SENDER_LEDGER fill:#fef2f2,stroke:#f87171,stroke-width:1.5px,color:#991b1b
    style RECEIVER_LEDGER fill:#f0fdf4,stroke:#4ade80,stroke-width:1.5px,color:#166534
```
