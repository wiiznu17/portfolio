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
      th: "ระบบกระเป๋าเงินอิเล็กทรอนิกส์และบัญชีแยกประเภทแบบคู่ที่ออกแบบบนสถาปัตยกรรมแยกส่วนบริการระหว่างการประมวลผลธุรกรรมทางการเงินด้วย Spring Boot 3 และ NestJS สำหรับจัดการระบบหน้าบ้าน ป้องกันปัญหาระบบล็อกจากการทำธุรกรรมซ้อนกันด้วยวิธีเรียงลำดับการล็อกบัญชีแบบ Lock Sorting ตามคีย์ UUID พร้อมทั้งแยกงานตรวจสอบข้อมูลสิทธิ์และการแจ้งเตือนไปประมวลผลเบื้องหลังแบบอะซิงโครนัสผ่าน Kafka และ Redis",
    },
    themeColor: "blue",
    bannerGradient:
      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    problem: {
      en: "Processing concurrent financial transactions without balance discrepancies or database deadlocks is complex. Under high load, concurrent updates to the same account can cause race conditions or circular database locks (deadlocks). Additionally, running heavy compliance tasks like KYC verification and AML checks synchronously inside the main request thread slows down transaction processing.",
      th: "การทำธุรกรรมการเงินพร้อมกันเป็นจำนวนมากมักทำให้เกิดปัญหาข้อมูลยอดเงินไม่ตรงกันหรือฐานข้อมูลค้าง (Deadlocks) จากการแก้ไขข้อมูลในเวลาเดียวกัน นอกจากนี้ การทำงานตรวจสอบอย่างการอัปโหลดเอกสารยืนยันตัวตน (KYC) หรือการตรวจสอบประวัติธุรกรรม (AML) ในเธรดหลักร่วมกับการโอนเงินโดยตรง ส่งผลให้การประมวลผลธุรกรรมช้าลง",
    },
    solution: {
      en: "I built a double-entry ledger system utilizing append-only journal entries to guarantee strict mathematical balance consistency. To eliminate database deadlocks during concurrent updates, I enforced a lexicographical lock sorting sequence on wallet UUIDs. The architecture separates the Java Spring Boot transaction processor from the NestJS identity gateway, offloading background notification dispatches and KYC state streams asynchronously using Apache Kafka.",
      th: "ผมพัฒนาและดูแลโครงสร้างบัญชีแยกประเภทแบบคู่ที่บันทึกธุรกรรมแบบเพิ่มข้อมูลอย่างเดียวเพื่อรักษาสมดุลบัญชีอย่างแม่นยำ พร้อมทั้งป้องกันปัญหาฐานข้อมูลค้างจากการทำรายการซ้อนกันโดยการจัดลำดับการล็อกบัญชีด้วยรหัส UUID ก่อนเริ่มทำธุรกรรม และออกแบบสถาปัตยกรรมที่แยกเครื่องมือประมวลผลธุรกรรมไว้ที่ Spring Boot ออกจากส่วนอื่นซึ่งอยู่ที่ NestJS พร้อมทั้งผลักงานเบื้องหลังและการสตรีมข้อมูลสถานะการตรวจสอบตัวตนไปทำงานแบบอะซิงโครนัสผ่าน Apache Kafka",
    },
    architecture: {
      en: [
        "Java 21 / Spring Boot 3 transaction service utilizing append-only double-entry ledger records.",
        "NestJS gateway monorepo using Prisma ORM with separate PostgreSQL schemas for identity, KYC, and admin tasks.",
        "Lock sorting sequence on wallet UUIDs to prevent database deadlocks during concurrent transfers.",
        "Asynchronous tasks, such as notification dispatches and KYC state events, processed using Apache Kafka.",
      ],
      th: [
        "ระบบบริการประมวลผลธุรกรรมทางการเงินด้วย Java 21 และ Spring Boot 3 บันทึกข้อมูลบัญชีแบบคู่แบบเพิ่มข้อมูลเท่านั้น (Append-only)",
        "NestJS Gateway ในรูปแบบ Monorepo ใช้ Prisma ORM และแยก PostgreSQL Schema สำหรับข้อมูลทั่วไป คิวงาน และระบบหลังบ้าน",
        "กำหนดลำดับการล็อกกระเป๋าเงินคู่โอนด้วย UUID (Lock sorting) เพื่อป้องกันปัญหา Deadlocks",
        "ประมวลผลงานเบื้องหลัง เช่น การส่งการแจ้งเตือนและประวัติเปลี่ยนสถานะ KYC แบบอะซิงโครนัสผ่าน Apache Kafka",
      ],
    },
    highlights: [
      {
        title: {
          en: "Concurrency Lock Sorting",
          th: "ระบบเรียงลำดับการล็อกบัญชี",
        },
        description: {
          en: "Enforces a resource locking order using UUID lexicographical sorting to prevent deadlocks during concurrent transfers.",
          th: "บังคับล็อกบัญชีคู่โอนเรียงลำดับตาม UUID เพื่อป้องกันปัญหา Deadlocks ระหว่างโอนเงิน",
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
          th: "บันทึกธุรกรรมเป็นแบบเพิ่มข้อมูลเท่านั้น (Append-only) โดยไม่มีการแก้ไขหรือลบ เพื่อรักษาประวัติการทำรายการอย่างครบถ้วน",
        },
        icon: "🛡️",
      },
      {
        title: {
          en: "Solvency & Liquidity Audits",
          th: "ระบบตรวจสอบความถูกต้องของยอดเงิน",
        },
        description: {
          en: "Monitors aggregate balances and reserves to ensure liquidity matches customer deposits.",
          th: "มอนิเตอร์และคำนวณยอดเงินรวมในระบบเพื่อตรวจสอบความตรงกันของเงินสำรองกับเงินฝากผู้ใช้งาน",
        },
        icon: "📊",
      },
      {
        title: {
          en: "Kafka Async Event Bus",
          th: "คิวงานอะซิงโครนัสด้วย Kafka",
        },
        description: {
          en: "A dedicated Kafka consumer worker handles push notifications (Expo), email fallbacks, KYC status streams, and security alerts asynchronously — keeping the transaction thread completely non-blocking.",
          th: "Worker แยกต่างหากคอยรับ Kafka events เพื่อส่ง Push Notification (Expo) พร้อม Email เป็น Fallback รวมถึงสตรีมสถานะ KYC และการแจ้งเตือนความปลอดภัย โดยไม่บล็อกเธรดการโอนเงินหลัก",
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
        "Offloaded background email sends, SMS dispatches, and KYC status change streams using Apache Kafka workers.",
      ],
      th: [
        "สร้างบริการประมวลผลธุรกรรมทางการเงินด้วย Spring Boot และ Hibernate ในโครงสร้างบัญชีแยกประเภทแบบคู่",
        "ป้องกันปัญหาฐานข้อมูลค้าง (Deadlocks) ด้วยการใช้ระบบเรียงลำดับการล็อกบัญชีตามตัวอักษรของ UUID",
        "เพิ่มความลื่นไหลของหน้าจอแอปมือถือและลดการโหลดซ้ำซ้อนของ API ด้วยระบบ Caching ของ TanStack Query ร่วมกับการจัดการสิทธิ์ผ่าน Zustand",
        "แยกงานส่งอีเมล/SMS และการอัปเดตสถานะการตรวจสอบ KYC ไปประมวลผลแบบอะซิงโครนัสผ่าน Apache Kafka",
      ],
    },
    images: [
      {
        url: "/images/projects/p-wallet/1_client.jpg",
        orientation: "portrait",
        title: {
          en: "Mobile Wallet Client Interface",
          th: "หน้าจอผู้ใช้งานบนมือถือ P-Wallet",
        },
        description: {
          en: "React Native client dashboard showing account balance, quick transfer action, and transaction tracking.",
          th: "แดชบอร์ดแอปพลิเคชันมือถือพัฒนาด้วย React Native แสดงยอดเงินคงเหลือ ทางลัดการโอนเงิน และประวัติธุรกรรม",
        },
      },
      {
        url: "/images/projects/p-wallet/2_core.png",
        orientation: "landscape",
        title: {
          en: "Spring Boot Core Double-Entry Ledger",
          th: "ระบบประมวลผลบัญชีแยกประเภทแบบคู่บน Spring Boot",
        },
        description: {
          en: "Append-only database ledger journal records in Java and Spring Boot, maintaining mathematically balanced accounting.",
          th: "สมุดจดบันทึกประวัติการเงินแบบเพิ่มข้อมูลเท่านั้น พัฒนาด้วย Spring Boot เพื่อตรวจสอบยอดเงินสะสมในระบบ",
        },
      },
      {
        url: "/images/projects/p-wallet/3_admin.png",
        orientation: "landscape",
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
      en: "Multi-Vendor E-Commerce & Payment Gateway Demo",
      th: "เว็บแอปพลิเคชันอีคอมเมิร์ซแบบหลายผู้ขาย & ระบบเชื่อมต่อ Payment Gateway",
    },
    year: "2025",
    role: {
      en: "Fullstack Developer (Cooperative Education)",
      th: "Fullstack Developer (นักศึกษาฝึกงานสหกิจศึกษา)",
    },
    tagline: {
      en: "A multi-vendor e-commerce platform developed as a Client-Server web app with Next.js 15, Express.js, and Sequelize to demonstrate integration of Digio's Payment Gateway (DigiPay) APIs, featuring refund and void workflows.",
      th: "เว็บแอปพลิเคชันอีคอมเมิร์ซแบบหลายผู้ขาย พัฒนาบนสถาปัตยกรรม Client-Server เพื่อสาธิตการเชื่อมต่อระบบรับชำระเงิน DigiPay Payment Gateway ทั้งการยกเลิกรายการ (Void) และการคืนเงิน (Refund)",
    },
    themeColor: "amber",
    bannerGradient:
      "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    problem: {
      en: "The payment gateway product required an interactive marketplace demonstration to show banks and merchant clients the integration flow of APIs. The system needed multi-vendor storefronts, digital assets storage, backoffice controls, and reliable flows for transaction refunds and voids without using real money.",
      th: "ระบบต้องการแพลตฟอร์มตัวอย่างเพื่อแสดงขั้นตอนการเชื่อมต่อ DigiPay Payment Gateway ให้กับลูกค้าและธนาคาร โดยต้องรองรับร้านค้าหลายราย มีระบบควบคุมหลังบ้าน และมีตัวอย่างโฟลว์ยกเลิกและคืนเงิน (Void/Refund) ที่สอดคล้องตามพฤติกรรมจริงของ API",
    },
    solution: {
      en: "I built the merchant and admin portals using Next.js 15 and Express.js, with Sequelize ORM and MySQL. I implemented a refund and void flow integrated with DigiPay APIs, product image storage hosted on Azure Blob Storage, JWT authentication using RSA Key Pairs, and SendGrid invitations for administrators.",
      th: "ผมทำหน้าจัดการร้านค้าและแอดมินหลังบ้านด้วย Next.js 15 และ Express.js เชื่อมต่อฐานข้อมูล MySQL ผ่าน Sequelize ORM โดยระบบรองรับการ Void และ Refund เงินคืนผ่าน DigiPay API เก็บรูปภาพและประวัติร้านค้าบน Azure Blob Storage ใช้กุญแจคู่ RSA ในการออก JWT สำหรับระบุตัวตน และเชิญผู้ดูแลระบบใหม่ผ่าน SendGrid API",
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
        "สถาปัตยกรรมแบบ Client-Server แยกฝั่งหน้าบ้าน (Next.js 15) และฝั่งหลังบ้าน (Express.js) ร่วมกับ MySQL",
        "เชื่อมต่อบริการ DigiPay API ทำรายการยกเลิกรายการชำระเงิน (Void) และทำรายการคืนเงินเข้าบัญชี (Refund) ตามสถานะธุรกรรม",
        "ระบบรักษาความปลอดภัยในการยืนยันตัวตนด้วย JWT แบบคู่กุญแจอสมมาตร (RSA Key Pair) และสิทธิ์เข้าถึงตามบทบาท (RBAC)",
        "ระบบอัปโหลดและเรียกใช้งานรูปภาพร้านค้าและสินค้า จัดเก็บอยู่บน Azure Blob Storage ผ่านสิทธิ์จำกัดอายุ URL (SAS)",
        "ระบบจัดส่งเมลเพื่อเชิญแอดมินคนใหม่ตั้งรหัสผ่านด้วย Secure Tokens ดำเนินงานหลังบ้านส่งผ่าน SendGrid API",
        "จัดกลุ่มและแบ่งระบบจำกัดสภาพแวดล้อมด้วย Docker Container ดีพลอยใช้งานผ่าน Railway และ Vercel",
      ],
    },
    highlights: [
      {
        title: {
          en: "DigiPay Refund Flow",
          th: "ระบบ Void และ Refund",
        },
        description: {
          en: "Integrates financial reversal operations with Voids for un-settled transactions and Refunds for settled transactions based on DigiPay APIs.",
          th: "ทำโฟลว์ย้อนกลับรายการ Void (รายการ APPROVED) และ Refund (รายการ SETTLED) โดยเรียกผ่าน DigiPay API",
        },
        icon: "💳",
      },
      {
        title: {
          en: "Asymmetric JWT Security",
          th: "ความปลอดภัยด้วยกุญแจอสมมาตร",
        },
        description: {
          en: "Secures admin and seller API endpoints using RSA Key Pairs for JSON Web Tokens (JWT) and RBAC middleware.",
          th: "กั้นการใช้งาน API เฉพาะแอดมินและผู้ขายด้วย JWT แบบคู่อสมมาตร (RSA Key Pair) และสิทธิ์ตามบทบาท (RBAC)",
        },
        icon: "🛡️",
      },
      {
        title: {
          en: "SendGrid Invite Streams",
          th: "ระบบเชิญแอดมินใหม่",
        },
        description: {
          en: "Dispatches admin invitations and password resets with secure tokens via the SendGrid API.",
          th: "จัดส่งอีเมลตั้งรหัสผ่านให้แอดมินใหม่ด้วย Token เข้ารหัสผ่านบริการ SendGrid API",
        },
        icon: "📧",
      },
      {
        title: {
          en: "Dockerized DevOps",
          th: "Docker Container",
        },
        description: {
          en: "Manages Express APIs, MySQL, and Redis using Docker, deploying on Railway and Vercel.",
          th: "จัดทำระบบในรูปแบบ Docker Container และดีพลอยใช้งานผ่าน Railway และ Vercel",
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
        "ออกแบบและพัฒนาฟีเจอร์ฝั่งร้านค้า (Merchant Portal) และฝั่งแอดมิน (Admin Portal) ตามสถาปัตยกรรม Client-Server ด้วย Next.js 15 และ Express.js",
        "เชื่อมต่อกับ DigiPay Payment Gateway เพื่อทำรายการยกเลิก (Void) และคืนเงิน (Refund)",
        "ใช้สิทธิ์ตามบทบาทหน้าที่ (RBAC) ร่วมกับ JWT แบบใช้กุญแจคู่ RSA เพื่อป้องกันสิทธิ์เข้าถึง API",
        "ทำระบบส่งคำเชิญแอดมินใหม่เพื่อตั้งรหัสผ่านด้วย Secure Token ผ่าน SendGrid API",
        "จัดสภาพแวดล้อมด้วย Docker Container และดีพลอยใช้งานผ่าน Railway (Backend) และ Vercel (Frontend)",
      ],
    },
    images: [
      {
        url: "/images/projects/digishop/1_client.png",
        orientation: "landscape",
        title: {
          en: "Merchant Workspace & Product Dashboard",
          th: "ระบบจัดการร้านค้าและคลังสินค้าสำหรับผู้ค้า (Merchant Portal)",
        },
        description: {
          en: "Next.js 15 seller dashboard to add/edit products, manage orders, and check inventory statuses with assets stored in Azure Blob Storage.",
          th: "พอร์ทัลร้านค้าที่พัฒนาด้วย Next.js 15 สำหรับเพิ่ม/แก้ไขข้อมูลสินค้า อัปโหลดรูปภาพผ่าน Azure Blob Storage และอัปเดตสถานะการจัดส่ง",
        },
      },
      {
        url: "/images/projects/digishop/2_core.png",
        orientation: "landscape",
        title: {
          en: "DigiPay Refund & Transaction Integration",
          th: "ระบบจัดการธุรกรรมและโฟลว์การขอคืนเงินผ่าน DigiPay API",
        },
        description: {
          en: "Order pipeline integrated with DigiPay Payment Gateway, supporting partial refunds and approved voids based on settled statuses.",
          th: "ระบบสั่งซื้อที่เชื่อมโยงเข้ากับระบบชำระเงิน DigiPay API รองรับการยกเลิกรายการด้วย Void API (รายการ APPROVED) และการคืนเงินด้วย Refund API (รายการ SETTLED)",
        },
      },
      {
        url: "/images/projects/digishop/3_admin.png",
        orientation: "landscape",
        title: {
          en: "Backoffice Admin Console & RBAC Settings",
          th: "แผงจัดการหลังบ้านและระบบควบคุมสิทธิ์ผู้ดูแล (Admin Portal)",
        },
        description: {
          en: "Centralized admin workspace managing store requests, RBAC permissions, and secure SendGrid SHA-256 token invitations.",
          th: "แดชบอร์ดผู้ดูแลระบบเพื่อดูภาพรวมทั้งหมด อนุมัติร้านค้า/สินค้าใหม่ และส่งอีเมลเชิญผู้ดูแลระบบด้วย Secure Tokens ผ่าน SendGrid API",
        },
      },
    ],
  },
  studybuddy: {
    id: "studybuddy",
    title: { en: "StudyBuddy", th: "StudyBuddy" },
    subtitle: {
      en: "Student Matching & Curated Co-Working Space Directory",
      th: "แพลตฟอร์มปัดการ์ดจับคู่เพื่อนร่วมเรียนและระบบแนะนำสถานที่อ่านหนังสือ",
    },
    year: "2026",
    role: {
      en: "Fullstack Developer (Core Features)",
      th: "Fullstack Developer (ผู้พัฒนาฟีเจอร์หลัก)",
    },
    tagline: {
      en: "A matching-style web platform helping university students find study partners, swipe profile cards, explore study spaces, and chat. Built with Next.js, NestJS, and Supabase, utilizing PostgreSQL Row-Level Security (RLS) and WebSockets.",
      th: "แพลตฟอร์มเว็บหาเพื่อนอ่านหนังสือสำหรับนักศึกษา โดยใช้การปัดการ์ดโปรไฟล์ แนะนำสถานที่เรียน และห้องแชทสด พัฒนาด้วย Next.js, NestJS และ Supabase ใช้ PostgreSQL RLS และ WebSocket",
    },
    themeColor: "indigo",
    bannerGradient:
      "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
    problem: {
      en: "University students struggle to find compatible study buddies with matching schedules or courses. Traditional methods lack structure and privacy controls, exposing personal details and private chats to scraping or unauthorized access.",
      th: "นักศึกษามักประสบปัญหาการหาเพื่อนร่วมกลุ่มเรียนหรือคู่ติวหนังสือที่มีสไตล์ตารางเรียนหรือวิชาที่ตรงกัน การหาเพื่อนผ่านโซเชียลมีเดียทั่วไปไม่มีระบบคัดกรองข้อมูลเฉพาะทาง และเสี่ยงต่อการรั่วไหลของข้อมูลติดต่อส่วนตัวหากไม่มีระบบจัดการสิทธิ์",
    },
    solution: {
      en: "I designed and implemented the core features of StudyBuddy using Next.js 16 and NestJS, with Supabase managing client authentication and PostgreSQL security policies. I built a dynamic Landing Page, a 6-step Onboarding form with LocalStorage recovery, a responsive profile card swipe interface, a Recommended Study Places directory with facility filters, and a WebSockets-enabled Chat system with pinned messages, reactions, edits, and read receipts.",
      th: "ผมทำฟีเจอร์หลักของระบบด้วย Next.js 16 และ NestJS ใช้ Supabase จัดการยืนยันตัวตนร่วมกับนโยบาย RLS ของ PostgreSQL โดยพัฒนาหน้า Landing Page ที่เปลี่ยนปุ่มตามสถานะการสมัคร, ระบบลงทะเบียนข้อมูล 6 ขั้นตอนที่เก็บข้อมูลชั่วคราวบน LocalStorage, หน้าแสดงการ์ดโปรไฟล์เพื่อนร่วมเรียนที่รองรับแอนิเมชันปัดซ้ายขวา, ระบบแนะนำสถานที่เรียนพร้อมตัวกรองบริการเสริม และระบบแชทเดี่ยว/กลุ่มผ่าน WebSocket ที่รองรับการปักหมุดข้อความ แก้ไขข้อความ ส่งรีแอคชัน และสถานะอ่านแล้ว",
    },
    architecture: {
      en: [
        "Multi-step Onboarding form with LocalStorage cache recovery to prevent data loss on page refreshes.",
        "Interactive profile cards interface using Framer Motion drag and swipe gestures to display student profiles.",
        "Curated Recommended Study Places directory featuring categories, toggle-ready facility filters, suggestions query, and favorite bookmarking.",
        "Real-time Chat system leveraging Supabase real-time subscriptions (INSERT, UPDATE) and NestJS backend ChatModule handling message creation, edits, reactions, pins, and a 1-minute unsend window.",
        "Personalized Landing page utilizing next-themes for light/dark theme toggles and Noto Sans Thai typography, routing users based on auth and onboarding progress.",
      ],
      th: [
        "ระบบลงทะเบียนโปรไฟล์ผู้ใช้ 6 ขั้นตอนพร้อมช่วยจดจำข้อมูลลง LocalStorage ป้องกันข้อมูลกรอกหายขณะรีเฟรชหน้าเว็บ",
        "หน้าแสดงผลโปรไฟล์เพื่อนเรียนแบบการ์ด โดยใช้ Framer Motion ในการทำแอนิเมชันลากและปัดการ์ด",
        "ระบบแนะนำสถานที่อ่านหนังสือ ค้นหา และฟิลเตอร์พิกัดที่มีจุดเสียบปลั๊กไฟ WiFi ฟรี หรือเปิดบริการโต้รุ่ง 24 ชั่วโมง",
        "ระบบแชทสดคุยเดี่ยว/กลุ่ม ซิงค์ข้อมูล WebSocket มีฟังก์ชันปักหมุดข้อความ แก้ไขข้อความ ยกเลิกส่งภายใน 1 นาที รีแอคชัน และสถานะผู้ใช้อ่านแล้ว",
        "หน้าแรก Landing Page รองรับธีมมืดและสว่างด้วยฟอนต์ Noto Sans Thai และตรรกะนำทาง (CTA routing) ส่งตรงไปยังหน้ากรอกข้อมูลหรือหน้าแชทตามความสมบูรณ์ของโปรไฟล์",
      ],
    },
    highlights: [
      {
        title: {
          en: "WebSocket Chat",
          th: "แชทสดผ่าน WebSocket",
        },
        description: {
          en: "Sends group messages, reactions, pinned messages, and read receipts using PostgreSQL realtime channel subscriptions.",
          th: "รับส่งข้อความแชท ซิงค์ประวัติ แก้ไขคำ รีแอคชัน และปักหมุดข่าวในห้องแชทแบบเรียลไทม์ผ่าน WebSocket",
        },
        icon: "💬",
      },
      {
        title: {
          en: "6-Step Onboarding Form",
          th: "ลงทะเบียนแบบแบ่งขั้นตอน",
        },
        description: {
          en: "Registers user profiles with step-by-step state caching on LocalStorage to prevent progress loss.",
          th: "บันทึกโปรไฟล์แบบ 6 ขั้นตอนพร้อมช่วยจดจำข้อมูลลง LocalStorage ป้องกันข้อมูลกรอกหายขณะรีเฟรช",
        },
        icon: "🧩",
      },
      {
        title: {
          en: "Profile Card Swipe",
          th: "แอนิเมชันการ์ดโปรไฟล์",
        },
        description: {
          en: "Displays study profiles utilizing Framer Motion drag/swipe gestures for smooth and responsive interactions.",
          th: "แสดงผลข้อมูลประวัติเพื่อนร่วมเรียนในรูปแบบการ์ดที่รองรับการลากและปัดหน้าจอเพื่อความสะดวกในการใช้งาน",
        },
        icon: "🎴",
      },
      {
        title: {
          en: "Curated Study Places",
          th: "พิกัดสถานที่อ่านหนังสือ",
        },
        description: {
          en: "Curates reading places with ratings, favorites, and toggle filters for plugs, WiFi, and 24-hour operations.",
          th: "รวบรวมสถานที่ติวหนังสือแยกประเภท และตัวกรองสิ่งอำนวยความสะดวก เช่น จุดเสียบปลั๊กไฟ WiFi ฟรี หรือเปิด 24 ชม.",
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
        "Developed the student profile deck and swipe interface using Framer Motion gesture events.",
        "Built the Recommended Study Places directory featuring curated categories, toggle-ready facility filters, suggestions query, and toggle favorite capabilities.",
        "Implemented a real-time WebSocket chat system leveraging Supabase real-time subscriptions for immediate message syncing, unsend within 1 min, message editing, reactions, and pinning.",
        "Designed a dynamic Landing Page with premium dark mode support and custom typography, routing users to welcome, onboarding, or candidate feed based on auth/registration state.",
      ],
      th: [
        "ทำระบบลงทะเบียนข้อมูลผู้ใช้แบบ 6 ขั้นตอน โดยบันทึกข้อมูลแบบชั่วคราวลง LocalStorage เพื่อป้องกันข้อมูลสูญหายเมื่อรีเฟรชหน้าเว็บ",
        "ทำแดชบอร์ดการ์ดโปรไฟล์แสดงข้อมูลเพื่อนร่วมเรียน พร้อมใช้ Framer Motion จัดการแอนิเมชันและการตอบสนองต่อการปัดหน้าจอ",
        "ทำระบบแนะนำสถานที่อ่านหนังสือที่สามารถกรองตามประเภทและสิ่งอำนวยความสะดวก เช่น WiFi ปลั๊กไฟ หรือร้านที่เปิด 24 ชั่วโมง",
        "ทำระบบแชทเดี่ยวและกลุ่มผ่าน WebSocket มีระบบปักหมุด แก้ไขข้อความ ยกเลิกการส่งภายใน 1 นาที และการแสดงรีแอคชัน",
        "ทำหน้า Landing Page รองรับทั้งธีมมืดและธีมสว่าง โดยใช้ปุ่ม CTA นำทางผู้ใช้ไปยังหน้าต่าง ๆ ตามสถานะการสมัครและกรอกข้อมูลโปรไฟล์",
      ],
    },
    images: [
      {
        url: "/images/projects/studybuddy/1_client.png",
        orientation: "landscape",
        title: {
          en: "StudyBuddy Community Landing & Dynamic Routing",
          th: "หน้าแรกแพลตฟอร์มหาเพื่อนเรียนพร้อมเส้นทางอัจฉริยะ",
        },
        description: {
          en: "Light/dark themed landing page featuring personalized call-to-actions, user guidelines, and active study rooms directory listings.",
          th: "หน้าแรกของเว็บแสดงจุดเด่นระบบ แนะนำวิธีการใช้งาน และปุ่มนำทาง (CTA) ที่เปลี่ยนตามสถานะการเข้าสู่ระบบและข้อมูลผู้ใช้งาน",
        },
      },
      {
        url: "/images/projects/studybuddy/2_core.png",
        orientation: "landscape",
        title: {
          en: "Interactive Profile Cards & Swipe Deck",
          th: "หน้าจอแสดงผลการ์ดโปรไฟล์เพื่อนร่วมเรียน",
        },
        description: {
          en: "Card deck interface using Framer Motion drag gestures to display peer details, schedules, and active courses.",
          th: "ส่วนหน้าต่างโปรไฟล์เพื่อนเรียนแบบการ์ด แสดงข้อมูลวิชาเรียน สไตล์การอ่าน และตารางเวลา พร้อมระบบลากการ์ด",
        },
      },
      {
        url: "/images/projects/studybuddy/3_admin.png",
        orientation: "landscape",
        title: {
          en: "Real-Time Chat Rooms & Places Directory",
          th: "ห้องแชทสดด้วย WebSocket และพิกัดแนะนำสถานที่ติว",
        },
        description: {
          en: "Rich-featured direct and group chat client offering pinned banners, editing, unsend timers, reactions, read notifications, and co-working spaces filters.",
          th: "ระบบแชทสดคุยเดี่ยว/กลุ่มผ่าน WebSocket มีฟังก์ชันปักหมุดข่าว ยกเลิกส่ง พิมพ์แชทสด รีแอคชันอีโมจิ และระบบบันทึกถูกใจแนะนำร้านกาแฟ/ห้องสมุดสำหรับการเรียน",
        },
      },
    ],
  },
}
