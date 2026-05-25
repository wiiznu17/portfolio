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
    title: { en: "P-Wallet", th: "P-Wallet" },
    subtitle: {
      en: "High-Throughput E-Wallet & Double-Entry Ledger Core",
      th: "ระบบกระเป๋าเงินดิจิทัลและระบบบัญชีแยกประเภทแบบคู่",
    },
    year: "2026",
    role: {
      en: "Fullstack Developer",
      th: "Fullstack Developer",
    },
    tagline: {
      en: "A transactional ledger and mobile e-wallet system. Built with Spring Boot, NestJS, Kafka, and Redis, utilizing double-entry bookkeeping and UUID lock-sorting to prevent database deadlocks under high concurrency.",
      th: "ระบบกระเป๋าเงินอิเล็กทรอนิกส์และบัญชีแยกประเภทแบบคู่ พัฒนาด้วย Spring Boot, NestJS, Kafka และ Redis โดยใช้โครงสร้างแบบบันทึกคู่และระบบเรียงลำดับคิวล็อกเพื่อป้องกันปัญหาระบบค้างเมื่อโอนเงินพร้อมกันจำนวนมาก",
    },
    themeColor: "blue",
    bannerGradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    problem: {
      en: "Processing concurrent financial transactions without balance discrepancies or system deadlocks is complex. Under high load, concurrent updates to the same account can cause race conditions or circular database locks (deadlocks). Additionally, running heavy compliance tasks like KYC verification and AML checks synchronously inside main request threads severely degrades transaction throughput.",
      th: "การโอนเงินจำนวนมากพร้อมกันมักทำให้เกิดปัญหาข้อมูลไม่ตรงกันและฐานข้อมูลค้าง (Deadlocks) เนื่องจากระบบแย่งกันเขียนทับยอดเงินในเวลาเดียวกัน นอกจากนี้ การรันโปรเซสที่ใช้เวลาและพลังประมวลผลสูงอย่างการอัปโหลดเอกสารยืนยันตัวตน (KYC) หรือการวิเคราะห์ธุรกรรมต้องสงสัย (AML) ร่วมกับเธรดโอนเงินหลักโดยตรง ทำให้ระบบทำงานได้ช้าและเสี่ยงต่อการล่ม",
    },
    solution: {
      en: "I developed a double-entry ledger platform to ensure mathematical balance consistency (Assets = Liabilities + Equity) using append-only journal entries. To solve database deadlocks under highly concurrent balance updates, I implemented a strict lexicographical lock sorting sequence on wallet UUIDs. I segregated the project into a Java Spring Boot microservice for core transactions and a NestJS gateway for identity and management. Heavy processes, such as transaction dispatches and KYC image processing, were offloaded using Apache Kafka event-driven workers.",
      th: "ผมเลือกใช้ระบบบัญชีแยกประเภทแบบคู่ (Double-entry ledger) ซึ่งบันทึกธุรกรรมเป็นแบบเพิ่มข้อมูลเท่านั้น (Append-only journal) เพื่อรักษาสมการสมดุลทางบัญชีเสมอ และป้องกันการแก้ไขข้อมูลย้อนหลัง ปัญหา Deadlocks แก้ไขโดยกำหนดกฎให้ระบบเข้าล็อกกระเป๋าเงินตามลำดับตัวอักษรของ UUID ของคู่โอนเสมอ นอกจากนี้ ผมยังแยกส่วนระบบประมวลผลแกนหลักทางการเงิน (Java Spring Boot) ออกจากระบบประตูหน้าบ้านและจัดการข้อมูลทั่วไป (NestJS) โดยย้ายงานประมวลผลหลังบ้านที่ไม่เร่งด่วน เช่น ระบบส่งข้อมูลยืนยันตัวตน ไปรันแบบอะซิงโครนัสผ่าน Apache Kafka",
    },
    architecture: {
      en: [
        "Java 21 / Spring Boot 3 financial engine managing append-only double-entry transaction journals to guarantee balanced ledger accounts.",
        "NestJS gateway monorepo using Prisma ORM with segregated PostgreSQL schemas for identity, KYC, and admin tasks.",
        "Strict lexicographical lock sorting sequence on wallet UUIDs to eliminate database deadlocks under high-concurrency transfers.",
        "Asynchronous operations (e.g. notifications and KYC document verification) offloaded to background workers via Apache Kafka.",
      ],
      th: [
        "ระบบหลังบ้านประมวลผลธุรกรรมการเงินด้วย Java 21 และ Spring Boot 3 บันทึกยอดตามหลักบัญชีคู่แบบเพิ่มข้อมูลเท่านั้น (Append-only journal)",
        "NestJS Gateway ในโครงสร้างแบบ Monorepo ร่วมกับ Prisma ORM แยกฐานข้อมูลแต่ละโมดูลอย่างเป็นสัดส่วนเพื่อความง่ายในการสเกล",
        "กฎการล็อกบัญชีโอนเงินตามลำดับตัวอักษรของ UUID (Lexicographical lock sorting) เพื่อตัดโอกาสเกิด Deadlocks ถาวร",
        "ส่งงานประมวลผลรอง เช่น การแจ้งเตือนและการจัดส่งเอกสารระบบ ไปรันนอกเธรดหลักแบบอะซิงโครนัสผ่าน Apache Kafka",
      ],
    },
    highlights: [
      {
        title: { en: "Zero-Deadlock Concurrency", th: "การประมวลผลไร้ล็อกชะงัก (Zero-Deadlock)" },
        description: {
          en: "Enforces a strict resource locking order using UUID lexicographical sorting to prevent deadlocks during concurrent transfers.",
          th: "บังคับล็อคบัญชีต้นทางและปลายทางเรียงตามลำดับตัวอักษรของ UUID ป้องกันไม่ให้ระบบโอนเงินขัดแย้งและค้างระหว่างทำธุรกรรมพร้อมกัน",
        },
        icon: "⚡",
      },
      {
        title: { en: "Append-Only Ledger", th: "ระบบดุลบัญชีแบบคู่และเพิ่มข้อมูลเท่านั้น" },
        description: {
          en: "Every transaction writes two matching ledger entries (debit/credit) with no updates or deletions allowed, ensuring a complete audit trail.",
          th: "บันทึกบัญชีแบบคู่และเพิ่มข้อมูลเพิ่มขึ้นเท่านั้นโดยไม่มีการแก้ไขหรือลบ เพื่อรักษาความโปร่งใสและสร้างประวัติที่ตรวจสอบย้อนหลังได้ 100%",
        },
        icon: "🛡️",
      },
      {
        title: { en: "Solvency & Liquidity Audits", th: "ระบบตรวจสอบเงินกองทุนและเงินสำรองสุทธิ" },
        description: {
          en: "Monitors and calculates aggregate balances and reserves automatically to ensure cash flow liquidity matches customer deposits.",
          th: "ระบบรวบรวมยอดเงินสำรองและมอนิเตอร์ยอดในระบบเทียบกับเงินฝากจริงแบบเรียลไทม์ ป้องกันไม่ให้เงินทุนสำรองติดขัด",
        },
        icon: "📊",
      },
      {
        title: { en: "AML Compliance Checks", th: "ตัวตรวจจับธุรกรรมที่เข้าข่ายฟอกเงิน" },
        description: {
          en: "Flags suspicious transaction patterns such as structuring, layered transfers, and rapid high-volume movements.",
          th: "ตรวจจับพฤติกรรมธุรกรรมผิดปกติ เช่น การโอนยอดเงินจำนวนเท่าๆ กันถี่ผิดปกติเพื่อหลีกเลี่ยงการรายงานตามกฎหมาย หรือการย้ายเงินรวดเร็วผิดสังเกต",
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
        "Built the core transactional engine with Spring Boot and JPA Hibernate, enforcing double-entry ledger bookkeeping rules.",
        "Resolved transaction deadlocks by implementing a lexicographical UUID lock sorting protocol.",
        "Offloaded background email sends, SMS dispatches, and KYC image analysis queues using Apache Kafka workers.",
        "Wrote over 113 comprehensive JUnit and Mockito tests to cover ledger accuracy, concurrent transfers, and validation rules.",
      ],
      th: [
        "สร้างเอนจิ้นหลักประมวลผลธุรกรรมทางการเงินด้วย Spring Boot และ Hibernate ในโครงสร้างสากลของการบันทึกบัญชีแยกประเภทแบบคู่",
        "ขจัดปัญหาฐานข้อมูลค้าง (Deadlocks) อย่างมีประสิทธิภาพด้วยระบบเรียงลำดับคีย์โอนเงินตามตัวอักษรของ UUID",
        "แยกงานส่งอีเมล/SMS และงานประมวลผลข้อมูล KYC ย้ายไปรันเบื้องหลังแบบอะซิงโครนัสผ่านคิวงาน Apache Kafka",
        "เขียนการทดสอบระบบครอบคลุมกว่า 113 เคสด้วย JUnit และ Mockito เพื่อรับประกันความถูกต้องสมบูรณ์ในการโอนเงินทุกรูปแบบ",
      ],
    },
    images: [
      {
        url: "/images/projects/p-wallet/1_client.png",
        title: {
          en: "Mobile Wallet Client Interface",
          th: "หน้าต่างแอปพลิเคชันสำหรับลูกค้าบนมือถือ P-Wallet",
        },
        description: {
          en: "React Native client dashboard showing account balance, quick transfer action, and real-time transaction tracking.",
          th: "แดชบอร์ดแอปพลิเคชันมือถือพัฒนาด้วย React Native แสดงยอดเงินคงเหลือ ทางลัดการโอนเงิน และประวัติธุรกรรมที่อัปเดตเรียลไทม์",
        },
      },
      {
        url: "/images/projects/p-wallet/2_core.png",
        title: {
          en: "Spring Boot Core Double-Entry Ledger",
          th: "ระบบประมวลผลบัญชีแยกประเภทแบบคู่บน Spring Boot",
        },
        description: {
          en: "Append-only database ledger journal records in Java and Spring Boot, maintaining mathematically balanced accounting.",
          th: "สมุดจดบันทึกประวัติการเงินแบบเพิ่มข้อมูลเท่านั้น พัฒนาด้วย Spring Boot เพื่อรักษาสมดุลสมการดุลบัญชีและรองรับการตรวจสอบย้อนหลัง",
        },
      },
      {
        url: "/images/projects/p-wallet/3_admin.png",
        title: {
          en: "Backoffice Admin Dashboard",
          th: "ระบบจัดการและตรวจสอบธุรกรรมหลังบ้านสำหรับเจ้าหน้าที่",
        },
        description: {
          en: "Next.js administrative workspace displaying system balances, active Kafka queue metrics, and compliance freeze alerts.",
          th: "แดชบอร์ดหลังบ้านพัฒนาด้วย Next.js แสดงผลสถานะความปลอดภัยของเงินสำรอง สัญญาณสุขภาพของคิวงาน Kafka และระบบแจ้งเตือนบล็อกบัญชีน่าสงสัย",
        },
      },
    ],
  },
  digishop: {
    id: "digishop",
    title: { en: "DigiShop", th: "DigiShop" },
    subtitle: {
      en: "Multi-Vendor E-Commerce Platform & Background Job Engine",
      th: "แพลตฟอร์มอีคอมเมิร์ซแบบหลายร้านค้าและระบบคิวงานประมวลผลหลังบ้าน",
    },
    year: "2025",
    role: {
      en: "Fullstack Developer & DevOps Lead",
      th: "Fullstack Developer & DevOps Lead",
    },
    tagline: {
      en: "A high-performance e-commerce platform built as a Turborepo monorepo with Next.js clients, Express APIs, and BullMQ/Redis to process asynchronous jobs like invoice generation and stock management.",
      th: "แพลตฟอร์มอีคอมเมิร์ซหลายร้านค้าในรูปแบบ Monorepo ด้วย Turborepo ที่ประกอบด้วยหน้าเว็บลูกค้า ร้านค้า และแอดมินบน Next.js พร้อมบริการหลังบ้านและคิวงานประมวลผลด่วนอย่าง BullMQ และ Redis",
    },
    themeColor: "amber",
    bannerGradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    problem: {
      en: "Running customer storefronts, seller inventory portals, and admin management tools in isolation often leads to inconsistent TypeScript definitions, shared UI styling duplication, and redundant configuration files. Furthermore, heavy synchronous processes like PDF invoice generation, stock allocation calculations, and high-frequency notifications directly on HTTP request threads trigger major performance drops during traffic surges.",
      th: "การพัฒนาเว็บ 3 ตัวแยกกัน (สำหรับลูกค้า, ร้านค้า, และแอดมิน) มักประสบปัญหาเรื่อง Type ข้อมูลไม่ตรงกัน สไตล์อินเตอร์เฟสซ้ำซ้อน และความยากลำบากในการปรับปรุงแก้ไขร่วมกัน อีกทั้งการประมวลผลงานที่ใช้พลังงานเซิร์ฟเวอร์สูง เช่น การเขียนเอกสารใบเสร็จ PDF และการจัดสรรตัดสต็อกแบบเรียลไทม์บน HTTP เธรดหลัก มักส่งผลให้เซิร์ฟเวอร์ตอบสนองช้าและค้างในช่วงที่มีคนเข้ามาจับจ่ายหนาแน่น",
    },
    solution: {
      en: "We developed DigiShop using Turborepo to unify the codebase into a single monorepo, sharing TS types and UI components across all three Next.js applications to speed up development and maintain visual consistency. To decouple HTTP traffic from resource-intensive tasks, we integrated BullMQ with Redis to run a fleet of background worker containers that process payments, queue email alerts, and compile PDF invoices asynchronously.",
      th: "พวกเราออกแบบระบบนี้เป็น Monorepo โดยใช้ Turborepo เพื่อแชร์ Types และ UI Components ร่วมกันระหว่างแอปพลิเคชัน Next.js ทั้ง 3 ตัว ช่วยให้แก้ไขโค้ดร่วมกันได้อย่างง่ายดายและรักษาหน้าตา UI ให้ไปในทิศทางเดียวกัน และแก้ไขปัญหาเซิร์ฟเวอร์ช้าด้วยการนำระบบคิว BullMQ และ Redis มาใช้ประมวลผลงานหลังบ้านที่มีความหน่วง เช่น การสร้างใบเสนอราคา ใบเสร็จ PDF และระบบตัดคิวสต็อกสินค้า เพื่อปล่อยให้ API หลักตอบสนองต่อผู้ใช้งานได้ทันที",
    },
    architecture: {
      en: [
        "Turborepo monorepo dividing customer, merchant, and admin Next.js code while sharing helper utilities and UI styles.",
        "Asynchronous task queue using BullMQ and Redis to isolate and process PDF compile routines outside web requests.",
        "Optimized Sequelize MySQL queries utilizing compound indexing on high-frequency tables.",
        "Secure authentication via JWT and Role-Based Access Control (RBAC) to enforce security across merchant workspaces.",
      ],
      th: [
        "โครงสร้าง Monorepo ด้วย Turborepo ที่แยกการทำงานของทั้ง 3 หน้าเว็บ Next.js ออกจากกันอย่างเป็นสัดส่วน แต่แชร์ส่วนประกอบโค้ดและโมดูลเชื่อมต่อร่วมกัน",
        "แยกงานหนักที่ใช้โปรเซสเซอร์สูงออกไปรันเบื้องหลังแบบอะซิงโครนัสผ่านระบบคิว BullMQ และ Redis",
        "ปรับแต่งความเร็วในการดึงข้อมูลของ MySQL ด้วยการทำดัชนี (Indexing) บนตารางธุรกรรมการค้าและตารางข้อมูลสินค้ายอดนิยม",
        "ระบบยืนยันตัวตน JWT ร่วมกับสิทธิ์ตามบทบาท (RBAC) เพื่อป้องกันการเข้าถึงข้อมูลยอดขายระหว่างผู้ค้าและลูกค้าทั่วไปอย่างเข้มงวด",
      ],
    },
    highlights: [
      {
        title: { en: "Turborepo Monorepo", th: "โมโนรีโปด้วย Turborepo" },
        description: {
          en: "Shares React interfaces and designs between Customer, Merchant, and Admin web applications, drastically improving code reuse.",
          th: "การจัดเก็บโค้ดในแบบ Monorepo ทำให้แชร์คอมโพเนนต์และโมเดลข้อมูลระหว่างฝั่งลูกค้า ร้านค้า และผู้ดูแลระบบได้เกือบทั้งหมด",
        },
        icon: "📦",
      },
      {
        title: { en: "Redis Background Queues", th: "คิวงานหลังบ้านบน Redis" },
        description: {
          en: "Offloads delayed operations such as email confirmations and status checks to dedicated background workers via BullMQ.",
          th: "โอนย้ายงานที่ทำเสร็จในทันทีไม่ได้ เช่น คิวส่งอีเมลสรุปยอด และการกวาดเช็คออเดอร์ค้างชำระ ไปรันเป็นคิวงานเบื้องหลังด้วย BullMQ",
        },
        icon: "⚙️",
      },
      {
        title: { en: "Database Query Tuning", th: "การจูนคิวรีข้อมูล MySQL" },
        description: {
          en: "Features optimized Sequelize pagination, table joins, and primary key database indexes to ensure snappy listing updates.",
          th: "การปรับแต่งคิวรีของ Sequelize ORM ด้วยการแบ่งหน้าประวัติการซื้อ การจำกัดฟิลด์เชื่อมตาราง และการทำ Indexing เพื่อรองรับข้อมูลการค้าขนาดใหญ่",
        },
        icon: "💾",
      },
      {
        title: { en: "Containerized Deployments", th: "การติดตั้งแอปผ่านตู้คอนเทนเนอร์" },
        description: {
          en: "Packages individual microservices inside Docker containers deployed on Azure App Services for easier scaling.",
          th: "จัดทำระบบในรูปแบบ Docker Container แยกอิสระต่อกัน และติดตั้งบน Azure App Services เพื่ออำนวยความสะดวกในการขยายและจัดการระบบ",
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
        "Built a modular multi-vendor ecommerce codebase inside a Turborepo monorepo structure to unify shared TypeScript interfaces.",
        "Developed customer storefront, vendor management portal, and system administration cockpit using Next.js.",
        "Implemented BullMQ and Redis to execute heavy operations like invoice generation asynchronously.",
        "Optimized MySQL performance by creating targeted compound indices and avoiding N+1 queries in Sequelize.",
      ],
      th: [
        "สร้างโครงสร้างโปรเจกต์แบบ Monorepo ด้วย Turborepo เพื่อจัดระเบียบหน้าเว็บทั้ง 3 ตัว และช่วยประหยัดเวลาแชร์โค้ดโมเดลตัวแปร",
        "พัฒนาส่วนการสั่งซื้อของลูกค้า แผงคลังสินค้าของเจ้าของร้าน และแผงกลางของผู้อำนวยการระบบด้วย Next.js",
        "ใช้ระบบ BullMQ ร่วมกับ Redis เพื่อผลักภาระงานประมวลผลด่วนจำพวกบิลใบเสร็จ PDF และการตัดระบบบัญชีไปทำหลังบ้านแบบไม่บล็อกหน้าเว็บ",
        "ปรับปรุงคิวรีฐานข้อมูล MySQL โดยทำระบบดัชนีคีย์ผสม (Compound Indexes) และระงับปัญหาสอบถามวนซ้ำ (N+1 queries) ของ Sequelize",
      ],
    },
    images: [
      {
        url: "/images/projects/digishop/1_client.png",
        title: {
          en: "Customer E-Commerce Web Storefront",
          th: "หน้าร้านค้าออนไลน์หลัก DigiShop",
        },
        description: {
          en: "Next.js customer portal with catalog browsing, shopping cart state management, and smooth checkouts.",
          th: "หน้าเว็บไซต์ฝั่งลูกค้า พัฒนาด้วย Next.js แสดงรายการสินค้าจากผู้ค้าหลายราย มีระบบตัวกรองสินค้า ระบบตะกร้าสินค้า และการเชื่อมต่อชำระเงินที่รวดเร็ว",
        },
      },
      {
        url: "/images/projects/digishop/2_core.png",
        title: {
          en: "Merchant Inventory & Sales Portal",
          th: "แผงควบคุมยอดขายและสต็อกสินค้าของร้านค้าปลีก",
        },
        description: {
          en: "Next.js workspace for merchants to update products, manage orders, and monitor real-time sales performance through optimized SQL metrics.",
          th: "พอร์ทัลฝั่งร้านค้าสำหรับจัดการคลังสินค้า อัปโหลดรูปภาพ อัปเดตราคา ตรวจเช็คสถานะคำสั่งซื้อ และดูรายงานยอดขายประจำวัน",
        },
      },
      {
        url: "/images/projects/digishop/3_admin.png",
        title: {
          en: "Centralized Admin Queue Console",
          th: "แผงควบคุมระบบและคิวงานประมวลผลหลังบ้านสำหรับแอดมิน",
        },
        description: {
          en: "Admin cockpit detailing BullMQ background workers, background PDF invoice generator status, Redis cache hits, and systemic log monitoring.",
          th: "แดชบอร์ดระบบฝั่งแอดมิน แสดงข้อมูลประสิทธิภาพหลังบ้าน เช็คสถานะคิวงานเบื้องหลังของ BullMQ / Redis เช่น คิวสร้างใบเสร็จ PDF และการแจ้งเตือนอีเมลระบบ",
        },
      },
    ],
  },
  studybuddy: {
    id: "studybuddy",
    title: { en: "StudyBuddy", th: "StudyBuddy" },
    subtitle: {
      en: "Academic Group Recruitment & Real-Time Match Platform",
      th: "แพลตฟอร์มจับคู่หาเพื่อนร่วมกลุ่มเรียนและทำงานวิจัยวิชาการ",
    },
    year: "2026",
    role: {
      en: "Lead Fullstack Developer",
      th: "Lead Fullstack Developer",
    },
    tagline: {
      en: "A matching platform for students to find study partners and team recruits. Built with Next.js, NestJS, and Supabase, utilizing PostgreSQL Row-Level Security (RLS) and WebSockets for secure real-time chats.",
      th: "แพลตฟอร์มจับคู่และรับสมัครเพื่อนร่วมกลุ่มทำงานวิจัยและกลุ่มเรียน พัฒนาด้วย Next.js, NestJS และ Supabase โดยใช้ระบบความปลอดภัย PostgreSQL RLS และระบบแชทเรียลไทม์ผ่าน WebSocket",
    },
    themeColor: "indigo",
    bannerGradient: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
    problem: {
      en: "University students frequently struggle to find peers with specific academic skills or complementary schedules for group projects. Existing platforms lack security and privacy features, storing sensitive student details and contact information in open collections that are vulnerable to scraping or unauthorized API manipulation.",
      th: "นักศึกษามักหาเพื่อนร่วมกลุ่มหรือผู้ช่วยทำงานวิจัยที่มีทักษะตรงกับความต้องการและเข้ากับตารางเรียนได้ยาก ทว่าระบบที่มีอยู่ทั่วไปมักไม่มีนโยบายการจำกัดสิทธิ์ข้อมูลที่ปลอดภัยพอ ทำให้ข้อมูลติดต่อส่วนตัวและผลการเรียนเสี่ยงต่อการถูกดึงข้อมูลไปใช้ในทางที่ผิด หรือโดนลักลอบแก้ไขผ่าน API",
    },
    solution: {
      en: "We built StudyBuddy with Supabase and PostgreSQL Row Level Security (RLS) to restrict data access directly at the database level. Students can only read and write their own matching requests, profile details, and private chats. We developed a structured NestJS API gateway to filter inputs and prevent script injection, and integrated Supabase Realtime WebSocket channels to support low-latency group messaging.",
      th: "พวกเราเลือกจัดการปัญหาด้านความปลอดภัยด้วยการใช้ฟีเจอร์ Row Level Security (RLS) ของ PostgreSQL บน Supabase เพื่อจำกัดสิทธิ์การเขียนและอ่านข้อมูลตั้งแต่ระดับฐานข้อมูล ซึ่งทำให้นักศึกษาเข้าถึงได้เฉพาะกลุ่มเรียนและแชทของตนเองเท่านั้น จากนั้นเสริมความแข็งแกร่งด้วยการใช้ NestJS ในการคัดกรองข้อมูลเข้า (Data Validation) และต่อขยายการพูดคุยในทีมด้วยช่องสัญญาณแบบ Real-time ของ Supabase ผ่าน WebSocket",
    },
    architecture: {
      en: [
        "PostgreSQL Row Level Security (RLS) to restrict tables access to authorized matching peers and group owners.",
        "Supabase Realtime WebSockets dispatching instantaneous group chat messages and matchmaking alerts.",
        "NestJS backend API to validate data schemas, enforce endpoint guards, and run matchmaking logic.",
        "A modular, tag-based frontend dashboard allowing students to filter partners by skills, class year, and courses.",
      ],
      th: [
        "ระบบความปลอดภัยระดับแถวข้อมูล (PostgreSQL RLS) เพื่อกั้นสิทธิ์การเปิดอ่านโปรไฟล์เฉพาะกลุ่มคนที่ได้รับสิทธิ์โต้ตอบร่วมกัน",
        "บริการ Supabase Realtime WebSockets ส่งข้อมูลความเคลื่อนไหวในแผงแชทกลุ่มและแจ้งผลการสมัครทีมด่วนระดับวินาที",
        "หลังบ้านที่เข้มแข็งด้วย NestJS คอยตรวจเช็คความถูกต้องและคัดกรองความสะอาดของข้อมูลเพื่อกันปัญหา SQL Injection",
        "ระบบค้นหาหน้าเว็บบอร์ดที่นักศึกษาเลือกฟิลเตอร์คัดสรรผู้ร่วมทีมตามทักษะ ชั้นปี คณะ หรือรหัสวิชาเรียนได้อย่างยืดหยุ่น",
      ],
    },
    highlights: [
      {
        title: { en: "Row Level Security (RLS)", th: "ความปลอดภัยระดับแถวข้อมูล (RLS)" },
        description: {
          en: "Restricts all database reads and writes to authorized owners, securing student contact lists against unauthorized queries.",
          th: "การันตีการซ่อนปิดบังข้อมูลประวัติระดับคีย์หลักในฐานข้อมูล ปิดช่องโหว่การพยายามสุ่ม ID เข้าตรวจดูประวัติข้ามโปรไฟล์อย่างปลอดภัย",
        },
        icon: "🛡️",
      },
      {
        title: { en: "Real-Time Group Chat", th: "ระบบห้องแชทเรียลไทม์รวดเร็ว" },
        description: {
          en: "Leverages WebSockets to push group message updates, typing indicators, and matchmaking invites instantly.",
          th: "รับส่งสารพูดคุยความคืบหน้าของงานกลุ่มได้ทันใจด้วยการต่อท่อซิงค์ส่งประวัติผ่าน WebSocket ไร้ความล่าช้าสะดุด",
        },
        icon: "💬",
      },
      {
        title: { en: "Modular NestJS Core", th: "โครงสร้างโมดูลาร์ NestJS สะอาด" },
        description: {
          en: "Built using modular architectures, decoupling routing from service entities to streamline unit testing and codebase scaling.",
          th: "ระบบ API หลังบ้านเป็นหมวดหมู่ตามหลัก Modular ใน NestJS บำรุงรักษาง่าย และรองรับการทำ Unit Testing ในอนาคต",
        },
        icon: "🧩",
      },
      {
        title: { en: "Academic Directory Filters", th: "คัดกรองตามหลักสูตร มข." },
        description: {
          en: "Custom integration featuring filters aligned with Khon Kaen University course schedules and departments.",
          th: "เชื่อมต่อข้อมูลกับรายการรหัสรายวิชาจริงของมหาวิทยาลัยขอนแก่น ค้นหาจัดหาเพื่อนร่วมวิชาเอกหรือวิชาโทที่ลงเรียนร่วมกันได้แม่นยำ",
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
        "Created an academic matchmaking network utilizing NestJS, Next.js, and Supabase for university environments.",
        "Implemented PostgreSQL Row Level Security (RLS) policies to keep profile details secure at the database layer.",
        "Connected team study rooms utilizing Supabase Realtime channels to run immediate group messaging sessions.",
      ],
      th: [
        "สร้างเครือข่ายหาเพื่อนและรับทีมช่วยทำกลุ่มโครงงานวิชาการสำหรับนักศึกษา โดยเลือกใช้ Next.js, NestJS และ Supabase",
        "ติดตั้งการรักษาความปลอดภัย RLS ปิดโอกาสการแอบแฝงดึงเบอร์โทรศัพท์และช่องทางติดต่อส่วนตัวของนักศึกษา",
        "เปิดช่องทางแชทคุยงานระดับกลุ่มโดยการเชื่อมต่อสัญญาณ Real-time ของ Supabase เพื่อประสิทธิภาพที่ดีที่สุดในการประสานงาน",
      ],
    },
    images: [
      {
        url: "/images/projects/studybuddy/1_client.png",
        title: {
          en: "StudyBuddy Community Platform Landing",
          th: "หน้าแรกแพลตฟอร์มชุมชนหาเพื่อนเรียน StudyBuddy",
        },
        description: {
          en: "Landing page showcasing open study groups, user guidelines, and recent study recruitment listings for university students.",
          th: "หน้าแรกของเว็บแสดงจุดเด่นระบบ แนะนำวิธีการใช้งาน และกลุ่มเรียนที่เปิดรับสมัครล่าสุด เพื่อให้นักศึกษาค้นหาเป้าหมายการอ่านหนังสือร่วมกันได้ง่าย",
        },
      },
      {
        url: "/images/projects/studybuddy/2_core.png",
        title: {
          en: "Student Partner Explore Board",
          th: "หน้าค้นหากลุ่มเรียนและรายชื่อผู้เรียนพร้อมระบบสิทธิ์ RLS",
        },
        description: {
          en: "A secure filter dashboard utilizing Supabase Row-Level Security (RLS) allowing students to query study groups and match partners by major and skills safely.",
          th: "แดชบอร์ดสำหรับค้นหากลุ่มเรียนตามรหัสวิชาหรือทักษะ ปลอดภัยด้วยการจำกัดสิทธิ์ข้อมูลระดับแถว (Row-Level Security) ป้องกันไม่ให้บุคคลภายนอกเข้าถึงข้อมูลส่วนตัวโดยไม่ได้รับอนุญาต",
        },
      },
      {
        url: "/images/projects/studybuddy/3_admin.png",
        title: {
          en: "Real-Time Chat & Study Rooms",
          th: "ระบบห้องแชทเรียลไทม์ผ่าน WebSocket",
        },
        description: {
          en: "Instant messaging component utilizing WebSockets for real-time study discussions, typing alerts, and shared academic links.",
          th: "หน้าแชทคุยงานระดับกลุ่ม พัฒนาด้วย WebSocket เพื่อการรับส่งข้อความแชทสดทันใจ การแจ้งเตือนสถานะกำลังพิมพ์ และการส่งลิงก์ทรัพยากรสำหรับการติววิชา",
        },
      },
    ],
  },
}
