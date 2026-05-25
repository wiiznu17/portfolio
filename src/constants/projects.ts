export interface TechStackItem {
  name: string
  logo: string
  size?: string
}

export interface HighlightItem {
  title: { en: string; th: string }
  description: { en: string; th: string }
  icon: string
}

export interface ProjectTheme {
  text: string
  bg: string
  accent: string
  badgeStyle: {
    color: string
    background: string
    border: string
  }
  glow: string
}

export const PROJECT_THEMES: Record<"blue" | "amber" | "indigo", ProjectTheme> = {
  blue: {
    text: "text-blue-600",
    bg: "bg-blue-600",
    accent: "#3b82f6",
    badgeStyle: {
      color: "#2563eb",
      background: "rgba(219, 234, 254, 0.8)",
      border: "1px solid rgba(191, 219, 254, 0.8)",
    },
    glow: "rgba(37, 99, 235, 0.4)",
  },
  amber: {
    text: "text-amber-600",
    bg: "bg-amber-600",
    accent: "#fbbf24",
    badgeStyle: {
      color: "#d97706",
      background: "rgba(254, 243, 199, 0.8)",
      border: "1px solid rgba(253, 230, 138, 0.8)",
    },
    glow: "rgba(217, 119, 6, 0.4)",
  },
  indigo: {
    text: "text-indigo-600",
    bg: "bg-indigo-600",
    accent: "#6366f1",
    badgeStyle: {
      color: "#4f46e5",
      background: "rgba(224, 231, 255, 0.8)",
      border: "1px solid rgba(199, 210, 254, 0.8)",
    },
    glow: "rgba(79, 70, 229, 0.4)",
  },
}

export interface ProjectImage {
  url: string
  title: { en: string; th: string }
  description: { en: string; th: string }
}

export interface Project {
  id: string
  title: { en: string; th: string }
  subtitle: { en: string; th: string }
  year: string
  role: { en: string; th: string }
  tagline: { en: string; th: string }
  themeColor: "blue" | "amber" | "indigo"
  bannerGradient: string
  problem: { en: string; th: string }
  solution: { en: string; th: string }
  architecture: { en: string[]; th: string[] }
  highlights: HighlightItem[]
  techStack: TechStackItem[]
  githubUrl: string
  demoUrl: string
  videoUrl: string
  bullets: { en: string[]; th: string[] }
  images: ProjectImage[]
}

export const projectsData: Record<string, Project> = {
  "p-wallet": {
    id: "p-wallet",
    title: { en: "J-Ledger", th: "J-Ledger" },
    subtitle: {
      en: "High-Throughput E-Wallet & Immutable Financial Ledger Engine",
      th: "ระบบบัญชีแยกประเภทและการโอนเงินสำหรับกระเป๋าเงินดิจิทัลประสิทธิภาพสูง",
    },
    year: "2026",
    role: {
      en: "Lead Backend Architect & Security Engineer",
      th: "สถาปนิกวิศวกรระบบหลังบ้านและความปลอดภัยทางการเงิน",
    },
    tagline: {
      en: "A bank-grade, double-entry financial ledger and mobile wallet platform built with Java 21 / Spring Boot 3, NestJS, Kafka, and Redis, guaranteeing 100% solvency and deadlock-free transactions.",
      th: "ระบบบัญชีแยกประเภทและการเงินระดับธนาคารแบบบันทึกคู่และแอปกระเป๋าเงินมือถือ พัฒนาขึ้นด้วย Java 21 / Spring Boot 3, NestJS, Kafka และ Redis รับประกันสภาพคล่องของทุนสำรอง 100% และกระบวนการโอนเงินที่ไร้การล็อกค้างแบบชะงัก (Deadlock-free)",
    },
    themeColor: "blue",
    bannerGradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    problem: {
      en: "Financial applications demand 100% transactional consistency, zero-deadlock concurrency, and absolute auditability. Concurrent balance updates (race conditions) under high concurrent user loads can trigger classic ledger double-spending, data discrepancies, or circular database deadlocks. Furthermore, integrating heavy compliance modules like KYC, AML heuristics, and notification dispatchers directly into transaction APIs causes performance bottlenecks.",
      th: "แอปพลิเคชันทางการเงินต้องการความสอดคล้องของธุรกรรม 100% รวมถึงระบบประมวลผลพร้อมกันที่ปราศจากการล็อกค้าง (Deadlocks) และความสามารถในการตรวจสอบที่ชัดเจน การอัปเดตยอดเงินพร้อมกัน (Race conditions) ในเวลาที่มีผู้ใช้ทำรายการหนาแน่น มักทำให้เกิดการใช้จ่ายซ้ำซ้อน (Double-spending) ยอดเงินขัดแย้ง หรือเกิดการล็อกขัดแย้งแบบวงกลมในฐานข้อมูล นอกจากนี้ การผนวกรวมโมดูลยืนยันตัวตน KYC, ระบบสกัดฟอกเงิน AML และคิวการแจ้งเตือนเข้าไปในเธรดการประมวลผลหลักโดยตรง ก่อให้เกิดคอขวดต่อระบบโดยรวม",
    },
    solution: {
      en: "We engineered J-Ledger, a bank-grade double-entry financial ledger and mobile wallet platform. The financial core is built in Java 21 / Spring Boot 3 with Hibernate JPA and Flyway migrations, implementing an append-only journal architecture with dual-leg ledger audit entries for every balance mutation. We solved high-contention database concurrency and eliminated circular deadlocks by enforcing a strict lexicographical lock sorting sequencing protocol on UUIDs. The gateway and customer/admin modules are built with NestJS, Prisma ORM, and React/Next.js/React Native. We decoupled transaction updates from notifications using Apache Kafka event-driven workers, secured KYC biometric face matches, and calculated solvency reserve ratios in real-time.",
      th: "พวกเราพัฒนา J-Ledger ระบบกระเป๋าเงินการเงินแบบบัญชีคู่ระดับธนาคาร โดยแกนหลักด้านการเงินพัฒนาขึ้นด้วย Java 21 / Spring Boot 3 ร่วมกับ Hibernate JPA และการย้ายข้อมูลผ่าน Flyway เพื่อจัดเก็บข้อมูลบัญชีแบบบันทึกเพิ่มเท่านั้น (Append-only) พร้อมรายการตรวจสอบสมการดุลบัญชีสำหรับทุกธุรกรรม เราแก้ไขปัญหาคอขวดบนฐานข้อมูลที่เกิดจากธุรกรรมหนาแน่นและขจัดปัญหา Deadlocks อย่างถาวรด้วยกติกาการเรียงลำดับการล็อกตามพจนานุกรม (Lexicographical lock sorting protocol) ในระดับรหัส UUID ของกระเป๋าเงิน ส่วนบริการจัดการ Auth และ Gateway พัฒนาด้วย NestJS และ Prisma ORM แยกการประมวลผลการส่งแจ้งเตือนออกไปยัง Kafka เพื่อแบ่งเบาภาระงานเบื้องหลัง และทำการคำนวณอัตราส่วนเงินสำรองสุทธิเพื่อเช็คสภาพคล่องแบบเรียลไทม์",
    },
    architecture: {
      en: [
        "Core Java 21 / Spring Boot 3 financial engine managing append-only dual-leg ledger entries to guarantee balanced assets (Assets = Liabilities + Equity).",
        "NestJS gateway monorepo using Prisma ORM with PostgreSQL schemas segregated for identity, kyc, admin, and integration.",
        "Strict lexicographical lock sorting sequencing protocol on wallet UUIDs to eliminate database deadlocks under concurrent transfers.",
        "Event-driven asynchronous notification workers decoupled via Apache Kafka message queues, saving client thread latencies.",
      ],
      th: [
        "แกนประมวลผลทางการเงินหลักด้วย Java 21 / Spring Boot 3 บันทึกธุรกรรมเพิ่มเท่านั้นแบบบัญชีคู่ เพื่อรับประกันดุลยภาพทางบัญชี (Assets = Liabilities + Equity)",
        "ระบบ NestJS Gateway พัฒนาขึ้นแบบ Monorepo ร่วมกับ Prisma ORM พร้อมแบ่งแยกขอบเขตฐานข้อมูล PostgreSQL เป็น Schema ชัดเจน (identity, kyc, admin, integration)",
        "จัดวางลำดับขั้นตอนการเข้าล็อกทรัพยากรตามลำดับอักษร (Lexicographical lock sorting) บนรหัส UUID เพื่อขจัดปัญหาการแย่งล็อกค้าง (Deadlocks) ระหว่างรอโอนเงินพร้อมกัน",
        "การส่งข้อมูลแจ้งเตือนแบบอะซิงโครนัสผ่าน Apache Kafka dispatches ช่วยลดความล่าช้าบนการร้องขอหลักและการเชื่อมต่อของ Client",
      ],
    },
    highlights: [
      {
        title: { en: "Zero-Deadlock Concurrency", th: "การประมวลผลไร้ล็อกชะงัก (Zero-Deadlock)" },
        description: {
          en: "Guaranteed deadlock-free transfers via an alphabetical lexicographical locking sequence on UUIDs that prevents circular wait states.",
          th: "รับประกันการโอนเงินที่ไร้การล็อกแย่งทรัพยากรค้าง โดยเรียงลำดับการเข้าล็อกบัญชีคู่แบบพจนานุกรมตามรหัส UUID ป้องกันการเกิดสภาวะวงกลมค้างคอยของเธรด",
        },
        icon: "⚡",
      },
      {
        title: { en: "Immutable Accounting", th: "ระบบดุลบัญชีที่ไม่สามารถแก้ไขย้อนหลังได้" },
        description: {
          en: "Strict append-only journal architecture with dual-leg ledger audit entries for balance mutations, ensuring a mathematically conserved ledger.",
          th: "จัดทำบัญชีแยกประเภทแบบบันทึกเพิ่มขึ้นเท่านั้น (Append-only) โดยไม่มีการลบหรือแก้ไขอดีต ทุกธุรกรรมจะบันทึกเป็นคู่ดุลตามสมการทางคณิตศาสตร์เสมอ",
        },
        icon: "🛡️",
      },
      {
        title: { en: "Solvency & Liquidity Audits", th: "ตรวจสอบสภาพคล่องและเงินสำรองสุทธิ" },
        description: {
          en: "Automated corporate sweep audits and reconciliation monitoring measuring custodian reserve liquidity ratios in real-time.",
          th: "ระบบตรวจสอบเงินกองทุนและกวาดล้างยอดเงินคงเหลือจาก Stripe เข้าสู่บัญชีธนาคารพันธมิตร (SCB/KBank) เพื่อคำนวณสภาพคล่องสำรองไม่ให้ต่ำกว่า 100% ตลอดเวลา",
        },
        icon: "📊",
      },
      {
        title: { en: "AMLO / FinCEN Compliance", th: "การสกัดกั้นการฟอกเงินระดับสากล" },
        description: {
          en: "Fully integrated AML heuristic fraud monitor flagging suspicious structuring/smurfing, layering, and rapid account takeovers.",
          th: "รวมระบบวิเคราะห์พฤติกรรมธุรกรรมน่าสงสัย คัดกรองการกระทำแบบปั่นยอดต่ำเลี่ยงกฎหมาย (Structuring/Smurfing) การโอนย้ายเงินว่องไวหลบเลี่ยงการตรวจสอบ (Layering) และการระงับบัญชีเมื่อตรวจพบการขโมยสิทธิ์",
        },
        icon: "🕵️",
      },
    ],
    techStack: [
      {
        name: "Java Spring Boot",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      {
        name: "NestJS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Kafka",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
      },
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        size: "w-4 h-4",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
    ],
    githubUrl: "https://github.com/wiiznu17/j-ledger",
    demoUrl: "https://p-wallet.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/p-wallet",
    bullets: {
      en: [
        "Designed and engineered the core Java 21 / Spring Boot 3 financial engine implementing append-only double-entry bookkeeping.",
        "Eliminated transactional database deadlocks via an alphabetical lexicographical UUID lock sorting protocol during concurrent transfers.",
        "Decoupled transaction APIs from peripheral processes using Apache Kafka event-driven NestJS consumer workers.",
        "Authored 113 rigorous Mockito & JUnit 5 unit tests verifying absolute solvency, ledger consistency, and AML logic.",
      ],
      th: [
        "ออกแบบและพัฒนาแกนระบบการเงินหลักด้วย Java 21 / Spring Boot 3 บันทึกประวัติสมการบัญชีแบบบันทึกเพิ่มขึ้นเท่านั้นแบบไร้ขีดจำกัด",
        "ขจัดปัญหาคิวล็อกฐานข้อมูลหยุดชะงัก (Deadlocks) อย่างมีประสิทธิภาพโดยการจัดเรียงลำดับการจองล็อก UUID ตามตัวอักษร",
        "ตัดการเชื่อมต่อระหว่าง API ธุรกรรมหลักออกจากบริการข้างเคียงที่ทำงานช้า โดยการส่งผ่านคิวงานแบบอะซิงโครนัสด้วย Apache Kafka",
        "เขียนการทดสอบประสิทธิภาพที่ครอบคลุมมากถึง 113 กรณีทดสอบด้วย JUnit 5 และ Mockito เพื่อรับรองความถูกต้องของระบบบัญชีสูงสุด",
      ],
    },
    images: [
      {
        url: "/images/projects/p-wallet.png",
        title: {
          en: "J-Ledger Mobile E-Wallet Interface Mockup",
          th: "ภาพจำลองแอปพลิเคชันกระเป๋าเงินดิจิทัลมือถือ J-Ledger",
        },
        description: {
          en: "Premium Glassmorphism Mobile Wallet Dashboard showing active balances, real-time ledger verification, and transaction history tracking.",
          th: "แดชบอร์ดแอปกระเป๋าเงินมือถือดีไซน์กระจกใสแสดงยอดคงเหลือ การแจ้งเตือนความถูกต้องของสมการบัญชี และประวัติโอนเงินเรียลไทม์",
        },
      },
      {
        url: "/images/projects/p-wallet_ledger.png",
        title: {
          en: "Double-Entry Bookkeeping Ledger Engine",
          th: "ระบบประมวลผลสมการดุลบัญชีแบบบันทึกคู่ (Double-Entry)",
        },
        description: {
          en: "Strict append-only financial journal ledger in Spring Boot 3 implementing dual-leg ledger audit entries to enforce balanced assets.",
          th: "สมุดบันทึกรายการบัญชีที่ไม่สามารถแก้ไขหรือลบย้อนหลังได้ในระบบ Spring Boot 3 บังคับเขียนบันทึกคู่แบบดุลเสมอ",
        },
      },
      {
        url: "/images/projects/p-wallet_kyc.png",
        title: {
          en: "J-Ledger Administrative & Compliance Portal",
          th: "หน้าจอดูแลระบบตรวจสอบการทำธุรกรรมการเงินและสกัดฟอกเงิน (AML Portal)",
        },
        description: {
          en: "Dark-themed administrative audit portal displaying systemic assets vs. liabilities charts, transaction rate limit logs, and active AML freeze alerts.",
          th: "พอร์ทัลฝั่งเจ้าหน้าที่แสดงผลความดุลระหว่างสินทรัพย์และหนี้สินของทั้งระบบ มีบันทึกคิวประมวลผล และการแจ้งเตือนระงับบัญชีการฟอกเงินผิดกฎหมาย",
        },
      },
    ],
  },
  digishop: {
    id: "digishop",
    title: { en: "DigiShop", th: "DigiShop" },
    subtitle: {
      en: "Multi-vendor E-commerce platform",
      th: "แพลตฟอร์มอีคอมเมิร์ซแบบหลายร้านค้า (Multi-vendor E-Commerce Platform)",
    },
    year: "2025",
    role: {
      en: "Full-Stack Software Engineer & DevOps Lead",
      th: "สถาปนิกนักพัฒนาฟูลสแต็กและผู้นำการวางโครงสร้างระบบ (DevOps)",
    },
    tagline: {
      en: "Scalable, high-throughput microservices commerce monorepo powered by Next.js, Node.js, and Redis task queues.",
      th: "ระบบอีคอมเมิร์ซประสิทธิภาพสูงแบบไมโครเซอร์วิสในสถาปัตยกรรมโมโนรีโป ขับเคลื่อนร่วมกันด้วย Next.js, Node.js และระบบคิวงานประมวลผลบน Redis",
    },
    themeColor: "amber",
    bannerGradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    problem: {
      en: "Coordinating separate applications (Customer store, Merchant dashboard, Admin dashboard) under high user transaction spikes is historically challenging. Storing high-volume data in standard relational databases leads to bottlenecks, invoice generator lag, and slow responses.",
      th: "การควบคุมแอปพลิเคชัน 3 ตัวที่ทำงานแยกส่วนกัน (หน้าเว็บบนฝั่งลูกค้า แผงควบคุมของร้านค้า และแผงคุมระบบกลาง) ในช่วงเวลาที่มีปริมาณการสั่งซื้อพุ่งเข้าชนอย่างล้นหลามเป็นเรื่องท้าทายมาก การจัดเก็บข้อมูลจำนวนมหาศาลลงในฐานข้อมูลความสัมพันธ์แบบดั้งเดิมเพียงตัวเดียวก่อให้เกิดคอขวดและสะดุดในการออกใบเสร็จ PDF ส่งผลให้ระบบตอบสนองได้เชื่องช้า",
    },
    solution: {
      en: "We built a modern multi-vendor system utilizing Turborepo to enforce rigid type-safety across independent Next.js clients. The architecture decouples synchronous API traffic from heavy background jobs using BullMQ and Redis, offloading intensive tasks like stock replenishment, real-time push notifications, and payment gateway checks into isolated containerized workers.",
      th: "พวกเราพัฒนาแพลตฟอร์มการขายอัจฉริยะโดยอาศัยโมโนรีโปของ Turborepo เพื่อควบคุมระบบโครงสร้างประเภทตัวแปร (Type-safety) ระหว่างหน้าเว็บบน Next.js ทั้งหมดอย่างมั่นคง สถาปัตยกรรมนี้ตัดขาดการเรียกเชื่อมต่อ API แบบทันที ออกจากระบบหลังบ้านที่กินกำลังเครื่องสูง โดยหันไปประมวลผลเบื้องหลังแบบอะซิงโครนัสผ่านระบบคิวของ BullMQ ร่วมกับ Redis เพื่อผลักภาระงานหนัก (เช่น การออกใบเสร็จ จัดสรรและเติมสต็อก การยิงแจ้งเตือนแบบเรียลไทม์ และประสานตรวจสอบช่องทางเงิน) ไปให้ตู้คอนเทนเนอร์หลังบ้านทำงานอย่างอิสระ",
    },
    architecture: {
      en: [
        "Monorepo design with Turborepo to leverage unified package caching and instant compiler hot-reloading.",
        "Asynchronous queuing with BullMQ to fully isolate long-running invoice routines and payment checkout sweeps.",
        "Highly responsive Sequelize SQL query optimization incorporating indexing on hot database indexes.",
        "Secure JWT auth + Role-Based Access Control (RBAC) to strictly isolate sensitive merchant sales dashboards from customers.",
      ],
      th: [
        "สถาปัตยกรรมโมโนรีโปด้วย Turborepo ช่วยขจัดความล่าช้าในการพัฒนาด้วยแพ็กเกจที่แชร์ร่วมกันและระบบเก็บข้อมูลแคชคอมไพล์อัจฉริยะ",
        "ระบบแยกงานประมวลผลหนักออกจาก API หลักผ่านคิวงาน BullMQ ทำการ Sweeps สถานะหักเงินและสร้างเอกสาร PDF เบื้องหลังแบบไม่ขัดจังหวะการกดซื้อของลูกค้า",
        "ปรับจูนประสิทธิภาพคิวรี SQL ของ Sequelize ORM โดยการวิเคราะห์และติดดัชนี (Indexing) บนคีย์สำคัญของตาราง MySQL",
        "การยืนยันตัวตนด้วย JWT ที่มีความปลอดภัยสูงสุดพร้อมการกำหนดสิทธิ์ตามบทบาท (RBAC) กั้นแดชบอร์ดข้อมูลค้าขายของแต่ละร้านค้าให้แยกจากฝั่งลูกค้าอย่างสมบูรณ์",
      ],
    },
    highlights: [
      {
        title: { en: "Turborepo Monorepo", th: "โมโนรีโปด้วย Turborepo" },
        description: {
          en: "Shared interfaces and visual themes between Customer, Merchant, and Admin layouts, ensuring 100% code reuse.",
          th: "แลกเปลี่ยนชุดส่วนติดต่อโปรแกรมและชุดสไตล์พื้นฐานร่วมกันระหว่างหน้าลูกค้า หน้าผู้ค้า และระบบกลาง ส่งผลให้โค้ดสามารถเรียกกลับมาใช้ใหม่ได้ 100%",
        },
        icon: "📦",
      },
      {
        title: { en: "Redis Background Queues", th: "คิวงานประมวลผลหลังบ้านบน Redis" },
        description: {
          en: "Offloaded critical actions (such as transaction notifications) to independent BullMQ background workers, saving client threads.",
          th: "ผลักดันงานประมวลผลที่กินทรัพยากร (เช่น รายการแจ้งเตือนการสั่งสินค้า) ไปไว้เบื้องหลังผ่านโมดูล BullMQ ช่วยลดภาระบนเธรดการตอบสนองหน้าเว็บ",
        },
        icon: "⚙️",
      },
      {
        title: { en: "Sequelize Optimizations", th: "การจูนฐานข้อมูลและ Sequelize" },
        description: {
          en: "Engineered database indexing, pagination, and compound keys to support ultra-fast query execution.",
          th: "ออกแบบจัดทำดัชนีฐานข้อมูล การซอยแบ่งหน้า และคีย์ผสมผสานเพื่อสนับสนุนให้ระบบสามารถค้นหาผลลัพธ์การซื้อขายยอดมหาศาลได้อย่างรวดเร็วในระดับเสี้ยววินาที",
        },
        icon: "💾",
      },
      {
        title: { en: "Azure Cloud Infrastructure", th: "โครงสร้างพอร์ตคลาวด์ Azure" },
        description: {
          en: "Deployed containerized services securely utilizing Docker containers mapped into scalable Azure App Services.",
          th: "ปรับใช้และติดตั้งแอปพลิเคชันรูปแบบคอนเทนเนอร์ (Dockerized Services) ขึ้นไปรันบนระบบยืดหยุ่นคลาวด์ Azure App Services อย่างปลอดภัย",
        },
        icon: "☁️",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js (Express)",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Sequelize ORM",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      },
      { name: "Turborepo", logo: "custom-turborepo" },
      { name: "BullMQ", logo: "custom-bullmq" },
      {
        name: "Azure",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      },
    ],
    githubUrl: "https://github.com/wiiznu17/digishop",
    demoUrl: "https://digishop.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/digishop",
    bullets: {
      en: [
        "Developed a multi-vendor e-commerce system using Microservices and Turborepo monorepo for scalability.",
        "Developed three distinct Next.js web applications (Customer, Merchant, Admin) supported by synchronized backends.",
        "Implemented Background Workers via BullMQ for asynchronous tasks like payment timeouts and order updates.",
      ],
      th: [
        "พัฒนาโครงข่ายตลาดการค้าหลายร้านค้าโดยประยุกต์ใช้สถาปัตยกรรมไมโครเซอร์วิสและ Turborepo โมโนรีโปเพื่อการรองรับขนาดของระบบ",
        "จัดสรรพัฒนาแอปพลิเคชัน Next.js ถึง 3 ตัว (สำหรับลูกค้า สำหรับผู้ค้า สำหรับแอดมินกลาง) เชื่อมต่อด้วยหลังบ้านที่ซิงค์สถานะอย่างเสถียร",
        "ติดตั้งโมดูลประมวลผลเบื้องหลังเบลอระบบด้วย BullMQ สำหรับช่วยขจัดปัญหารอชำระเงินหมดเวลาหรือการปรับสถานะออเดอร์หลังบ้าน",
      ],
    },
    images: [
      {
        url: "/images/projects/digishop.png",
        title: { en: "DigiShop E-Commerce Storefront", th: "หน้าร้านค้าออนไลน์หลัก DigiShop" },
        description: {
          en: "Modern, high-performance customer storefront demonstrating lightning-fast Next.js rendering, multi-vendor category browsing, and catalog search.",
          th: "หน้าร้านเว็บบนฝั่งลูกค้าที่ทันสมัย แสดงผลตอบรับรวดเร็ว ค้นหาประเภทสินค้าและจัดเรียงระบบตะกร้าออนไลน์ได้อย่างแม่นยำว่องไว",
        },
      },
      {
        url: "/images/projects/digishop_merchant.png",
        title: {
          en: "Merchant Sales & Inventory Dashboard",
          th: "แดชบอร์ดรายงานและควบคุมคลังของผู้ค้าปลีก",
        },
        description: {
          en: "Clean Next.js Merchant portal tracking daily revenues, order fulfillments, and inventory replenishment limits through optimized Sequelize MySQL indexes.",
          th: "แผงพอร์ทัลร้านค้า Next.js ที่สะอาดตา สามารถเฝ้ามองประวัติรายรับประวัน จัดการคลัง เติมของเข้าร้านได้อย่างเสถียรผ่านอินเด็กซ์ Sequelize ใน MySQL",
        },
      },
      {
        url: "/images/projects/digishop_admin.png",
        title: {
          en: "Admin Worker Queue Console",
          th: "ระบบแผงประเมินและดูแลคิวการประมวลผลเบื้องหลังของผู้ดูแลระบบ",
        },
        description: {
          en: "Centralized administrator console interface displaying active BullMQ backend workers, memory consumption, latency metrics, and real-time transaction event logs.",
          th: "แผงวิศวกรผู้ดูแลระบบกลางคอยตรวจตราสุขภาพคิวงานเบื้องหลังของ BullMQ อัตราการใช้หน่วยความจำ และตรวจสอบประวัติล็อกธุรกรรมเรียลไทม์",
        },
      },
    ],
  },
  studybuddy: {
    id: "studybuddy",
    title: { en: "StudyBuddy", th: "StudyBuddy" },
    subtitle: {
      en: "Matching platform for study & project recruitment",
      th: "แพลตฟอร์มจับคู่เพื่อนร่วมชั้นเรียนเรียนรู้และการจัดหาสมาชิกทีมโครงการวิชาการ",
    },
    year: "2026",
    role: {
      en: "Lead Full-Stack Web Developer",
      th: "สถาปนิกผู้นำการพัฒนาฟูลสแต็กหน้าเว็บและ API",
    },
    tagline: {
      en: "Secure academic networking and real-time team recruitment platform powered by NestJS and Supabase.",
      th: "ระบบเครือข่ายวิชาการและการจัดรับสมัครทีมร่วมงานเรียลไทม์ที่เน้นความปลอดภัยและจำกัดสิทธิ์ข้อมูล ขับเคลื่อนร่วมด้วย NestJS และ Supabase",
    },
    themeColor: "indigo",
    bannerGradient: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
    problem: {
      en: "Academic spaces are highly collaborative, but students struggle to securely locate team partners with corresponding skills. Standard search applications store private contact records insecurely, allowing unauthorized views or database modifications.",
      th: "พื้นที่ทางวิชาการและการเรียนรู้ในสถาบันล้วนต้องการความร่วมมือสูง แต่นักศึกษาขาดช่องทางค้นหาพันธมิตรหรือเพื่อนร่วมทีมที่มีทักษะวิชาการตรงกันอย่างปลอดภัย แอปค้นหาทั่วไปมักเก็บประวัติช่องทางติดต่อหรือโปรไฟล์ไม่ปลอดภัย ก่อให้เกิดความเสี่ยงถูกเจาะหรือโดนสอดแนมช่องโหว่ฐานข้อมูล",
    },
    solution: {
      en: "We engineered a matching engine backed by PostgreSQL Row Level Security (RLS) policies within Supabase. Every entry, match event, and text conversation is isolated at the database layer. The platform processes matching metrics via clean, structured NestJS APIs and establishes real-time WebSockets communication for instant messaging notification loops.",
      th: "พวกเราพัฒนาเครื่องมือจับคู่อัจฉริยะที่ได้รับการปกป้องด้วยนโยบายความปลอดภัยระดับแถวข้อมูล (Row Level Security - RLS) ของ PostgreSQL ในฐานข้อมูล Supabase เพื่อตัดขาดและแยกโปรไฟล์การแชต การลงทะเบียนกลุ่มเรียนของแต่ละบุคคลในชั้นฐานข้อมูล โดยคัดกรองข้อมูลประวัติผ่านโครงสร้าง NestJS APIs ที่เป็นระเบียบ และเชื่อมต่อช่องสัญญาณ WebSocket สื่อสารและสนทนารวดเร็วเรียลไทม์",
    },
    architecture: {
      en: [
        "Strict Row Level Security (RLS) ensuring students can only view authorized academic records and matches.",
        "Supabase Realtime channels implementing sub-second socket messages between students.",
        "Clean TypeScript controllers and NestJS validation guards blocking input injection or malformed data packets.",
        "Bespoke physical dashboard permitting students to filter opportunities dynamically based on tags and skills.",
      ],
      th: [
        "ความปลอดภัยระดับ RLS ที่เข้มงวด รับประกันอย่างสูงว่านักศึกษาแต่ละคนจะได้รับสิทธิ์เฉพาะการเข้าดูข้อมูลและกลุ่มที่ได้รับอนุญาตเท่านั้น",
        "ช่องทาง Realtime บน Supabase เชื่อมต่อข้อความสนทนาและการจับคู่และยิงข้ามหากันทันทีผ่าน WebSocket ในระดับต่ำกว่าวินาที",
        "การเขียนส่วนคุมด้วย TypeScript ใน NestJS เสริมเกราะป้องกันอินพุตสกัดโค้ดแปลกปลอม (Input injection) หรือชุดข้อมูลที่ชำรุดเสียหาย",
        "แดชบอร์ดฝั่งนักเรียนที่ลื่นไหลสวยงาม สนับสนุนตัวกรองกลุ่มเรียนและงานวิจัยวิชาการตามประเภทรายวิชา ชั้นปี และป้ายแท็กทักษะ",
      ],
    },
    highlights: [
      {
        title: { en: "Row Level Security (RLS)", th: "การรักษาความปลอดภัยระดับ RLS" },
        description: {
          en: "Ensured complete data separation at the database engine tier, blocking cross-user leaks or unauthorized profile updates.",
          th: "รับรองการแบ่งแยกขอบเขตโปรไฟล์อย่างเด็ดขาดในชั้นเครื่องยนต์ฐานข้อมูล ปิดประตูการแทรกซึม สอดส่อง หรือการแก้ไขข้อมูลข้ามบัญชีเด็ดขาด",
        },
        icon: "🛡️",
      },
      {
        title: { en: "Real-Time Matching", th: "การจับคู่เรียลไทม์ว่องไว" },
        description: {
          en: "Leveraged WebSocket channels to feed instant matches and active chats directly to matching dashboards.",
          th: "ใช้ขีดความสามารถของช่องสัญญาณ WebSocket เพื่อส่งข้อมูลการอัปเดตสถานะการแชตและการรวมกลุ่มจับคู่ขึ้นหน้าจอทันทีเมื่อเกิดเหตุการณ์",
        },
        icon: "💬",
      },
      {
        title: { en: "Structured API Routing", th: "โครงสร้างโมดูลาร์ NestJS สะอาด" },
        description: {
          en: "Built modular architecture in NestJS featuring strict compiler validation, type checks, and reusable auth middleware.",
          th: "สร้างและจัดวางสถาปัตยกรรมระเบียบโมดูลใน NestJS เสริมตัวคัดกรองข้อมูล (Validation) และซอฟต์แวร์กลางตรวจสอบสิทธิ์นำกลับมาใช้ใหม่ได้",
        },
        icon: "🧩",
      },
      {
        title: { en: "KKU Academic Focus", th: "ออกแบบเพื่อสังคมวิชาการ มข." },
        description: {
          en: "Customized to align with Khon Kaen University student directories, permitting searches filtered by major, class year, and interest.",
          th: "ปรับแต่งพอร์ตการทำงานให้เข้ากับระบบคณะวิชาการและ directories ของมหาวิทยาลัยขอนแก่น คัดกรองเพื่อนร่วมกลุ่มเรียนได้ตรงตามเป้าหมายของคณะ",
        },
        icon: "🎓",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "NestJS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Supabase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
    ],
    githubUrl: "https://github.com/wiiznu17/study-buddy",
    demoUrl: "https://study-buddy.space/",
    videoUrl: "https://video.wiiznu.dev/studybuddy",
    bullets: {
      en: [
        "Developed a social platform to match students with shared academic interests for study groups.",
        "Focused on frontend development and backend API refinement for a seamless UX.",
        "Managed database persistence and implemented Row Level Security (RLS) for student data using PostgreSQL via Supabase.",
      ],
      th: [
        "พัฒนาแพลตฟอร์มโซเชียลส่งเสริมวิชาการจับคู่ผู้เรียนที่มีความสนใจด้านการอ่านหนังสือและสัมมนาทักษะเดียวกันเป็นกลุ่มเรียน",
        "มุ่งเน้นการวางขอบเขตการพัฒนาส่วนติดต่อผู้ใช้ (Frontend UX) และหลังบ้านที่สะอาดมีระเบียบเพื่อประสบการณ์ที่ลื่นไหลไร้สะดุด",
        "จัดระเบียบและเฝ้าดูแลฐานข้อมูล Supabase PostgreSQL โดยอาศัยการจำกัดความปลอดภัยสิทธิ์เข้าถึง RLS ชั้นยอดเพื่อความปลอดภัยสูงสุด",
      ],
    },
    images: [
      {
        url: "/images/projects/studybuddy.png",
        title: {
          en: "StudyBuddy Landing & Community Portal",
          th: "หน้าแรกแพลตฟอร์มสังคมวิชาการ StudyBuddy",
        },
        description: {
          en: "Secure student match landing layout customized for Khon Kaen University student lists, presenting clear collaborative study opportunities.",
          th: "ส่วนหน้าแรกของแพลตฟอร์มที่ปรับแต่งระบบคัดแยกอย่างดีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น นำเสนอโอกาสรวมกลุ่มเรียนที่ชัดเจน",
        },
      },
      {
        url: "/images/projects/studybuddy_explore.png",
        title: {
          en: "Row-Level-Security Study Partner Grid",
          th: "หน้าค้นหาบอร์ดรายชื่อเพื่อนร่วมชั้นเรียนแบบ RLS",
        },
        description: {
          en: "Row Level Security (RLS) enabled profiles search board isolating academic student profiles by major, skills, and academic interests securely via Supabase.",
          th: "ระบบป้องกันความปลอดภัย RLS บนตารางค้นหารายชื่อ ช่วยแยกโปรไฟล์ ค้นหาจับกลุ่มด้วยตัวกรองวิชาการ ชั้นปี และทักษะอย่างมั่นคง",
        },
      },
      {
        url: "/images/projects/studybuddy_chat.png",
        title: { en: "Real-Time WebSocket Group Chat", th: "ห้องสนทนาเรียลไทม์ส่งข้อความแชตสด" },
        description: {
          en: "WebSocket communication channel providing students with real-time text message loops, typing notifications, and instant resource sharing rooms.",
          th: "ช่องสนทนากลุ่มประมวลผลสดด้วย WebSocket สนับสนุนการพิมพ์ข้อความเห็นสถานะทันที (Typing alerts) และส่งแชร์แนบเอกสารวิชาการได้อย่างเรียบลื่น",
        },
      },
    ],
  },
}
