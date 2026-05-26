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

export const PROJECT_THEMES: Record<
  "blue" | "amber" | "indigo",
  ProjectTheme
> = {
  blue: {
    text: "text-blue-600",
    bg: "bg-blue-600",
    accent: "#3b82f6",
    badgeStyle: {
      color: "#2563eb",
      background: "rgba(219, 234, 254, 0.8)",
      border:
        "1px solid rgba(191, 219, 254, 0.8)",
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
      border:
        "1px solid rgba(253, 230, 138, 0.8)",
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
      border:
        "1px solid rgba(199, 210, 254, 0.8)",
    },
    glow: "rgba(79, 70, 229, 0.4)",
  },
}

export interface ProjectImage {
  url: string
  title: { en: string; th: string }
  description: { en: string; th: string }
  orientation?: "landscape" | "portrait" | "square"
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
  hasDemo?: boolean
  hasVideo?: boolean
  bullets: { en: string[]; th: string[] }
  images: ProjectImage[]
}

export const projectsData: Record<
  string,
  Project
> = {
  "p-wallet": {
    id: "p-wallet",
    title: { en: "P-Wallet", th: "P-Wallet" },
    subtitle: {
      en: "E-Wallet & Double-Entry Ledger System",
      th: "ระบบกระเป๋าเงินอิเล็กทรอนิกส์ (E-Wallet) และบัญชีแยกประเภทแบบคู่",
    },
    year: "2026",
    role: {
      en: "Fullstack Developer",
      th: "Fullstack Developer",
    },
    tagline: {
      en: "An e-wallet and mathematically balanced double-entry ledger system. Engineered as a separated service architecture with a Java Spring Boot 3 transaction engine and a NestJS gateway. Utilizes lexicographical UUID lock-sorting to completely eliminate database deadlocks under high-concurrency transfers, and offloads heavy background events like KYC and notifications asynchronously using Apache Kafka and Redis.",
      th: "ระบบกระเป๋าเงินอิเล็กทรอนิกส์และบัญชีแยกประเภทแบบคู่ ที่ออกแบบสถาปัตยกรรมแยกส่วนการทำงานระหว่างระบบประมวลผลธุรกรรมทางการเงินด้วย Spring Boot 3 และเกตเวย์หน้าบ้านด้วย NestJS ช่วยป้องกันปัญหาระบบล็อก (Deadlock) จากการทำธุรกรรมพร้อมกัน ด้วยวิธีเรียงลำดับการล็อกบัญชีตามคีย์ UUID (Lock Sorting) พร้อมทั้งแยกงานตรวจสอบสิทธิ์และการแจ้งเตือนไปประมวลผลเบื้องหลังแบบอะซิงโครนัสผ่าน Kafka และ Redis",
    },
    themeColor: "blue",
    bannerGradient:
      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    problem: {
      en: "Processing concurrent financial transactions without balance discrepancies or database deadlocks is complex. Under high load, concurrent updates to the same account can cause race conditions or circular database locks (deadlocks). Additionally, running heavy compliance tasks like KYC verification and AML checks synchronously inside the main request thread slows down transaction processing.",
      th: "การทำธุรกรรมการเงินพร้อมกันเป็นจำนวนมากมักทำให้เกิดปัญหายอดเงินไม่ตรงกัน หรือเกิดปัญหาฐานข้อมูลติดล็อก (Deadlock) จากการแก้ไขข้อมูลในเวลาเดียวกัน นอกจากนี้ การรันงานตรวจสอบอย่างการยืนยันตัวตน (KYC) หรือการตรวจสอบประวัติธุรกรรม (AML) บนเธรดหลักร่วมกับการโอนเงินโดยตรง ยังส่งผลให้การประมวลผลธุรกรรมช้าลง",
    },
    solution: {
      en: "I built a double-entry ledger system utilizing append-only journal entries to guarantee strict mathematical balance consistency. To eliminate database deadlocks during concurrent updates, I enforced a lexicographical lock sorting sequence on wallet UUIDs. The architecture separates the Java Spring Boot transaction processor from the NestJS identity gateway, offloading background notification dispatches and KYC state streams asynchronously using Apache Kafka.",
      th: "ผมได้พัฒนาและวางโครงสร้างบัญชีแยกประเภทแบบคู่ที่บันทึกธุรกรรมแบบเพิ่มข้อมูลอย่างเดียว เพื่อรักษาสมดุลบัญชีอย่างแม่นยำ พร้อมป้องกันปัญหาฐานข้อมูลติดล็อก (Deadlock) จากการทำรายการพร้อมกันด้วยการจัดลำดับการล็อกบัญชีด้วย UUID (Lock Sorting) ก่อนเริ่มทำธุรกรรม และออกแบบสถาปัตยกรรมแยกส่วนบริการธุรกรรมบน Spring Boot ออกจากบริการเกตเวย์บน NestJS พร้อมทั้งแยกงานประมวลผลเบื้องหลังและการสตรีมสถานะการยืนยันตัวตนไปทำงานแบบอะซิงโครนัสผ่าน Apache Kafka",
    },
    architecture: {
      en: [
        "Java 21 / Spring Boot 3 transaction service utilizing append-only double-entry ledger records.",
        "NestJS gateway monorepo using Prisma ORM with separate PostgreSQL schemas for identity, KYC, and admin tasks.",
        "Lock sorting sequence on wallet UUIDs to prevent database deadlocks during concurrent transfers.",
        "Asynchronous tasks, such as notification dispatches and KYC state events, processed using Apache Kafka.",
      ],
      th: [
        "ระบบประมวลผลธุรกรรมทางการเงินด้วย Java 21 และ Spring Boot 3 บันทึกข้อมูลแบบบัญชีแยกประเภทแบบคู่ในรูปแบบเพิ่มข้อมูลเท่านั้น (Append-only)",
        "NestJS Gateway ในรูปแบบ Monorepo ใช้ Prisma ORM และแยก Schema บน PostgreSQL สำหรับจัดการระบบข้อมูลทั่วไป คิวงาน และระบบหลังบ้าน",
        "กำหนดลำดับการล็อกบัญชีคู่โอนด้วย UUID (Lock Sorting) เพื่อป้องกันปัญหาฐานข้อมูลติดล็อก (Deadlocks)",
        "ประมวลผลงานเบื้องหลัง เช่น การส่งการแจ้งเตือนและการอัปเดตสตรีมสถานะ KYC แบบอะซิงโครนัสผ่าน Apache Kafka",
      ],
    },
    highlights: [
      {
        title: {
          en: "Concurrency Lock Sorting",
          th: "ระบบจัดลำดับการล็อกบัญชี",
        },
        description: {
          en: "Enforces a resource locking order using UUID lexicographical sorting to prevent deadlocks during concurrent transfers.",
          th: "บังคับล็อกบัญชีคู่โอนโดยเรียงลำดับตามคีย์ UUID เพื่อป้องกันปัญหา Deadlock ระหว่างทำการโอนเงินพร้อมกัน",
        },
        icon: "⚡",
      },
      {
        title: {
          en: "Append-Only Ledger",
          th: "บัญชีแยกประเภทแบบคู่",
        },
        description: {
          en: "Every transaction writes two matching ledger entries (debit/credit) with no updates or deletions allowed, creating an audit trail.",
          th: "บันทึกธุรกรรมแบบเพิ่มข้อมูลอย่างเดียว (Append-only) โดยไม่มีการแก้ไขหรือลบข้อมูล เพื่อรักษาประวัติการทำรายการอย่างครบถ้วน",
        },
        icon: "🛡️",
      },
      {
        title: {
          en: "Solvency & Liquidity Audits",
          th: "ระบบตรวจสอบความสอดคล้องของยอดเงิน",
        },
        description: {
          en: "Monitors aggregate balances and reserves to ensure liquidity matches customer deposits.",
          th: "ติดตามและคำนวณยอดเงินรวมในระบบเพื่อตรวจสอบความตรงกันระหว่างเงินสำรองและเงินฝากของผู้ใช้งาน",
        },
        icon: "📊",
      },
      {
        title: {
          en: "Kafka Async Event Bus",
          th: "งานเบื้องหลังอะซิงโครนัสผ่าน Kafka",
        },
        description: {
          en: "A dedicated Kafka consumer worker handles push notifications (Expo), email fallbacks, KYC status streams, and security alerts asynchronously — keeping the transaction thread completely non-blocking.",
          th: "แยก Worker ออกมาประมวลผล Kafka Event เพื่อส่ง Push Notification (Expo) โดยมี Email เป็น Fallback สตรีมสถานะ KYC และแจ้งเตือนความปลอดภัย เพื่อไม่ให้บล็อกเธรดหลักการทำธุรกรรม",
        },
        icon: "🚀",
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
        name: "TanStack Query",
        logo: "/images/logos/tanstack.svg",
      },
      {
        name: "Zustand",
        logo: "/images/logos/zustand.ico",
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
    githubUrl:
      "https://github.com/wiiznu17/j-ledger",
    demoUrl: "https://p-wallet.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/p-wallet",
    bullets: {
      en: [
        "Built the transaction engine with Spring Boot and JPA Hibernate, enforcing double-entry ledger bookkeeping rules.",
        "Addressed transaction deadlocks by implementing a lexicographical UUID lock sorting protocol.",
        "Optimized mobile performance and reduced API overhead by leveraging TanStack Query for caching and Zustand for lightweight global authentication state management.",
        "Offloaded background email sends and KYC status change streams using Apache Kafka workers.",
      ],
      th: [
        "พัฒนาระบบประมวลผลธุรกรรมทางการเงินด้วย Spring Boot และ Hibernate ภายใต้โครงสร้างบัญชีแยกประเภทแบบคู่",
        "ป้องกันปัญหาฐานข้อมูลติดล็อก (Deadlocks) ด้วยการใช้ระบบจัดลำดับการล็อกบัญชีตามคีย์ UUID (Lock Sorting)",
        "เพิ่มความลื่นไหลในแอปพลิเคชันมือถือ และลดภาระการเรียก API ซ้ำซ้อนด้วยระบบ Caching ของ TanStack Query ร่วมกับการจัดการสิทธิ์ด้วย Zustand",
        "แยกงานจัดส่งอีเมลและการอัปเดตสถานะการตรวจสอบ KYC ไปประมวลผลแบบอะซิงโครนัสผ่าน Apache Kafka",
      ],
    },
    images: [
      {
        url: "/images/projects/p-wallet/1_client.jpg",
        orientation: "portrait",
        title: {
          en: "Mobile Wallet Client Interface",
          th: "หน้าจอผู้ใช้งานแอป P-Wallet บนมือถือ",
        },
        description: {
          en: "React Native client dashboard showing account balance, quick transfer action, and transaction tracking.",
          th: "แดชบอร์ดแอปพลิเคชันมือถือที่พัฒนาด้วย React Native แสดงยอดเงินคงเหลือ ทางลัดการทำรายการโอน และประวัติธุรกรรม",
        },
      },
      {
        url: "/images/projects/p-wallet/2_core.png",
        orientation: "landscape",
        title: {
          en: "Spring Boot Core Double-Entry Ledger",
          th: "ระบบบันทึกบัญชีแยกประเภทแบบคู่บน Spring Boot",
        },
        description: {
          en: "Append-only database ledger journal records in Java and Spring Boot, maintaining mathematically balanced accounting.",
          th: "สมุดจดบันทึกประวัติธุรกรรมการเงินแบบเพิ่มข้อมูลอย่างเดียว (Append-only) พัฒนาด้วย Spring Boot เพื่อรักษาความถูกต้องในระบบ",
        },
      },
      {
        url: "/images/projects/p-wallet/3_admin.png",
        orientation: "landscape",
        title: {
          en: "Backoffice Admin Dashboard",
          th: "ระบบจัดการและตรวจสอบหลังบ้านสำหรับเจ้าหน้าที่",
        },
        description: {
          en: "Next.js administrative workspace displaying system balances, active Kafka queue metrics, and compliance freeze alerts.",
          th: "แดชบอร์ดหลังบ้านพัฒนาด้วย Next.js แสดงสถานะเงินสำรองในระบบ สัญญาณสุขภาพของคิวงาน Kafka และระบบอื่นๆ เพื่อให้ผู้ดูและผู้ดูแลจัดการและดูข้อมูลต่างๆภายในระบบ",
        },
      },
    ],
  },
  digishop: {
    id: "digishop",
    title: { en: "DigiShop", th: "DigiShop" },
    subtitle: {
      en: "Multi-Vendor E-Commerce & Payment Gateway Demo",
      th: "แพลตฟอร์มอีคอมเมิร์ซแบบหลายผู้ค้า (Multi-Vendor) และระบบเชื่อมต่อช่องทางชำระเงิน",
    },
    year: "2025",
    role: {
      en: "Fullstack Developer (Cooperative Education)",
      th: "Fullstack Developer (นักศึกษาฝึกงานสหกิจศึกษา)",
    },
    tagline: {
      en: "A multi-vendor e-commerce platform developed as a Client-Server web app with Next.js 15, Express.js, and Sequelize to demonstrate integration of Digio's Payment Gateway (DigiPay) APIs, featuring refund and void workflows.",
      th: "เว็บแอปพลิเคชันอีคอมเมิร์ซแบบหลายผู้ขาย (Multi-Vendor) พัฒนาบนสถาปัตยกรรม Client-Server เพื่อสาธิตการเชื่อมต่อระบบรับชำระเงิน DigiPay Payment Gateway ทั้งในกระบวนการยกเลิกรายการทันที (Void) และการคืนเงิน (Refund)",
    },
    themeColor: "amber",
    bannerGradient:
      "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    problem: {
      en: "The payment gateway product required an interactive marketplace demonstration to show banks and merchant clients the integration flow of APIs. The system needed multi-vendor storefronts, digital assets storage, backoffice controls, and reliable flows for transaction refunds and voids without using real money.",
      th: "ระบบต้องการแพลตฟอร์มตัวอย่างเพื่อสาธิตขั้นตอนการเชื่อมต่อ DigiPay Payment Gateway ให้กับลูกค้าและธนาคาร โดยจำเป็นต้องรองรับร้านค้าหลายราย (Multi-Vendor) มีระบบควบคุมหลังบ้าน และมีตัวอย่างกระบวนการยกเลิกรายการและคืนเงิน (Void & Refund) ที่ทำงานสอดคล้องตามพฤติกรรมจริงของ API",
    },
    solution: {
      en: "I designed the entire database schema and system workflows for the platform. I developed the merchant workspace and backoffice administrator portals using Next.js 15, Express.js, Sequelize ORM, and MySQL. I implemented transaction void and refund flows integrated with DigiPay APIs, product image storage on Azure Blob Storage, JWT authentication with asymmetric RSA Key Pairs, and admin onboarding dispatches via SendGrid.",
      th: "ผมได้ออกแบบโครงสร้างฐานข้อมูล (Database Schema) และระบบไหลเวียนข้อมูล (Flow) ทั้งหมดภายในระบบ พร้อมทั้งพัฒนาส่วนจัดการร้านค้าและหลังบ้านสำหรับผู้ดูแลด้วย Next.js 15 และ Express.js เชื่อมต่อฐานข้อมูล MySQL ผ่าน Sequelize ORM โดยระบบรองรับกระบวนการ Void และ Refund เงินคืนผ่าน DigiPay API จัดเก็บรูปภาพและข้อมูลโปรไฟล์ร้านค้าบน Azure Blob Storage ใช้กุญแจคู่ RSA ในการออก JWT สำหรับยืนยันตัวตน และทำระบบส่งคำเชิญผู้ดูแลระบบรายใหม่ผ่าน SendGrid API",
    },
    architecture: {
      en: [
        "Client-Server architecture separating frontend portals (Next.js 15) from backend REST APIs (Express.js) and database.",
        "DigiPay API integration managing transaction status queries, voids (un-settled approved), and refunds (settled captured) flows.",
        "Asymmetric cryptographic JWT authentication using RSA Key Pairs to secure admin and merchant workspaces.",
        "File asset storage (products, store profile) on Azure Blob Storage protected via Shared Access Signature (SAS) URLs.",
        "Time-sensitive secure tokens sent via SendGrid API to handle Admin Onboarding and password resets.",
        "Containerized development using Docker to standardize environments, deployed on Railway (Backend) and Vercel (Frontend).",
      ],
      th: [
        "สถาปัตยกรรมแบบ Client-Server แยกฝั่งหน้าบ้าน (Next.js 15) และระบบ API หลังบ้าน (Express.js) ร่วมกับฐานข้อมูล MySQL",
        "เชื่อมต่อบริการ DigiPay API เพื่อทำรายการยกเลิกรายการชำระเงิน (Void) และคืนเงินเข้าบัญชี (Refund) ตามสถานะธุรกรรม",
        "ระบบรักษาความปลอดภัยในการยืนยันตัวตนด้วย JWT แบบใช้กุญแจคู่สมมาตร/อสมมาตร (RSA Key Pair) และตรวจสอบสิทธิ์เข้าใช้งานตามบทบาท (RBAC)",
        "ระบบอัปโหลดและแสดงผลรูปภาพร้านค้าและสินค้า จัดเก็บไว้บน Azure Blob Storage และเข้าถึงอย่างปลอดภัยผ่าน Shared Access Signature (SAS) URL",
        "ระบบส่งอีเมลเชิญผู้ดูแลคนใหม่ตั้งรหัสผ่าน ด้วยการใช้ Secure Token ทำงานผ่าน SendGrid API",
        "จัดสภาพแวดล้อมระบบด้วย Docker Container เพื่อการพัฒนาจำลองระบบ พร้อมดีพลอยใช้งานผ่าน Railway และ Vercel",
      ],
    },
    highlights: [
      {
        title: {
          en: "DigiPay Refund Flow",
          th: "กระบวนการ Void และ Refund",
        },
        description: {
          en: "Integrates financial reversal operations with Voids for un-settled transactions and Refunds for settled transactions based on DigiPay APIs.",
          th: "ทำโฟลว์ย้อนกลับรายการด้วย Void API (สำหรับรายการ APPROVED) และ Refund API (สำหรับรายการ SETTLED) ผ่าน DigiPay API",
        },
        icon: "💳",
      },
      {
        title: {
          en: "Asymmetric JWT Security",
          th: "ความปลอดภัยด้วยกุญแจอสมมาตร (RSA)",
        },
        description: {
          en: "Secures admin and seller API endpoints using RSA Key Pairs for JSON Web Tokens (JWT) and RBAC middleware.",
          th: "ป้องกันและเข้าใช้งาน API เฉพาะผู้ดูแลและผู้ขายด้วย JWT แบบกุญแจคู่อสมมาตร (RSA Key Pair) ร่วมกับระบบสิทธิ์ RBAC",
        },
        icon: "🛡️",
      },
      {
        title: {
          en: "SendGrid Invite Streams",
          th: "ระบบเชิญผู้ดูแลระบบคนใหม่",
        },
        description: {
          en: "Dispatches admin invitations and password resets with secure tokens via the SendGrid API.",
          th: "จัดส่งอีเมลเชิญให้ผู้ดูแลคนใหม่ตั้งรหัสผ่านด้วยโทเคนเข้ารหัสที่ปลอดภัยผ่านบริการ SendGrid API",
        },
        icon: "📧",
      },
      {
        title: {
          en: "Dockerized DevOps",
          th: "การทำงานด้วย Docker Container",
        },
        description: {
          en: "Manages Express APIs, MySQL, and Redis using Docker, deploying on Railway and Vercel.",
          th: "จัดทำระบบให้อยู่ในรูปแบบ Docker Container เพื่อความสะดวกในการติดตั้งระบบ และดีพลอยผ่าน Railway และ Vercel",
        },
        icon: "🐳",
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
      {
        name: "Azure Blob Storage",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      },
      {
        name: "SendGrid",
        logo: "custom-sendgrid",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "Railway",
        logo: "custom-railway",
      },
      {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      },
    ],
    githubUrl: "https://github.com/wiiznu17/digishop",
    demoUrl: "https://digishop.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/digishop",
    hasDemo: false,
    hasVideo: false,
    bullets: {
      en: [
        "Designed and built the multi-vendor Merchant portal (inventories, orders) and Admin portal (RBAC, approvals) using Next.js 15 and Express.js.",
        "Integrated DigiPay Payment Gateway APIs to execute un-settled voids and settled refunds.",
        "Protected administrative APIs and workspaces using asymmetric RSA cryptographic JWT and Role-Based Access Control (RBAC).",
        "Developed an administrator onboarding invitation stream utilizing SHA-256 tokens and SendGrid API.",
        "Containerized services with Docker and deployed via Railway (Express Backend, MySQL, Redis) and Vercel (Next.js Frontend).",
      ],
      th: [
        "ออกแบบและพัฒนาฟีเจอร์ฝั่งร้านค้า (Merchant Portal) และแผงควบคุมผู้ดูแล (Admin Portal) บนสถาปัตยกรรมแบบ Client-Server ด้วย Next.js 15 และ Express.js",
        "เชื่อมต่อกับ DigiPay Payment Gateway เพื่อทำรายการยกเลิกรายการ (Void) และคืนเงิน (Refund)",
        "ควบคุมการเข้าใช้งาน API ด้วยสิทธิ์ตามบทบาท (RBAC) ร่วมกับ JWT แบบใช้กุญแจคู่ RSA",
        "ทำระบบส่งอีเมลเชิญผู้ดูแลคนใหม่ตั้งรหัสผ่านด้วย Secure Token ผ่าน SendGrid API",
        "จัดสภาพแวดล้อมจำลองการทำงานด้วย Docker Container และดีพลอยระบบหลังบ้านผ่าน Railway และระบบหน้าบ้านผ่าน Vercel",
      ],
    },
    images: [
      {
        url: "/images/projects/digishop/1_client.png",
        orientation: "landscape",
        title: {
          en: "Merchant Workspace & Product Dashboard",
          th: "ระบบจัดการร้านค้าสำหรับผู้ค้า (Merchant Portal)",
        },
        description: {
          en: "Next.js 15 seller dashboard to add/edit products, manage orders, and check inventory statuses with assets stored in Azure Blob Storage.",
          th: "พอร์ทัลร้านค้าพัฒนาด้วย Next.js 15 สำหรับเพิ่ม/แก้ไขข้อมูลสินค้า อัปโหลดรูปภาพผ่าน Azure Blob Storage และจัดการสถานะจัดส่งออเดอร์",
        },
      },
      {
        url: "/images/projects/digishop/2_core.png",
        orientation: "landscape",
        title: {
          en: "DigiPay Refund & Transaction Integration",
          th: "ระบบจัดการธุรกรรมผ่าน DigiPay API",
        },
        description: {
          en: "Order pipeline integrated with DigiPay Payment Gateway, supporting partial refunds and approved voids based on settled statuses.",
          th: "ระบบสั่งซื้อที่เชื่อมกับช่องทางชำระเงิน DigiPay API รองรับการยกเลิกยอดด้วย Void API (รายการ APPROVED) และการคืนเงินด้วย Refund API (รายการ SETTLED)",
        },
      },
      {
        url: "/images/projects/digishop/3_admin.png",
        orientation: "landscape",
        title: {
          en: "Backoffice Admin Console & RBAC Settings",
          th: "แผงจัดการและควบคุมสิทธิ์หลังบ้าน (Admin Portal)",
        },
        description: {
          en: "Centralized admin workspace managing store requests, RBAC permissions, and secure SendGrid SHA-256 token invitations.",
          th: "แดชบอร์ดสำหรับผู้ดูแลระบบเพื่อพิจารณาภาพรวม อนุมัติร้านค้า/สินค้าใหม่ และส่งอีเมลเชิญแอดมินคนใหม่ด้วย Secure Token ผ่าน SendGrid API",
        },
      },
    ],
  },
  studybuddy: {
    id: "studybuddy",
    title: { en: "StudyBuddy", th: "StudyBuddy" },
    subtitle: {
      en: "Student Matching & Curated Co-Working Space Directory",
      th: "แพลตฟอร์มจับคู่หาเพื่อนร่วมเรียน (Swipe Matching) และระบบแนะนำสถานที่อ่านหนังสือ",
    },
    year: "2026",
    role: {
      en: "Fullstack Developer (Core Features)",
      th: "Fullstack Developer (ผู้พัฒนาฟีเจอร์หลัก)",
    },
    tagline: {
      en: "A matching-style web platform helping university students find study partners, swipe profile cards, explore study spaces, and chat. Built with Next.js, NestJS, and Supabase, utilizing PostgreSQL Row-Level Security (RLS) and WebSockets.",
      th: "แพลตฟอร์มเว็บช่วยหาเพื่อนร่วมเรียนสำหรับนักศึกษา โดยใช้อินเตอร์เฟสปัดการ์ดโปรไฟล์ แนะนำสถานที่นั่งอ่านหนังสือ และห้องแชทสด พัฒนาขึ้นด้วย Next.js, NestJS และ Supabase พร้อมปกป้องข้อมูลความปลอดภัยด้วย PostgreSQL RLS และสื่อสารเรียลไทม์ผ่าน WebSocket",
    },
    themeColor: "indigo",
    bannerGradient:
      "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
    problem: {
      en: "University students struggle to find compatible study buddies, tutoring partners, or project team members with matching schedules, study habits, or courses. Traditional search methods lack specialized filtering and fail to enforce strict data privacy boundaries, exposing private contact details and messages to unauthorized users.",
      th: "นักศึกษามักประสบปัญหาในการค้นหาเพื่อนร่วมกลุ่มเรียน คู่ติว หรือกลุ่มสำหรับทำโปรเจกต์ที่มีตารางเรียน สไตล์การอ่าน หรือลงเรียนวิชาตรงกัน การประกาศหาเพื่อนผ่านช่องทางโซเชียลทั่วไปมักขาดระบบคัดกรองเฉพาะทาง และเสี่ยงต่อการเปิดเผยข้อมูลติดต่อส่วนตัวโดยไม่จำเป็นเนื่องจากไม่มีระบบจัดการสิทธิ์เข้าถึงที่รัดกุม",
    },
    solution: {
      en: "I designed and implemented the core features of StudyBuddy using Next.js 16 and NestJS, with Supabase managing client authentication and PostgreSQL security policies. I built a dynamic Landing Page, a 6-step Onboarding form with LocalStorage recovery, a responsive profile card swipe interface, a Recommended Study Places directory with facility filters, and a WebSockets-enabled Chat system with pinned messages, reactions, edits, and read receipts.",
      th: "ผมได้พัฒนาฟีเจอร์หลักของระบบด้วย Next.js 16 และ NestJS โดยใช้ Supabase ยืนยันตัวตนร่วมกับนโยบายควบคุมสิทธิ์ข้อมูลระดับแถว (PostgreSQL RLS) ซึ่งประกอบไปด้วยหน้า Landing Page ที่ปรับเปลี่ยนปุ่มตามสถานะผู้ใช้, ระบบลงทะเบียนข้อมูล 6 ขั้นตอนที่เก็บข้อมูลชั่วคราวบน LocalStorage, หน้าโปรไฟล์เพื่อนร่วมเรียนแบบสไลด์การ์ด, ระบบแนะนำสถานที่อ่านหนังสือพร้อมตัวกรอง และระบบแชทคุยเดี่ยวหรือกลุ่มผ่าน WebSocket ที่รองรับปักหมุดข้อความ แก้ไขข้อความ ส่งรีแอคชัน และมีตัวบ่งชี้สถานะผู้ใช้อ่านแล้ว",
    },
    architecture: {
      en: [
        "Multi-step Onboarding form with LocalStorage cache recovery to prevent data loss on page refreshes.",
        "Interactive profile card components featuring detailed study styles, courses, and schedules to display student profiles.",
        "Curated Recommended Study Places directory featuring categories, toggle-ready facility filters, suggestions query, and favorite bookmarking.",
        "Real-time Chat system leveraging Supabase real-time subscriptions (INSERT, UPDATE) and NestJS backend ChatModule handling message creation, edits, reactions, pins, and a 1-minute unsend window.",
        "Personalized Landing page utilizing next-themes for light/dark theme toggles and Noto Sans Thai typography, routing users based on auth and onboarding progress.",
      ],
      th: [
        "ระบบลงทะเบียนข้อมูลผู้ใช้งานแบบ 6 ขั้นตอน พร้อมระบบช่วยจดจำความคืบหน้าลง LocalStorage เพื่อป้องกันข้อมูลสูญหายเมื่อรีเฟรชหน้าเว็บ",
        "หน้าแสดงการ์ดโปรไฟล์เพื่อนร่วมเรียน โดยออกแบบลักษณะรูปร่างการ์ดหลักเพื่อให้แสดงวิชาเรียน ตารางเวลา และไลฟ์สไตล์การติวได้อย่างชัดเจน",
        "ระบบแนะนำสถานที่อ่านหนังสือ ค้นหา และฟิลเตอร์สถานที่ตามพิกัดที่มีจุดเสียบปลั๊กไฟ อินเทอร์เน็ต WiFi ฟรี หรือร้านที่เปิดให้บริการ 24 ชั่วโมง",
        "ระบบแชทสื่อสารคุยเดี่ยวและกลุ่ม ซิงค์ข้อมูลผ่าน WebSocket ร่วมกับ NestJS ChatModule รองรับการปักหมุด แก้ไข ยกเลิกส่งข้อความภายใน 1 นาที ส่งรีแอคชัน และสถานะผู้ใช้อ่านแล้ว",
        "ออกแบบหน้า Landing Page และใช้ปุ่ม (CTA) นำทางส่งผู้ใช้ไปยังหน้ากรอกข้อมูลหรือหน้าแชทตามสถานะโปรไฟล์",
      ],
    },
    highlights: [
      {
        title: {
          en: "WebSocket Chat",
          th: "ระบบแชทผ่าน WebSocket",
        },
        description: {
          en: "Sends group messages, reactions, pinned messages, and read receipts using PostgreSQL realtime channel subscriptions.",
          th: "รับส่งข้อความแชท ซิงค์ประวัติ แก้ไขคำ ส่งรีแอคชัน และปักหมุดข้อความในห้องแชทแบบเรียลไทม์ผ่านการเชื่อมโยง WebSocket",
        },
        icon: "💬",
      },
      {
        title: {
          en: "6-Step Onboarding Form",
          th: "ฟอร์มลงทะเบียนแบบแบ่งขั้นตอน",
        },
        description: {
          en: "Registers user profiles with step-by-step state caching on LocalStorage to prevent progress loss.",
          th: "บันทึกแบบฟอร์มลงข้อมูลแบบ 6 ขั้นตอนพร้อมระบบช่วยจำสถานะลง LocalStorage เพื่อป้องกันข้อมูลสูญหายจากการรีเฟรชหน้าจอ",
        },
        icon: "🧩",
      },
      {
        title: {
          en: "Profile Card Component",
          th: "การ์ดโปรไฟล์",
        },
        description: {
          en: "Displays student profiles, study styles, and schedules in a clean, responsive layout.",
          th: "แสดงผลข้อมูลประวัติเพื่อนร่วมเรียนในรูปแบบการ์ด เพื่อความง่ายในการใช้งาน",
        },
        icon: "🎴",
      },
      {
        title: {
          en: "Curated Study Places",
          th: "พิกัดแนะนำสถานที่อ่านหนังสือ",
        },
        description: {
          en: "Curates reading places with ratings, favorites, and toggle filters for plugs, WiFi, and 24-hour operations.",
          th: "ศูนย์รวบรวมพิกัดสถานที่นั่งเรียนนั่งติวแยกประเภท พร้อมตัวกรองสิ่งอำนวยความสะดวก เช่น จุดเสียบปลั๊กไฟ WiFi หรือเปิดบริการ 24 ชั่วโมง",
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
    githubUrl:
      "https://github.com/wiiznu17/study-buddy",
    demoUrl: "https://study-buddy.space/",
    videoUrl:
      "https://video.wiiznu.dev/studybuddy",
    bullets: {
      en: [
        "Designed and developed the multi-step Onboarding form using a persistent RegistrationContext with LocalStorage data recovery to assure smooth signup flows.",
        "Designed and developed the primary interactive student profile card component showcasing student details.",
        "Built the Recommended Study Places directory featuring curated categories, toggle-ready facility filters, suggestions query, and toggle favorite capabilities.",
        "Implemented a real-time WebSocket chat system leveraging Supabase real-time subscriptions for immediate message syncing, unsend within 1 min, message editing, reactions, and pinning.",
        "Designed a dynamic Landing Page with premium dark mode support and custom typography, routing users to welcome, onboarding, or candidate feed based on auth/registration state.",
      ],
      th: [
        "พัฒนาระบบลงทะเบียนข้อมูลผู้ใช้งานแบบ 6 ขั้นตอน โดยบันทึกความคืบหน้าชั่วคราวไว้บน LocalStorage ป้องกันข้อมูลสูญหายจากการรีเฟรชหน้าเว็บ",
        "ออกแบบและพัฒนาคอมโพเนนต์การ์ดโปรไฟล์เพื่อนร่วมเรียน เพื่อแสดงข้อมูลสไตล์และตารางเรียนในแดชบอร์ดได้อย่างชัดเจน",
        "พัฒนาระบบแนะนำสถานที่อ่านหนังสือที่สามารถกรองตามประเภทและสิ่งอำนวยความสะดวกได้ เช่น พิกัดที่มี WiFi บริการปลั๊กไฟ หรือร้านที่เปิดตลอด 24 ชั่วโมง",
        "วางระบบแชทสนทนาเดี่ยวและกลุ่มผ่าน WebSocket รองรับบริการปักหมุด แก้ไขข้อความ ยกเลิกส่งภายใน 1 นาที และส่งรีแอคชัน",
        "ออกแบบหน้า Landing Page โดยควบคุมระบบปุ่ม CTA เพื่อนำทางผู้ใช้ไปยังส่วนต่างๆ ตามสถานะของโปรไฟล์",
      ],
    },
    images: [
      {
        url: "/images/projects/studybuddy/1_client.png",
        orientation: "landscape",
        title: {
          en: "StudyBuddy Community Landing & Dynamic Routing",
          th: "หน้าแรกแนะนำบริการและปุ่มนำทางอัจฉริยะ",
        },
        description: {
          en: "Light/dark themed landing page featuring personalized call-to-actions, user guidelines, and active study rooms directory listings.",
          th: "หน้าแรกของเว็บแสดงจุดเด่นและวิธีการใช้งานระบบ พร้อมปุ่มนำทาง (CTA) ที่เปลี่ยนการแสดงผลตามสถานะเข้าสู่ระบบและการสมัครใช้งานจริง",
        },
      },
      {
        url: "/images/projects/studybuddy/2_core.png",
        orientation: "landscape",
        title: {
          en: "Interactive Student Profile Card Component",
          th: "ส่วนแสดงผลการ์ดโปรไฟล์เพื่อนร่วมเรียน",
        },
        description: {
          en: "Card deck interface using Framer Motion drag gestures to display peer details, schedules, and active courses.",
          th: "หน้าอินเตอร์เฟสประวัติเพื่อนร่วมเรียนแบบการ์ด แสดงข้อมูลวิชาที่ลงเรียน สไตล์การอ่าน และข้อมูลส่วนตัวที่จำเป็น",
        },
      },
      {
        url: "/images/projects/studybuddy/3_admin.png",
        orientation: "landscape",
        title: {
          en: "Real-Time Chat Rooms & Places Directory",
          th: "ระบบแชท WebSocket และสถานที่แนะนำ",
        },
        description: {
          en: "Rich-featured direct and group chat client offering pinned banners, editing, unsend timers, reactions, read notifications, and co-working spaces filters.",
          th: "ระบบแชทเดี่ยวและกลุ่มผ่าน WebSocket ที่รองรับปักหมุด แก้ไขข้อความ ยกเลิกส่ง ส่งรีแอคชัน และระบบบันทึกสถานที่ห้องสมุดหรือร้านกาแฟที่แนะนำสำหรับการศึกษา",
        },
      },
    ],
  },
}
