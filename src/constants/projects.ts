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
  githubUrl?: string
  demoUrl?: string
  videoUrl?: string
  reportUrl?: string
  hasDemo?: boolean
  hasVideo?: boolean
  hasSourceCode?: boolean
  hasReport?: boolean
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
      en: "An e-wallet and double-entry ledger system engineered with NestJS as a centralized API Gateway that aggregates modular services and routes financial operations to a decoupled transaction processing engine built with Spring Boot 3. It prevents database deadlocks during concurrent transactions through lexicographical UUID lock sorting, and offloads background tasks like identity verification (KYC) and notifications asynchronously to Apache Kafka and Redis.",
      th: "ระบบกระเป๋าเงินอิเล็กทรอนิกส์และบัญชีแยกประเภทแบบคู่ ที่ออกแบบสถาปัตยกรรมโดยมี NestJS เป็น API Gateway ศูนย์กลางคอยรวบรวมและแยกโมดูลบริการต่างๆ และส่งต่อคำขอธุรกรรมการเงินไปประมวลผลยังระบบบริการธุรกรรมหลัก (Finance Service) ที่พัฒนาด้วย Spring Boot 3 แยกส่วนต่างหาก ช่วยป้องกันปัญหาระบบติดล็อก (Deadlock) จากการทำธุรกรรมพร้อมกัน ด้วยวิธีเรียงลำดับการล็อกบัญชีตามคีย์ UUID (Lock Sorting) พร้อมทั้งแยกงานยืนยันตัวตน (KYC) และการแจ้งเตือนไปประมวลผลเบื้องหลังแบบอะซิงโครนัสผ่าน Kafka และ Redis",
    },
    themeColor: "blue",
    bannerGradient:
      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    problem: {
      en: "Processing high-concurrency financial transactions often leads to balance discrepancies or database deadlocks due to overlapping simultaneous updates on the same account. Furthermore, executing resource-intensive compliance tasks, such as identity verification (KYC) or anti-money laundering (AML) checks, synchronously within the main request thread degrades transaction processing latency.",
      th: "การประมวลผลธุรกรรมทางการเงินพร้อมกันในปริมาณมาก มักส่งผลให้เกิดปัญหายอดคงเหลือไม่ตรงกัน (Race Conditions) หรือเกิดปัญหาฐานข้อมูลติดล็อก (Deadlocks) จากการเข้าแก้ไขข้อมูลพร้อมกัน นอกจากนี้ การรันงานตรวจสอบความสอดคล้อง เช่น การยืนยันตัวตน (KYC) หรือการตรวจสอบประวัติธุรกรรม (AML) บนเธรดหลัก (Main Request Thread) ควบคู่กับการโอนเงินโดยตรง ยังส่งผลกระทบต่อประสิทธิภาพและความเร็วในการประมวลผลธุรกรรม",
    },
    solution: {
      en: "I architected the platform with NestJS acting as a centralized API Gateway that aggregates modular services and routes financial operations to a decoupled core transaction engine built with Spring Boot 3 and Hibernate. The transaction engine utilizes append-only double-entry ledger journaling to guarantee absolute balance consistency, eliminating database deadlocks through a lexicographical UUID lock-sorting sequence on wallet entries before execution, and offloading heavy tasks asynchronously via Apache Kafka and Redis.",
      th: "ผมได้ออกแบบสถาปัตยกรรมระบบโดยมี NestJS เป็น API Gateway ศูนย์กลางที่คอยบริหารจัดการรวบรวมโมดูลบริการต่างๆ และส่งต่อคำขอธุรกรรมการเงินไปประมวลผลที่ระบบบริการบันทึกบัญชีแยกประเภทแบบคู่ (Finance Service) ที่พัฒนาด้วย Spring Boot 3 แบบแยกส่วน โดยระบบบันทึกข้อมูลธุรกรรมแบบเพิ่มอย่างเดียว (Append-Only Journaling) เพื่อรักษาสมดุลบัญชีแยกประเภทแบบคู่อย่างแม่นยำ และหลีกเลี่ยงปัญหาฐานข้อมูลติดล็อก (Deadlocks) ด้วยการใช้ UUID Lock Sorting",
    },
    architecture: {
      en: [
        "Decoupled core financial transaction service built with Java 21 and Spring Boot 3, managing core financial ledger entries via an append-only double-entry database.",
        "Centralized NestJS API Gateway monorepo that manages modular services, routes incoming financial requests to the Spring Boot transaction service, and uses Prisma ORM to manage PostgreSQL schemas for user identity, KYC verification, and backoffice administration.",
        "Enforced lexicographical lock sorting sequence on wallet UUIDs to prevent database deadlocks during concurrent transfers.",
        "Asynchronous background processing for multi-channel notifications and KYC state update streams using Apache Kafka.",
      ],
      th: [
        "ระบบบริการธุรกรรมทางการเงินแยกส่วน (Decoupled Finance Service) พัฒนาด้วย Java 21 และ Spring Boot 3 บันทึกประวัติบัญชีแยกประเภทแบบคู่ในรูปแบบเพิ่มข้อมูลเท่านั้น (Append-Only Ledger)",
        "API Gateway ด้วย NestJS ในรูปแบบ Monorepo ทำหน้าที่รวบรวมบริการและแยกโมดูล โดยส่งต่อคำสั่งธุรกรรมทางการเงินไปยัง Finance Service และใช้ Prisma ORM จัดการฐานข้อมูลแยก Schema สำหรับข้อมูลทั่วไป, การตรวจสอบตัวตน (KYC) และระบบหลังบ้าน",
        "กำหนดลำดับการล็อกบัญชีคู่โอนด้วย UUID (Lock Sorting) เพื่อป้องกันปัญหาฐานข้อมูลติดล็อก (Deadlocks)",
        "แยกระบบการประมวลผลงานเบื้องหลัง (Background Workers) เช่น การส่งการแจ้งเตือน และการสตรีมสถานะอัปเดต KYC แบบอะซิงโครนัสผ่าน Apache Kafka",
      ],
    },
    highlights: [
      {
        title: {
          en: "Concurrency Lock Sorting",
          th: "ระบบจัดลำดับการล็อกบัญชี",
        },
        description: {
          en: "Enforces resource locking order based on wallet UUIDs to prevent database deadlocks during highly concurrent transfers.",
          th: "กำหนดลำดับการล็อกทรัพยากรของคู่โอนเงินตามคีย์ UUID เพื่อป้องกันปัญหาฐานข้อมูลติดล็อก (Deadlocks) เมื่อมีการทำรายการพร้อมกันในปริมาณสูง",
        },
        icon: "Zap",
      },
      {
        title: {
          en: "Append-Only Ledger",
          th: "บัญชีแยกประเภทแบบคู่",
        },
        description: {
          en: "Every transaction is recorded using append-only double-entry bookkeeping with no modifications or deletions allowed, preserving a complete audit trail.",
          th: "บันทึกข้อมูลธุรกรรมแบบเพิ่มข้อมูลอย่างเดียว (Append-Only Journaling) โดยห้ามแก้ไขหรือลบ เพื่อรักษาประวัติบัญชีแยกประเภทแบบคู่ที่ตรวจสอบย้อนกลับได้สมบูรณ์แบบ",
        },
        icon: "ShieldCheck",
      },
      {
        title: {
          en: "Solvency & Liquidity Audits",
          th: "ระบบตรวจสอบความสอดคล้องของยอดเงิน",
        },
        description: {
          en: "Monitors and calculates aggregate balances to verify consistency between system reserves and total user deposits.",
          th: "ติดตามความถูกต้องของยอดคงเหลือรวมในระบบแบบเรียลไทม์ เพื่อตรวจสอบความสอดคล้องระหว่างเงินสำรองของระบบและยอดเงินฝากทั้งหมดของผู้ใช้งาน",
        },
        icon: "BarChart3",
      },
      {
        title: {
          en: "Kafka Async Event Bus",
          th: "งานเบื้องหลังอะซิงโครนัสผ่าน Kafka",
        },
        description: {
          en: "Decouples event handling into dedicated background workers that process Kafka streams to dispatch push notifications (Expo) with email fallbacks, stream KYC changes, and trigger alerts without blocking core transaction threads.",
          th: "ใช้ระบบประมวลผลส่วนหลัง (Kafka Event Worker) แยกต่างหากเพื่อรับสตรีม Event ในการส่ง Push Notification (Expo), สำรองข้อมูลทางอีเมล, อัปเดตสถานะ KYC และแจ้งความปลอดภัยโดยไม่บล็อกเธรดหลักการทำธุรกรรม",
        },
        icon: "Rocket",
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
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/redis/redis-original.svg",
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
    // demoUrl: "https://p-wallet.wiiznu.dev",
    videoUrl: "https://drive.google.com/file/d/1qpvlqDPhZ1L4BQeSovWACie49VHHhrVk/view?usp=drive_link",
    hasReport: false,
    hasDemo: false,
    hasVideo: true,
    hasSourceCode: true,
    
    bullets: {
      en: [
        "Developed the financial transaction processing engine with Spring Boot and Hibernate within a double-entry ledger architecture.",
        "Eliminated database transaction deadlocks under heavy loads by implementing a lexicographical UUID lock-sorting protocol.",
        "Enhanced mobile app performance and reduced API overhead by leveraging TanStack Query for caching and Zustand for lightweight global authentication state management.",
        "Decoupled background email notifications and KYC verification updates asynchronously using Apache Kafka workers.",
      ],
      th: [
        "ออกแบบและพัฒนาระบบประมวลผลธุรกรรมการเงินหลัก (Core Transaction Engine) ด้วย Spring Boot และ Hibernate ภายใต้สถาปัตยกรรมบัญชีแยกประเภทแบบคู่ (Double-Entry Ledger)",
        "ป้องกันปัญหาฐานข้อมูลติดล็อก (Deadlocks) ด้วยการใช้ระบบจัดลำดับการล็อกบัญชีตามคีย์ UUID (Lock Sorting)",
        "เพิ่มประสิทธิภาพและความลื่นไหลให้โมบายล์แอป ลดภาระของเซิร์ฟเวอร์ด้วยการทำ Caching ผ่าน TanStack Query ร่วมกับการจัดการสถานะการยืนยันตัวตนหลักของแอปด้วย Zustand",
        "แยกงานเบื้องหลัง เช่น การจัดส่งการแจ้งเตือนทางอีเมล และการสตรีมสถานะ KYC ไปทำงานแบบอะซิงโครนัสผ่าน Apache Kafka Workers",
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
          en: "React Native mobile client dashboard showing user balance, quick transfer action, and real-time transaction history.",
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
          en: "Append-only financial transaction ledger system built with Java and Spring Boot to guarantee complete mathematical balance consistency.",
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
          en: "Next.js backoffice dashboard displaying system reserves, active Kafka queue metrics, and administrative utilities to let operations teams manage and inspect system details.",
          th: "แดชบอร์ดหลังบ้านพัฒนาด้วย Next.js แสดงสถานะเงินสำรองในระบบ สัญญาณสุขภาพของคิวงาน Kafka และระบบอื่นๆ เพื่อให้ทีมปฏิบัติการสามารถตรวจสอบและควบคุมการทำงานของระบบได้อย่างมีประสิทธิภาพ",
        },
      },
    ],
  },
  digishop: {
    id: "digishop",
    title: { en: "DigiShop", th: "DigiShop" },
    subtitle: {
      en: "Multi-Vendor E-Commerce & Payment Gateway Demo",
      th: "แพลตฟอร์มอีคอมเมิร์ซแบบหลายร้านค้า (Multi-Vendor Marketplace) และระบบรับชำระเงิน",
    },
    year: "2025",
    role: {
      en: "Web Developer (Cooperative Education)",
      th: "Web Developer (นักศึกษาฝึกงานสหกิจศึกษา)",
    },
    tagline: {
      en: "A multi-vendor e-commerce platform built on a Client-Server architecture to demonstrate deep integration with the DigiPay Payment Gateway, showcasing real-time transaction void and refund workflows.",
      th: "เว็บแอปพลิเคชันอีคอมเมิร์ซแบบหลายร้านค้า (Multi-Vendor) พัฒนาบนสถาปัตยกรรม Client-Server เพื่อสาธิตการเชื่อมต่อระบบรับชำระเงิน DigiPay Payment Gateway แบบครบวงจร ครอบคลุมทั้งกระบวนการยกเลิกรายการทันที (Void) และการขอคืนเงินเต็มจำนวนหรือบางส่วน (Refund)",
    },
    themeColor: "amber",
    bannerGradient:
      "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    problem: {
      en: "To demonstrate the DigiPay Payment Gateway integration process to clients, the company proposed developing a Multi-Vendor Marketplace prototype. This system simulates a real-world multi-vendor environment, featuring comprehensive administrative controls and reliable transaction reversal workflows (Voids and Refunds) modeled precisely after live payment gateway API behaviors.",
      th: "เนื่องจากบริษัทต้องการระบบต้นแบบเพื่อสาธิตขั้นตอนการเชื่อมต่อของ DigiPay Payment Gateway แก่กลุ่มลูกค้า จึงได้เสนอให้พัฒนาระบบ Multi-Vendor Marketplace เพื่อจำลองพฤติกรรมร้านค้าที่มีผู้ขายหลายราย พร้อมระบบควบคุมหลังบ้าน และขั้นตอนการยกเลิกหรือคืนเงิน (Void & Refund) ที่ทำงานตรงตาม API Spec จริงทุกประการ",
    },
    solution: {
      en: "I architected the database schema and system workflows from scratch. I developed the merchant portal and backoffice administrator dashboards using Next.js 15, Express.js, and Sequelize ORM on a MySQL database. I implemented real-time transaction void and refund pipelines integrated with DigiPay APIs, stored product assets securely on Azure Blob Storage, implemented asymmetric JWT security utilizing RSA Key Pairs, and automated administrator onboarding flows via the SendGrid API.",
      th: "ผมได้รับผิดชอบออกแบบโครงสร้างฐานข้อมูล (Database Schema) และกระบวนการทำงานหลัก (Workflows) ทั้งหมดของแพลตฟอร์ม พร้อมทั้งพัฒนาส่วนจัดการพอร์ทัลร้านค้า (Merchant Portal) และแผงผู้ดูแลระบบหลังบ้าน (Admin Portal) โดยใช้ Next.js 15, Express.js และ Sequelize ORM ร่วมกับ MySQL ระบบรองรับโฟลว์ Void และ Refund เงินคืนแบบเรียลไทม์ผ่าน DigiPay API, จัดเก็บทรัพยากรรูปภาพและไฟล์ร้านค้าบน Azure Blob Storage, ใช้ระบบรักษาความปลอดภัย JWT แบบใช้กุญแจคู่อสมมาตร RSA และระบบส่งอีเมลลงทะเบียนผู้ดูแลระบบรายใหม่ด้วย Secure Token ผ่าน SendGrid API",
    },
    architecture: {
      en: [
        "Client-Server architecture separating frontend portals (Next.js 15) from backend REST APIs (Express.js) and MySQL database.",
        "DigiPay API integration managing transaction status queries, voids (un-settled approved), and refunds (settled captured) flows.",
        "Secured JWT authentication using asymmetric RSA Key Pairs and Role-Based Access Control (RBAC) middleware.",
        "Store profile and product image uploads stored on Azure Blob Storage, securely accessed via Shared Access Signature (SAS) URLs.",
        "Onboarding workflow sending administrative invitations and password setup links via secure tokens using the SendGrid API.",
        "Containerized development environment using Docker, deployed on Railway (Backend & DB) and Vercel (Frontend).",
      ],
      th: [
        "สถาปัตยกรรมแบบ Client-Server แยกฝั่งพอร์ทัลหน้าบ้าน (Next.js 15 Client) ออกจากระบบ REST API หลังบ้าน (Express.js Server) อย่างเป็นอิสระต่อกัน ร่วมกับฐานข้อมูล MySQL",
        "เชื่อมต่อและจำลองการรับส่งข้อมูลของ DigiPay Payment Gateway เพื่อดำเนินการยกเลิกรายการชำระเงิน (Void) และคืนเงินเข้าบัญชี (Refund) ตามเงื่อนไขสถานะธุรกรรม",
        "ระบบรักษาความปลอดภัยในการตรวจสอบสิทธิ์ด้วย JWT แบบใช้กุญแจคู่อสมมาตร RSA (Asymmetric RSA Key Pair) ร่วมกับการกำหนดบทบาทการเข้าใช้งานระบบ (Role-Based Access Control - RBAC)",
        "ระบบจัดเก็บทรัพยากรรูปภาพสินค้าและโปรไฟล์ร้านค้าบน Azure Blob Storage และสร้างการเข้าถึงรูปภาพอย่างปลอดภัยผ่าน Shared Access Signature (SAS) URL แบบกำหนดเวลาหมดอายุ",
        "ระบบลงทะเบียนผู้ดูแลระบบ (Admin Onboarding) ด้วยคำเชิญผ่านอีเมลที่แนบ Secure Token ทำงานผ่าน SendGrid API เพื่อความปลอดภัยในการตั้งรหัสผ่านใหม่",
        "จัดทำสภาพแวดล้อมของระบบด้วย Docker Container เพื่อควบคุมมาตรฐานการพัฒนา พร้อมดีพลอยใช้งานจริง (Deployment) ในรูปแบบ Express API บน Railway และ Next.js Portal บน Vercel",
      ],
    },
    highlights: [
      {
        title: {
          en: "DigiPay Refund Flow",
          th: "กระบวนการย้อนกลับธุรกรรม (Voids & Refunds)",
        },
        description: {
          en: "Executes transaction reversals with Voids for APPROVED transactions and Refunds for SETTLED transactions using the DigiPay API.",
          th: "จำลองและสร้างโฟลว์ย้อนกลับรายการชำระเงินโดยอัตโนมัติด้วย Void API สำหรับธุรกรรมที่อนุมัติแล้วแต่ยังไม่ได้ตัดยอด (APPROVED) และ Refund API สำหรับรายการที่เก็บเงินเรียบร้อยแล้ว (SETTLED) ผ่านช่องทาง DigiPay API",
        },
        icon: "CreditCard",
      },
      {
        title: {
          en: "Asymmetric JWT Security",
          th: "ระบบความปลอดภัย JWT ด้วยกุญแจคู่ RSA",
        },
        description: {
          en: "Protects administrative and merchant API endpoints using RSA Key Pairs for JSON Web Tokens (JWT) and RBAC middleware.",
          th: "ป้องกันการเข้าถึง API และพอร์ทัลหลังบ้านด้วย JWT แบบคู่อสมมาตร RSA (Asymmetric RSA Key Pairs) ร่วมกับการควบคุมสิทธิ์ตามบทบาทผู้ใช้งาน (RBAC Middleware)",
        },
        icon: "ShieldCheck",
      },
      {
        title: {
          en: "SendGrid Invite Streams",
          th: "ระบบคำเชิญ Onboarding ผ่าน SendGrid",
        },
        description: {
          en: "Dispatches administrative invitations and password setup flows using secure, encrypted tokens via the SendGrid API.",
          th: "ส่งคำเชิญลงทะเบียนแอดมินรายใหม่ และส่งลิงก์รีเซ็ตรหัสผ่านด้วย Secure Tokens เข้ารหัสทางอีเมลผ่านระบบของ SendGrid API",
        },
        icon: "Mail",
      },
      {
        title: {
          en: "Dockerized DevOps",
          th: "การทำงานด้วย Docker Container",
        },
        description: {
          en: "Containerizes system components using Docker to simplify setup and deployment across Railway and Vercel.",
          th: "จำลองและบรรจุเซิร์ฟเวอร์ Express.js, MySQL และ Redis ให้อยู่ภายใต้ Docker Containers เพื่อความสะดวกในการติดตั้งระบบ และนำไปรันบน Railway",
        },
        icon: "Server",
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
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/redis/redis-original.svg",
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
    // githubUrl: "https://github.com/wiiznu17/digishop",
    // demoUrl: "https://digishop.wiiznu.dev",
    // videoUrl: "https://video.wiiznu.dev/digishop",
    reportUrl: "https://drive.google.com/file/d/1EIyz-zeb8qhczTNdg_SfXzCNbEMu-Veb/view?usp=sharing",
    hasDemo: false,
    hasVideo: false,
    hasSourceCode: false,
    hasReport: true,
    bullets: {
      en: [
        "Designed and built the multi-vendor Merchant portal (inventories, orders) and Admin portal (RBAC, approvals) on a Client-Server architecture using Next.js 15 and Express.js.",
        "Integrated the DigiPay Payment Gateway API to process approved voids and settled refunds.",
        "Protected administrative APIs and workspaces using asymmetric RSA cryptographic JWTs and Role-Based Access Control (RBAC).",
        "Developed an administrator onboarding invitation workflow utilizing secure validation tokens and SendGrid API.",
        "Containerized services with Docker and deployed via Railway (Express Backend, MySQL, Redis) and Vercel (Next.js Frontend).",
      ],
      th: [
        "ออกแบบสถาปัตยกรรมและพัฒนา Merchant Portal สำหรับร้านค้า และ Admin Portal สำหรับผู้ดูแลระบบหลังบ้านบนสถาปัตยกรรมแบบ Client-Server โดยใช้ Next.js 15 และ Express.js",
        "เชื่อมต่อระบบชำระเงิน DigiPay Payment Gateway เพื่อรองรับโฟลว์ธุรกรรมคืนเงิน (Refund) และขอยกเลิกรายการยอดเงิน (Void)",
        "ควบคุมระบบรักษาความปลอดภัยและการเข้าใช้ API ด้วย Role-Based Access Control (RBAC) ร่วมกับการเซ็นและตรวจสอบ JWT ด้วยกุญแจคู่อสมมาตร RSA",
        "พัฒนาระบบลงทะเบียนผู้ดูแลระบบรายใหม่ (Admin Onboarding) ด้วย Secure Tokens ที่มีอายุจำกัด จัดส่งผ่าน SendGrid API",
        "จัดโครงสร้างแอปพลิเคชันด้วย Docker Containers และดีพลอยระบบหลังบ้าน Express API บน Railway และระบบหน้าบ้าน Next.js Client บน Vercel",
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
          en: "Merchant workspace built with Next.js 15 for managing products, uploading assets via Azure Blob Storage, and tracking order shipments.",
          th: "พอร์ทัลผู้ขาย (Merchant Portal) พัฒนาด้วย Next.js 15 สำหรับจัดการและปรับแต่งสินค้า อัปโหลดรูปภาพผ่าน Azure Blob Storage และติดตามคำสั่งซื้อ",
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
          en: "Order pipeline integrated with DigiPay Payment Gateway, supporting approved voids and settled refunds based on transaction status.",
          th: "ระบบการสั่งซื้อและชำระเงินที่เชื่อมต่อกับ DigiPay API เพื่อรองรับโฟลว์ยกเลิกรายการทันที (Void) และทำเรื่องคืนเงิน (Refund) ตามสถานะธุรกรรม",
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
          th: "แผงควบคุมหลักสำหรับผู้ดูแลระบบเพื่อติดตามภาพรวม อนุมัติการเปิดร้านค้าหรือลงสินค้าใหม่ และส่งอีเมลคำเชิญผู้ดูแลระบบรายใหม่ผ่าน SendGrid API",
        },
      },
    ],
  },
  studybuddy: {
    id: "studybuddy",
    title: { en: "StudyBuddy", th: "StudyBuddy" },
    subtitle: {
      en: "Student Matching & Curated Co-Working Space Directory",
      th: "แพลตฟอร์มจับคู่หาเพื่อนร่วมเรียน และระบบแนะนำสถานที่อ่านหนังสือ",
    },
    year: "2026",
    role: {
      en: "Web Developer (Core Features)",
      th: "Web Developer (ผู้พัฒนาฟีเจอร์หลัก)",
    },
    tagline: {
      en: "A student profile directory web platform helping university students find study partners, view interactive profile cards, explore study spaces, and chat in real-time. Built with Next.js, NestJS, and Supabase, utilizing PostgreSQL Row-Level Security (RLS) and WebSockets.",
      th: "เว็บแพลตฟอร์มช่วยค้นหาและจับกลุ่มเพื่อทำการบ้าน ติวสอบ หรือทำโปรเจกต์สำหรับนักศึกษา โดยใช้หน้าแสดงข้อมูลการ์ดโปรไฟล์ผู้เรียนหลัก, ระบบแนะนำสถานที่นั่งอ่านหนังสือ, และห้องแชทสื่อสารแบบเรียลไทม์ พัฒนาขึ้นด้วย Next.js, NestJS และ Supabase มีระบบความปลอดภัยข้อมูลด้วย PostgreSQL Row-Level Security (RLS) และซิงค์ข้อมูลแชทเรียลไทม์ผ่าน WebSocket",
    },
    themeColor: "indigo",
    bannerGradient:
      "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
    problem: {
      en: "University students frequently struggle to find compatible study partners, tutoring peers, or project group members with matching course loads, study styles, and schedules. Traditional communication methods lack academic-specific filtering and fail to enforce robust data privacy boundaries, exposing students' sensitive contact details to unauthorized access.",
      th: "นักศึกษามหาวิทยาลัยมักเผชิญความท้าทายในการค้นหาเพื่อนร่วมชั้น คู่ติวสอบ หรือหาสมาชิกทีมทำโปรเจกต์ที่มีสไตล์การเรียน ตารางตารางเรียน หรือวิชาลงทะเบียนเรียนสอดคล้องกัน การโพสต์ประกาศหาเพื่อนผ่านโซเชียลมีเดียทั่วไปมักขาดระบบการคัดกรองที่มีประสิทธิภาพ และยังเสี่ยงต่อความปลอดภัยของข้อมูลติดต่อส่วนตัวอันเกิดจากการไม่มีระบบจำกัดการเข้าใช้งานที่รัดกุม",
    },
    solution: {
      en: "I designed and developed the core application features using Next.js 16 and NestJS, leveraging Supabase and PostgreSQL Row-Level Security (RLS) policies to secure data. I implemented an intelligent landing page featuring dynamic Call-to-Action (CTA) routing based on user state, a persistent 6-step onboarding form with LocalStorage recovery, a custom student profile card component, a curated directory of co-working study spaces with facility filters, and a WebSocket-driven real-time chat client supporting pinned messages, edits, reactions, and read receipts.",
      th: "ผมได้รับหน้าที่พัฒนาฟีเจอร์หลักของระบบด้วย Next.js 16 และ NestJS โดยเลือกใช้ Supabase จัดการเรื่องการยืนยันตัวตนร่วมกับการควบคุมสิทธิ์ข้อมูลแถวฐานข้อมูลด้วย PostgreSQL RLS ซึ่งระบบหลักประกอบด้วย: หน้า Landing Page อัจฉริยะที่แปรผันการนำทางตามสถานะการสมัครใช้งานของผู้ใช้, แบบฟอร์มลงทะเบียนข้อมูล 6 ขั้นตอนที่จดจำสเตทชั่วคราวบน LocalStorage, คอมโพเนนต์การ์ดโปรไฟล์หลักแสดงสไตล์การติวของผู้เรียน, ระบบแนะนำสถานที่อ่านหนังสือพร้อมตัวกรองตามอำนวยความสะดวก, และระบบห้องแชทเรียลไทม์เดี่ยวและกลุ่มผ่าน WebSocket ที่รองรับฟังก์ชันการปักหมุดข้อความ, ส่ง Emoji รีแอคชัน, แก้ไขข้อความย้อนหลัง และตัวบ่งชี้สถานะผู้ใช้อ่านแล้ว (Read Indicators)",
    },
    architecture: {
      en: [
        "A 6-step Onboarding form with LocalStorage cache recovery to prevent progress loss during page refreshes.",
        "Custom student profile card component designed to clearly present course loads, schedules, and study styles in a clean, responsive layout.",
        "Curated Study Places directory supporting categories, toggle-ready facility filters (power plugs, free WiFi, 24h service), search queries, and bookmarked favorites.",
        "Real-time direct and group Chat system utilizing NestJS ChatModule over WebSockets, supporting message pinning, editing, a 1-minute unsend window, rich reactions, and live read indicators.",
        "Dynamic Landing Page featuring a customizable call-to-action routing engine to direct users to onboarding or chat based on their profile status.",
      ],
      th: [
        "แบบฟอร์มลงข้อมูลแบบ 6 ขั้นตอน (Onboarding Flow) พร้อมระบบช่วยจดจำข้อมูลชั่วคราวบน LocalStorage เพื่อป้องกันปัญหากรอกข้อมูลหายหากรีเฟรชหน้าเว็บ",
        "ออกแบบคอมโพเนนต์หลักของการ์ดโปรไฟล์นักศึกษา (Student Profile Card Component) จัดวางเลย์เอาต์รายวิชา ตารางตารางเรียน และความชอบในการศึกษาได้อย่างสวยงาม สะอาดตา และเป็นสัดส่วน",
        "ระบบแนะนำและรีวิวสถานที่อ่านหนังสือ ค้นหา และฟิลเตอร์สถานที่นั่งอ่านหนังสือที่มีสิ่งอำนวยความสะดวกเฉพาะ เช่น พิกัดที่มีจุดเสียบปลั๊กไฟ, บริการ Free WiFi หรือร้านที่เปิดตลอด 24 ชั่วโมง",
        "ระบบห้องแชทสื่อสารส่วนตัวและแชทกลุ่ม ซิงค์ข้อมูลผ่าน WebSocket ร่วมกับ NestJS ChatModule รองรับฟังก์ชันปักหมุดข้อความสำคัญ, แก้ไขข้อความย้อนหลัง, ยกเลิกการส่งข้อความภายใน 1 นาที, ส่งข้อความรีแอคชันด้วย Emoji และอัปเดตสถานะผู้ใช้อ่านแล้วแบบเรียลไทม์",
        "หน้า Landing Page ที่ติดตั้งระบบนำทางอัจฉริยะ (CTA Button Routing) เพื่อเปลี่ยนเส้นทางผู้ใช้ไปยังหน้าตั้งค่าโปรไฟล์ หรือพอร์ทัลหลักตามระดับสเตทการลงทะเบียนของตนเอง",
      ],
    },
    highlights: [
      {
        title: {
          en: "WebSocket Chat",
          th: "ระบบห้องแชทเรียลไทม์",
        },
        description: {
          en: "Sends and syncs direct or group messages, rich reactions, pinned alerts, and message editing in real-time using secure WebSockets.",
          th: "ระบบรับส่งข้อความในห้องแชทเดี่ยวและกลุ่มแบบเรียลไทม์ ซิงค์ประวัติ แก้ไขคำ ส่ง Emoji รีแอคชัน และปักหมุดข้อความสำคัญได้อย่างราบรื่นผ่านการเชื่อมต่อ WebSocket",
        },
        icon: "MessageSquare",
      },
      {
        title: {
          en: "6-Step Onboarding Form",
          th: "ระบบ Onboarding แบบจดจำสเตทชั่วคราว (6-Step Form)",
        },
        description: {
          en: "Registers detailed user profiles with step-by-step state caching on LocalStorage to systematically prevent progress loss.",
          th: "ฟอร์มตั้งค่าโปรไฟล์ผู้ใช้แบบละเอียด 6 ขั้นตอน พร้อมระบบช่วยบันทึกประวัติการกรอกข้อมูลชั่วคราวไว้บน LocalStorage ป้องกันสเตทกรอกสูญหายเมื่อหน้าจอดับหรือรีเฟรช",
        },
        icon: "Puzzle",
      },
      {
        title: {
          en: "Profile Card Component",
          th: "ดีไซน์การ์ดโปรไฟล์หลัก",
        },
        description: {
          en: "Displays detailed study schedules, course loads, and academic styles in a clean, user-friendly card layout.",
          th: "ออกแบบดีไซน์ UI ของการ์ดโปรไฟล์นักศึกษา จัดลำดับแสดงวิชาเรียนที่สนใจ รูปแบบการอ่านหนังสือ และสไตล์การเรียนได้อย่างชัดเจน และใช้งานง่าย",
        },
        icon: "Sparkles",
      },
      {
        title: {
          en: "Curated Study Places",
          th: "ระบบพิกัดสถานที่อ่านหนังสือ",
        },
        description: {
          en: "A localized directory grouping student study spaces with toggle filters for WiFi, power outlets, and 24-hour operations.",
          th: "ศูนย์รวมสถานที่สำหรับอ่านหนังสือ ค้นหา และคัดกรองร้านค้า พร้อมแสดงสิ่งอำนวยความสะดวกที่จำเป็น เช่น จุดเสียบปลั๊กไฟ, สตรีม Free WiFi หรือพิกัดเปิดบริการ 24 ชั่วโมง",
        },
        icon: "GraduationCap",
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
    videoUrl: "https://drive.google.com/file/d/1IxOkJpOy2x86zUCFV4xVXX8z7rE9McYQ/view?usp=drive_link",
    hasReport: false,
    hasVideo: true,
    hasDemo: true,
    hasSourceCode: true,
    bullets: {
      en: [
        "Developed the multi-step Onboarding form using a persistent RegistrationContext with LocalStorage data recovery to assure smooth signup flows.",
        "Designed and developed the primary student profile card component showcasing student details, schedules, and study styles clearly.",
        "Built the Recommended Study Places directory featuring curated categories, toggle-ready facility filters, suggestions query, and toggle favorite capabilities.",
        "Implemented a real-time WebSocket chat system leveraging NestJS backend ChatModule supporting pinned messages, edits, reactions, and a 1-minute unsend window.",
        "Designed the dynamic Landing Page featuring customized call-to-action routing based on user registration and profile completion states.",
      ],
      th: [
        "พัฒนาระบบลงข้อมูลผู้ใช้แบบ 6 ขั้นตอน (Onboarding Flow) โดยสร้างระบบเก็บประวัติการกรอกชั่วคราวลง LocalStorage ป้องกันปัญหากรอกข้อมูลสูญหายจากการรีเฟรชหน้าเว็บ",
        "ออกแบบและพัฒนาโครงสร้างคอมโพเนนต์หลักของการ์ดโปรไฟล์ผู้ใช้ จัดระเบียบการจัดวางรายละเอียดรายวิชาและความสนใจบนการ์ดได้อย่างชัดเจน",
        "พัฒนาระบบรวบรวมสถานที่อ่านหนังสือ ที่มีความยืดหยุ่นในการกรองตามประเภทสถานที่ และสิ่งอำนวยความสะดวกทางวิชาการ (WiFi, ปลั๊กไฟ, เปิดบริการ 24 ชั่วโมง)",
        "วางโครงสร้างระบบแชทสนทนาเดี่ยวและแชทกลุ่มผ่าน WebSocket ร่วมกับ NestJS รองรับฟังก์ชันสำคัญ เช่น ปักหมุดข้อความ, แก้ไขคำ, ยกเลิกการส่งภายใน 1 นาที และส่งรีแอคชัน",
        "ออกแบบหน้า Landing Page และระบบปุ่มนำทาง (CTA Routing Logic) เพื่อทำหน้าที่ส่งผู้ใช้ไปยังพอร์ทัลหน้าลงทะเบียนหรือแชทหลักโดยอิงตามสถานะโปรไฟล์และข้อมูลล็อกอิน",
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
          en: "Light/dark themed landing page displaying platform highlights, user guidelines, and dynamic Call-To-Action buttons linked to user registration status.",
          th: "หน้าแรกของเว็บแสดงจุดเด่นและวิธีการใช้งานระบบ พร้อมปุ่มนำทาง (CTA) ที่เปลี่ยนการแสดงผลตามสถานะเข้าสู่ระบบและการสมัครใช้งานจริง",
        },
      },
      {
        url: "/images/projects/studybuddy/2_core.png",
        orientation: "landscape",
        title: {
          en: "Interactive Student Profile Card Component",
          th: "คอมโพเนนต์การ์ดโปรไฟล์หลัก",
        },
        description: {
          en: "Interactive card component displaying peer details, course interested, study preferences, and essential contact details.",
          th: "ส่วนแสดงผลข้อมูลของเพื่อนร่วมเรียนในลักษณะการ์ดโปรไฟล์ จัดวางข้อมูลวิชาที่สนใจ รูปแบบการติว และข้อมูลติดต่อที่จำเป็นอย่างชัดเจน",
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
          en: "Rich-featured direct and group chat client offering pinned messages, edits, unsend timers, reactions, read indicators, and a directory of bookmarked libraries or coffee shops recommended for studying.",
          th: "ระบบห้องแชทเรียลไทม์เดี่ยวและกลุ่มผ่าน WebSocket ที่รองรับการปักหมุด แก้ไข ยกเลิกส่ง ส่งรีแอคชัน และบริการแสดงแนะนำสถานที่นั่งอ่านหนังสือยอดนิยมสำหรับนักศึกษา",
        },
      },
    ],
  },
  nida: {
    id: "nida",
    title: { en: "Nida", th: "Nida" },
    subtitle: {
      en: "E-Commerce Platform for Fashion Brand",
      th: "ระบบอีคอมเมิร์ซสำหรับแบรนด์แฟชั่น",
    },
    year: "2026",
    role: {
      en: "Fullstack Engineer & System Architect",
      th: "Fullstack Engineer & System Architect",
    },
    tagline: {
      en: "An e-commerce platform engineered on a Turborepo monorepo architecture, featuring a Next.js customer storefront, a React back-office admin portal, dual decoupled NestJS APIs, and PostgreSQL with Prisma ORM. Powered by deterministic background job automation via BullMQ and Redis for auto-cancellation of unpaid orders and stock restocking, accompanied by a Dual-Token authentication engine with Refresh Token Rotation and Redis session invalidation.",
      th: "แพลตฟอร์มอีคอมเมิร์ซสินค้าแฟชั่น พัฒนาบนสถาปัตยกรรม Monorepo ด้วย Turborepo ที่รวมหน้าร้าน Next.js, พอร์ทัลแอดมิน React, และระบบหลังบ้าน NestJS 2 บริการ เข้ากับฐานข้อมูล PostgreSQL และ Prisma ORM โดดเด่นด้วยระบบประมวลผลงานเบื้องหลังอัตโนมัติผ่าน BullMQ และ Redis จัดการวงจรชีวิตออเดอร์ (ตัดและคืนสต็อกอัตโนมัติเมื่อไม่ชำระเงิน) พร้อมระบบรักษาความปลอดภัย Dual-Token (JWT + Redis Session) และ Refresh Token Rotation ป้องกันการขโมยสิทธิ์เข้าถึงระบบ",
    },
    themeColor: "amber",
    bannerGradient: "linear-gradient(135deg, #faf7f2 0%, #fef3c7 50%, #fed7aa 100%)",
    problem: {
      en: "E-commerce retail faces severe operational challenges: stock-hoarding by unpaid orders and bots locking up inventory, unreviewed return requests leading to customer dissatisfaction, payment gateway webhook race conditions, and vulnerabilities in administrative access that could compromise customer financial transactions and stock accuracy.",
      th: "ธุรกิจอีคอมเมิร์ซสินค้าแฟชั่นมักประสบปัญหาการกั๊กสต็อกสินค้าจากออเดอร์ที่ค้างชำระ (Stock Hoarding) ทำให้ร้านค้าเสียโอกาสในการขาย, คำขอยกเลิกและคืนสินค้าที่ตกค้างหากไม่มีระบบติดตามอัตโนมัติ, ปัญหา Race Conditions จากการแจ้งเตือนชำระเงินของ Payment Gateway และความเสี่ยงด้านความปลอดภัยในการเข้าถึงระบบหลังบ้านของแอดมิน ซึ่งอาจส่งผลกระทบต่อสต็อกสินค้าและข้อมูลธุรกรรม",
    },
    solution: {
      en: "I engineered a unified Turborepo monorepo with automated background job queues using @nestjs/bullmq and Redis to deterministically govern order timeouts (auto-cancelling unpaid orders and restocking within 15 mins for PromptPay). Additionally, I implemented a Dual-Token authentication architecture featuring Refresh Token Rotation with token reuse detection, one-time token admin invitation onboarding, a pro-rated net price calculation engine for partial refunds, and Omise payment webhook idempotency.",
      th: "ผมได้ออกแบบและพัฒนาระบบบนสถาปัตยกรรม Turborepo Monorepo พร้อมติดตั้งระบบคิวงานเบื้องหลังอัตโนมัติด้วย BullMQ และ Redis เพื่อควบคุมวงจรชีวิตคำสั่งซื้ออย่างแม่นยำ (ยกเลิกออเดอร์ที่ค้างชำระเกินกำหนด 15 นาทีพร้อมคืนสต็อกอัตโนมัติ) และพัฒนาระบบความปลอดภัย Dual-Token Authentication พร้อม Refresh Token Rotation ใน Redis ตรวจจับการขโมย Token, ระบบเชิญแอดมินด้วย One-Time Token, ระบบคำนวณราคาสุทธิถัวเฉลี่ยสำหรับ Partial Refund และระบบยืนยันความถูกต้องของ Webhook ป้องกันการยิงซ้ำ (Idempotency)",
    },
    architecture: {
      en: [
        "Turborepo Monorepo structure managing Next.js Storefront, React Admin Portal, NestJS Store API, NestJS Admin API, and shared Prisma/Zod validation packages.",
        "BullMQ & Redis 7 background worker cluster managing delayed jobs for unpaid order auto-cancellation, 48-hour return review timeouts, and 5-day delivery auto-completion.",
        "Dual-Token Authentication (15-min Access Token + 7-day Refresh Token) with cryptographic Token Family Rotation, replay attack revocation, and Redis-backed session invalidation.",
        "Zero-Knowledge Admin Onboarding via Redis-backed One-Time Setup Tokens (48h TTL) sent through automated email invitations without hardcoded initial passwords.",
        "E-Commerce Core Engines: Pre-Order reservation quotas, Coupon abuse-prevention engine, pro-rated net cost refund ledger, and weight-based shipping matrix.",
        "PostgreSQL 16 relational database with Prisma ORM, implementing comprehensive audit trails (StockMovement and AdminAuditLog) for 100% operational traceability.",
      ],
      th: [
        "สถาปัตยกรรม Turborepo Monorepo แยกโมดูลแอปพลิเคชัน (Next.js Storefront, React Admin Portal, NestJS Store API, NestJS Admin API) ร่วมกับแพ็กเกจฐานข้อมูล Prisma และ Zod Validators",
        "ระบบคิวงานอัตโนมัติด้วย BullMQ และ Redis 7 จัดการ Delayed Jobs: ตัดและคืนสต็อกอัตโนมัติเมื่อไม่ชำระเงินในเวลา, อนุมัติคำขอยกเลิกอัตโนมัติใน 48 ชม., และปิดจ็อบจัดส่งสำเร็จใน 5 วัน",
        "ระบบรักษาความปลอดภัย Dual-Token Authentication ร่วมกับ Refresh Token Rotation ใน Redis พร้อมระบบตรวจจับ Token Replay และสั่งตัด Session ทุกอุปกรณ์เมื่อตรวจพบความผิดปกติ",
        "ระบบเชิญผู้ดูแลระบบใหม่ (Admin Invitation) ด้วย One-Time Token ผ่าน Redis (TTL 48 ชม.) ให้ผู้ใช้ตั้งรหัสผ่านเองอย่างปลอดภัย",
        "ระบบคำนวณราคาสุทธิถัวเฉลี่ยต่อชิ้น (Pro-rated Net Price Calculation) เพื่อการคืนเงินบางส่วน (Partial Refund) และระบบ Ledger บันทึกประวัติคะแนนสะสมและสต็อกสินค้าอย่างแม่นยำ",
        "ฐานข้อมูล PostgreSQL 16 ผ่าน Prisma ORM พร้อมระบบบันทึก AuditLog และ StockMovement ทุกครั้งที่มีการเปลี่ยนแปลงสถานะหรือสต็อก เพื่อความโปร่งใสตรวจสอบได้ 100%",
      ],
    },
    highlights: [
      {
        title: {
          en: "Automated Order Lifecycles",
          th: "ระบบควบคุมวงจรชีวิตออเดอร์อัตโนมัติ",
        },
        description: {
          en: "BullMQ & Redis delayed workers handle auto-cancellation, restocking, and return timeouts deterministically.",
          th: "ประมวลผลงานเบื้องหลังด้วย BullMQ + Redis จัดการคืนสต็อกและยกเลิกออเดอร์ค้างชำระอัตโนมัติโดยไม่ต้องใช้คนกวาดงาน",
        },
        icon: "Clock",
      },
      {
        title: {
          en: "Dual-Token Authentication",
          th: "ระบบความปลอดภัย Dual-Token",
        },
        description: {
          en: "15-min JWTs + 7-day Refresh Tokens with cryptographic rotation, replay attack detection, and instant multi-device revocation.",
          th: "สถาปัตยกรรม Dual-Token พร้อม Refresh Token Rotation ใน Redis และระบบเพิกถอน Token ทันทีเมื่อถูก Replay",
        },
        icon: "Shield",
      },
      {
        title: {
          en: "Turborepo Modular Monorepo",
          th: "สถาปัตยกรรม Monorepo ประสิทธิภาพสูง",
        },
        description: {
          en: "Decoupled Next.js storefront, React admin back-office, and separate NestJS APIs sharing Prisma and Zod packages.",
          th: "รวมหน้าร้าน Next.js, หลังบ้าน React, และ NestJS APIs ไว้ใน Monorepo เดียวกัน พร้อมแชร์ Schema และ Validation",
        },
        icon: "Layers",
      },
      {
        title: {
          en: "Pro-Rated Refund Ledger",
          th: "ระบบคำนวณและบันทึกบัญชีคืนเงิน",
        },
        description: {
          en: "Automated item-level net cost breakdown ensuring precise partial refunds and immutable transaction audit trails.",
          th: "คำนวณส่วนลดเฉลี่ยรายชิ้นเพื่อคืนเงินบางส่วนได้อย่างถูกต้องตามจริง พร้อมบันทึกบัญชีแยกประเภทอย่างแม่นยำ",
        },
        icon: "DollarSign",
      },
    ],
    techStack: [
      {
        name: "Turborepo",
        logo: "custom-turborepo",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "NestJS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Prisma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "BullMQ",
        logo: "custom-bullmq",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "TailwindCSS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    githubUrl: "https://github.com/wiiznu17",
    hasSourceCode: false,
    hasDemo: false,
    bullets: {
      en: [
        "Architected a scalable Turborepo Monorepo unifying Next.js Storefront, React Admin, and dual NestJS APIs.",
        "Implemented BullMQ & Redis delayed queues for automated unpaid order cancellation, restocking, and fulfillment timeouts.",
        "Implemented Dual-Token authentication with Token Family Rotation, replay attack detection, and multi-device revocation.",
        "Developed special features for the admin management system, such as Pre-Order reservation quotas to manage reservations, coupon abuse-prevention, and pro-rated net cost partial refunds.",
      ],
      th: [
        "ออกแบบและพัฒนาหน้าร้านด้วย Next.js, ส่วนของ Admin ด้วย React, และระบบหลังบ้าน NestJS",
        "พัฒนาระบบคิวงาน Delayed Jobs ด้วย BullMQ และ Redis จัดการตัดและคืนสต็อกอัตโนมัติเมื่อออเดอร์ค้างชำระเกินกำหนดเวลา",
        "วางระบบความปลอดภัย Dual-Token (JWT + Redis Session) พร้อม Refresh Token Rotation ตรวจจับการขโมย Token และสั่งตัด Session ทุกอุปกรณ์",
        "พัฒนาฟีเจอร์พิเศษของระบบจัดการร้านค้า เช่น ระบบจองสินค้าล่วงหน้า (Pre-Order) เพื่อจัดการโควตา, ระบบป้องกันการใช้คูปองซ้ำซ้อน, และระบบคำนวณราคาสุทธิเฉลี่ยสำหรับการคืนเงินบางส่วน",
      ],
    },
    images: [
      {
        url: "/images/projects/nida/1_client.png",
        orientation: "landscape",
        title: {
          en: "Next.js Fashion Storefront & Shopping Experience",
          th: "หน้าร้านค้าออนไลน์และระบบสั่งซื้อสินค้า (Storefront)",
        },
        description: {
          en: "High-performance customer storefront featuring responsive product catalog, coupon promotions, pre-order reservation engine, and PromptPay checkout.",
          th: "หน้าร้านค้าออนไลน์พัฒนาด้วย Next.js รองรับการเลือกชมสินค้าแฟชั่น การใช้คูปองส่วนลด การสั่งซื้อแบบ Pre-Order และการชำระเงินผ่านระบบ PromptPay",
        },
      },
      {
        url: "/images/projects/nida/3_admin.png",
        orientation: "landscape",
        title: {
          en: "Back-Office Admin Portal & Operations Hub",
          th: "ระบบจัดการหลังบ้านและควบคุมการปฏิบัติการ (Admin Portal)",
        },
        description: {
          en: "React administrative portal managing real-time inventory tracking, BullMQ automated order lifecycles, pro-rated partial refunds, and audit logging.",
          th: "พอร์ทัลแอดมินสำหรับบริหารจัดการสต็อกสินค้า ติดตามสถานะคิวงาน BullMQ ตรวจสอบประวัติการทำงาน (Audit Logs) และจัดการการคืนเงินอย่างแม่นยำ",
        },
      },
      {
        url: "/images/projects/nida/logo.png",
        orientation: "landscape",
        title: {
          en: "Nida Brand Identity & Architecture Overview",
          th: "ภาพรวมสถาปัตยกรรมและอัตลักษณ์แบรนด์ Nida",
        },
        description: {
          en: "Apparel & Lifestyle E-Commerce Platform built with Next.js, NestJS, Prisma, and BullMQ.",
          th: "แพลตฟอร์มอีคอมเมิร์ซสินค้าแฟชั่น พัฒนาด้วย Next.js, NestJS, Prisma และ BullMQ",
        },
      },
    ],
  },
}
