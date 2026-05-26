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
      th: "ระบบกระเป๋าเงินจำลองและบัญชีแยกประเภทแบบคู่",
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
    bannerGradient:
      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    problem: {
      en: "Processing concurrent financial transactions without balance discrepancies or system deadlocks is complex. Under high load, concurrent updates to the same account can cause race conditions or circular database locks (deadlocks). Additionally, running heavy compliance tasks like KYC verification and AML checks synchronously inside main request threads severely degrades transaction throughput.",
      th: "การโอนเงินจำนวนมากพร้อมกันมักทำให้เกิดปัญหาข้อมูลไม่ตรงกันและฐานข้อมูลค้าง เนื่องจากระบบแย่งกันเขียนทับยอดเงินในเวลาเดียวกัน นอกจากนี้ การรันโปรเซสที่ใช้เวลาและพลังประมวลผลสูงอย่างการอัปโหลดเอกสารยืนยันตัวตน (KYC) หรือการวิเคราะห์ธุรกรรมต้องสงสัย (AML) ร่วมกับเธรดโอนเงินหลักโดยตรง ทำให้ระบบทำงานได้ช้าและเสี่ยงต่อการล่ม",
    },
    solution: {
      en: "I developed a double-entry ledger platform to ensure mathematical balance consistency (Assets = Liabilities + Equity) using append-only journal entries. To solve database deadlocks under highly concurrent balance updates, I implemented a strict lexicographical lock sorting sequence on wallet UUIDs. I segregated the project into a Java Spring Boot microservice for core transactions and a NestJS gateway for identity and management. Asynchronous background tasks, such as notification dispatches and KYC status change streams, were offloaded to worker nodes using Apache Kafka.",
      th: "ผมเลือกใช้ระบบบัญชีแยกประเภทแบบคู่ (Double-entry ledger) ซึ่งบันทึกธุรกรรมเป็นแบบเพิ่มข้อมูลเท่านั้น (Append-only journal) เพื่อรักษาสมการสมดุลทางบัญชีเสมอ และป้องกันการแก้ไขข้อมูลย้อนหลัง ปัญหา Deadlocks แก้ไขโดยกำหนดกฎให้ระบบเข้าล็อกกระเป๋าเงินตามลำดับตัวอักษรของ UUID ของคู่โอนเสมอ นอกจากนี้ ผมยังแยกส่วนระบบประมวลผลแกนหลักทางการเงิน (Java Spring Boot) ออกจากระบบประตูหน้าบ้านและจัดการข้อมูลทั่วไป (NestJS) โดยย้ายงานประมวลผลหลังบ้าน เช่น คิวส่งอีเมลแจ้งเตือน และคิวประมวลผลสถานะผลลัพธ์การยืนยันตัวตน (KYC Events) ไปรันแบบอะซิงโครนัสผ่าน Apache Kafka เพื่อเพิ่มประสิทธิภาพการตอบสนองของระบบหลัก",
    },
    architecture: {
      en: [
        "Java 21 / Spring Boot 3 financial engine managing append-only double-entry transaction journals to guarantee balanced ledger accounts.",
        "NestJS gateway monorepo using Prisma ORM with segregated PostgreSQL schemas for identity, KYC, and admin tasks.",
        "Strict lexicographical lock sorting sequence on wallet UUIDs to eliminate database deadlocks under high-concurrency transfers.",
        "Asynchronous operations (e.g. notification workers and KYC state event dispatches) offloaded via Apache Kafka stream pipelines.",
      ],
      th: [
        "ระบบหลังบ้านประมวลผลธุรกรรมการเงินด้วย Java 21 และ Spring Boot 3 บันทึกยอดตามหลักบัญชีคู่แบบเพิ่มข้อมูลเท่านั้น (Append-only journal)",
        "NestJS Gateway ในโครงสร้างแบบ Monorepo ร่วมกับ Prisma ORM แยกฐานข้อมูลแต่ละโมดูลอย่างเป็นสัดส่วนเพื่อความง่ายในการสเกล",
        "กฎการล็อกบัญชีโอนเงินตามลำดับตัวอักษรของ UUID (Lexicographical lock sorting) เพื่อตัดโอกาสเกิด Deadlocks ถาวร",
        "ส่งงานประมวลผลรอง เช่น ระบบส่งการแจ้งเตือนและประวัติการเปลี่ยนสถานะ KYC ไปรันแบบอะซิงโครนัสผ่าน Apache Kafka",
      ],
    },
    highlights: [
      {
        title: {
          en: "Zero-Deadlock Concurrency",
          th: "การประมวลผลไร้ล็อกชะงัก (Zero-Deadlock)",
        },
        description: {
          en: "Enforces a strict resource locking order using UUID lexicographical sorting to prevent deadlocks during concurrent transfers.",
          th: "บังคับล็อคบัญชีต้นทางและปลายทางเรียงตามลำดับตัวอักษรของ UUID ป้องกันไม่ให้ระบบโอนเงินขัดแย้งและค้างระหว่างทำธุรกรรมพร้อมกัน",
        },
        icon: "⚡",
      },
      {
        title: {
          en: "Append-Only Ledger",
          th: "ระบบดุลบัญชีแบบคู่และเพิ่มข้อมูลเท่านั้น",
        },
        description: {
          en: "Every transaction writes two matching ledger entries (debit/credit) with no updates or deletions allowed, ensuring a complete audit trail.",
          th: "บันทึกบัญชีแบบคู่และเพิ่มข้อมูลเพิ่มขึ้นเท่านั้นโดยไม่มีการแก้ไขหรือลบ เพื่อรักษาความโปร่งใสและสร้างประวัติที่ตรวจสอบย้อนหลังได้ 100%",
        },
        icon: "🛡️",
      },
      {
        title: {
          en: "Solvency & Liquidity Audits",
          th: "ระบบตรวจสอบเงินกองทุนและเงินสำรองสุทธิ",
        },
        description: {
          en: "Monitors and calculates aggregate balances and reserves automatically to ensure cash flow liquidity matches customer deposits.",
          th: "ระบบรวบรวมยอดเงินสำรองและมอนิเตอร์ยอดในระบบเทียบกับเงินฝากจริงแบบเรียลไทม์ ป้องกันไม่ให้เงินทุนสำรองติดขัด",
        },
        icon: "📊",
      },
      {
        title: {
          en: "AML Compliance Checks",
          th: "ตัวตรวจจับธุรกรรมที่เข้าข่ายฟอกเงิน",
        },
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
    githubUrl:
      "https://github.com/wiiznu17/j-ledger",
    demoUrl: "https://p-wallet.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/p-wallet",
    bullets: {
      en: [
        "Built the core transactional engine with Spring Boot and JPA Hibernate, enforcing double-entry ledger bookkeeping rules.",
        "Resolved transaction deadlocks by implementing a lexicographical UUID lock sorting protocol.",
        "Offloaded background email sends, SMS dispatches, and KYC status change notifications using Apache Kafka worker nodes.",
        "Wrote over 113 comprehensive JUnit and Mockito tests to cover ledger accuracy, concurrent transfers, and validation rules.",
      ],
      th: [
        "สร้างเอนจิ้นหลักประมวลผลธุรกรรมทางการเงินด้วย Spring Boot และ Hibernate ในโครงสร้างสากลของการบันทึกบัญชีแยกประเภทแบบคู่",
        "ขจัดปัญหาฐานข้อมูลค้าง (Deadlocks) อย่างมีประสิทธิภาพด้วยระบบเรียงลำดับคีย์โอนเงินตามตัวอักษรของ UUID",
        "แยกงานส่งอีเมล/SMS และการส่งข้อความแจ้งผลการตรวจสอบสถานะ KYC ไปรันเบื้องหลังแบบอะซิงโครนัสผ่านคิวงาน Apache Kafka",
        "เขียนการทดสอบระบบครอบคลุมกว่า 113 เคสด้วย JUnit และ Mockito เพื่อรับประกันความถูกต้องสมบูรณ์ในการโอนเงินทุกรูปแบบ",
      ],
    },
    images: [
      {
        url: "/images/projects/p-wallet/1_client.jpg",
        orientation: "portrait",
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
        orientation: "landscape",
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
      en: "A modular multi-vendor e-commerce platform built as a Client-Server web app with Next.js 15, Express.js, and Sequelize to showcase secure integrations of Digio's Payment Gateway (DigiPay) APIs, featuring robust refund workflows and admin security flows.",
      th: "เว็บแอปพลิเคชันอีคอมเมิร์ซแบบหลายผู้ขาย พัฒนาบนสถาปัตยกรรม Client-Server เพื่อสาธิตการเชื่อมต่อระบบรับชำระเงิน DigiPay Payment Gateway แบบครบวงจร ทั้งการสแกนชำระเงิน การตรวจสอบธุรกรรม ตลอดจนโฟลว์ย้อนกลับทางการเงินแบบมีสิทธิ์ควบคุม",
    },
    themeColor: "amber",
    bannerGradient:
      "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    problem: {
      en: "Digio needed an interactive multi-vendor demonstration marketplace to help banks and merchant clients visualize the integration and transactional flows of their payment gateway product (DigiPay). The system required high-fidelity vendor portals, secure digital assets, centralized backoffice controls, and reliable financial exception pipelines like refunds and voids without using real money.",
      th: "บริษัท ดิจิโอ ต้องการแพลตฟอร์มอีคอมเมิร์ซต้นแบบเพื่อใช้สาธิตระบบชำระเงิน DigiPay Payment Gateway ให้กับสถาบันการเงินและผู้ประกอบการ โดยระบบจำเป็นต้องรองรับร้านค้าหลายราย สามารถทำรายการชำระเงินจริงในระบบทดสอบ และที่สำคัญต้องมีตัวอย่างการดำเนินงานยกเลิกและคืนเงิน (Void/Refund) ที่ถูกต้อง ปลอดภัย และตรงตามสเปกของ API จริง",
    },
    solution: {
      en: "Developed the merchant and admin portals using Next.js 15, Express.js, and MySQL via Sequelize. Implemented a robust refund and void transactional pipeline directly integrated with DigiPay APIs, dynamic product image management hosted on Azure Blob Storage, asymmetric JWT authentication using RSA Key Pairs, and automated SHA-256 secure tokens sent via SendGrid for administrator invitations and password resets.",
      th: "พัฒนาฟีเจอร์ฝั่งร้านค้าและผู้ดูแลหลังบ้านด้วย Next.js 15 และ Express.js ร่วมกับ Sequelize ORM และ MySQL ในรูปแบบ Client-Server พร้อมสร้างระบบจัดการธุรกรรมขอคืนเงินผ่าน DigiPay API (รองรับ Void สำหรับรายการ APPROVED และ Refund สำหรับรายการ SETTLED) เก็บรูปภาพบน Azure Blob Storage ป้องกันการเข้าถึงด้วยสิทธิ์ผู้ใช้ (RBAC) ร่วมกับ JWT อสมมาตร (RSA Key Pair) และส่งคิวเมลความปลอดภัยสูงผ่าน SendGrid",
    },
    architecture: {
      en: [
        "Client-Server architecture separating frontend portals (Next.js 15) from backend REST APIs (Express.js) and database.",
        "DigiPay API integration managing GET transaction detail checkouts, POST void (un-settled approved), and POST refund (settled captured) flows.",
        "Asymmetric cryptographic JWT authentication using RSA Key Pairs to secure admin and merchant workspaces.",
        "Secure file asset storage (products, store profile) on Azure Blob Storage protected via Shared Access Signature (SAS) URLs.",
        "Time-sensitive SHA-256 secure tokens sent via SendGrid API to handle Admin Onboarding and password resets.",
        "Containerized development using Docker to standardize environments, deployed on Railway (Backend) and Vercel (Frontend).",
      ],
      th: [
        "สถาปัตยกรรมเว็บแบบ Client-Server แยกฝั่งหน้าบ้านด้วย Next.js 15 ฝั่งหลังบ้านด้วย Express.js และใช้ Sequelize ORM บนฐานข้อมูล MySQL",
        "การผสานระบบรับชำระเงิน DigiPay และโฟลว์ธุรกรรมทางการเงินย้อนกลับด้วย Void API (ยกเลิกทันที) และ Refund API (คืนเงินหลังตัดยอด)",
        "ระบบสิทธิ์ความปลอดภัยเข้าถึง API และผู้ใช้งานด้วย JWT แบบกุญแจเข้ารหัสคู่กุญแจอสมมาตร (RSA Key Pair)",
        "ระบบอัปโหลดไฟล์สื่อสิ่งพิมพ์ รูปภาพสินค้า และโปรไฟล์ร้านค้าไปจัดเก็บอย่างปลอดภัยบน Azure Blob Storage",
        "ระบบเชิญผู้ดูแลระบบใหม่ (Admin Invite) และระบบลืมรหัสผ่านด้วย Secure Tokens ในตาราง DB จัดส่งอัตโนมัติผ่าน SendGrid API",
        "จัดทำระบบในรูปแบบ Docker Container และทำการติดตั้งเผยแพร่ผ่าน Vercel (Frontend) และ Railway (Backend)",
      ],
    },
    highlights: [
      {
        title: {
          en: "DigiPay Refund Flow",
          th: "ระบบยกเลิกและคืนเงินผ่าน DigiPay",
        },
        description: {
          en: "Integrates complete financial reversal operations with un-settled Voids and settled Refunds based on DigiPay transaction query APIs.",
          th: "การทำระบบขอคืนเงินแบบแยกโฟลว์ โดยเรียก Void API (สำหรับสถานะ APPROVED) และ Refund API (สำหรับสถานะ SETTLED) ตรงผ่านระบบ DigiPay",
        },
        icon: "💳",
      },
      {
        title: {
          en: "Asymmetric JWT Security",
          th: "ระบบความปลอดภัยกุญแจอสมมาตร",
        },
        description: {
          en: "Secures sensitive admin and seller API endpoints using RSA Key Pairs for JSON Web Tokens (JWT) and RBAC middleware.",
          th: "เสริมแกร่งระบบหลังบ้านด้วย JWT แบบคีย์เข้ารหัสคู่อสมมาตร (RSA Key Pair) ร่วมกับสิทธิ์เข้าถึงตามบทบาท (RBAC) กั้นข้อมูลร้านและแอดมิน",
        },
        icon: "🛡️",
      },
      {
        title: {
          en: "SendGrid Invite Streams",
          th: "คิวเชิญแอดมินด้วย SendGrid & Tokens",
        },
        description: {
          en: "Automates admin invite and reset flows with time-sensitive SHA-256 tokens dispatched via SendGrid API.",
          th: "โฟลว์ความปลอดภัยสูงส่งลิงก์เชิญตั้งรหัสผ่านให้แอดมินคนใหม่ผ่านอีเมล SendGrid ทำงานร่วมกับ Token เข้ารหัส SHA-256 ในตารางฐานข้อมูล",
        },
        icon: "📧",
      },
      {
        title: {
          en: "Dockerized DevOps",
          th: "จำลองระบบจำกัดสภาพแวดล้อมด้วย Docker",
        },
        description: {
          en: "Containerizes Express APIs, MySQL, and Redis using Docker for local parity, deploying seamlessly on Railway and Vercel.",
          th: "จัดสภาพแวดล้อมบริการ Backend, Database, และ Redis ด้วย Docker Container และเชื่อมต่อ CI/CD ติดตั้งบน Railway และ Vercel",
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
        "Designed and built the multi-vendor Merchant portal (inventories, orders) and central Admin portal (RBAC, approvals) using Next.js 15 and Express.js.",
        "Integrated DigiPay Payment Gateway APIs to execute un-settled voids and settled refunds.",
        "Protected administrative APIs and workspaces using asymmetric RSA cryptographic JWT and Role-Based Access Control (RBAC).",
        "Developed a secure administrator onboarding invitation stream utilizing SHA-256 tokens and SendGrid API.",
        "Containerized individual services with Docker and deployed via Railway (Express Backend, MySQL, Redis) and Vercel (Next.js Frontend).",
      ],
      th: [
        "ออกแบบและพัฒนาฟีเจอร์ฝั่งผู้ค้า (Merchant Portal) และฝั่งผู้ดูแลระบบ (Admin Portal) ตามสถาปัตยกรรม Client-Server ด้วย Next.js 15 และ Express.js",
        "ผสานระบบชำระเงิน DigiPay Payment Gateway และออกแบบโฟลว์ขอยกเลิกและคืนเงินผ่าน Void API และ Refund API เต็มรูปแบบ",
        "ปกป้อง API และสิทธิ์การใช้งานแอดมิน/ผู้ขายด้วย JWT แบบอสมมาตร (RSA Key Pair) ร่วมกับสิทธิ์ตามบทบาทหน้าที่ (RBAC)",
        "พัฒนาโฟลว์ความปลอดภัยในการเชิญผู้ดูแลระบบใหม่ตั้งรหัสผ่านด้วย Secure Tokens เข้ารหัส SHA-256 ผ่านอีเมลอัตโนมัติด้วย SendGrid API",
        "จัดสภาพแวดล้อมด้วย Docker Container และดีพลอยใช้งานจริงระดับโปรดักชันผ่าน Railway (Backend, MySQL, Redis) และ Vercel (Frontend Next.js)",
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
          th: "พอร์ทัลร้านค้าที่พัฒนาด้วย Next.js 15 สำหรับเพิ่ม/แก้ไขข้อมูลสินค้า อัปโหลดรูปภาพผ่าน Azure Blob Storage และอัปเดตสถานะการจัดส่งแบบเรียลไทม์",
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
          en: "Robust order pipeline integrated with DigiPay Payment Gateway, resolving partial refunds and approved voids based on settled statuses.",
          th: "ระบบสั่งซื้อที่เชื่อมโยงเข้ากับระบบรับชำระเงิน DigiPay API รองรับการยกเลิกรายการด้วย Void API (สถานะ APPROVED) และการคืนเงินด้วย Refund API (สถานะ SETTLED)",
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
          th: "แดชบอร์ดผู้ดูแลระบบเพื่อดูภาพรวมทั้งหมด อนุมัติร้านค้า/สินค้าใหม่ และส่งอีเมลเชิญผู้ดูแลระบบด้วย Secure Tokens เข้ารหัส SHA-256 ผ่าน SendGrid API",
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
    bannerGradient:
      "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
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
        title: {
          en: "Row Level Security (RLS)",
          th: "ความปลอดภัยระดับแถวข้อมูล (RLS)",
        },
        description: {
          en: "Restricts all database reads and writes to authorized owners, securing student contact lists against unauthorized queries.",
          th: "การันตีการซ่อนปิดบังข้อมูลประวัติระดับคีย์หลักในฐานข้อมูล ปิดช่องโหว่การพยายามสุ่ม ID เข้าตรวจดูประวัติข้ามโปรไฟล์อย่างปลอดภัย",
        },
        icon: "🛡️",
      },
      {
        title: {
          en: "Real-Time Group Chat",
          th: "ระบบห้องแชทเรียลไทม์รวดเร็ว",
        },
        description: {
          en: "Leverages WebSockets to push group message updates, typing indicators, and matchmaking invites instantly.",
          th: "รับส่งสารพูดคุยความคืบหน้าของงานกลุ่มได้ทันใจด้วยการต่อท่อซิงค์ส่งประวัติผ่าน WebSocket ไร้ความล่าช้าสะดุด",
        },
        icon: "💬",
      },
      {
        title: {
          en: "Modular NestJS Core",
          th: "โครงสร้างโมดูลาร์ NestJS สะอาด",
        },
        description: {
          en: "Built using modular architectures, decoupling routing from service entities to streamline unit testing and codebase scaling.",
          th: "ระบบ API หลังบ้านเป็นหมวดหมู่ตามหลัก Modular ใน NestJS บำรุงรักษาง่าย และรองรับการทำ Unit Testing ในอนาคต",
        },
        icon: "🧩",
      },
      {
        title: {
          en: "Academic Directory Filters",
          th: "คัดกรองตามหลักสูตร มข.",
        },
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
    githubUrl:
      "https://github.com/wiiznu17/study-buddy",
    demoUrl: "https://study-buddy.space/",
    videoUrl:
      "https://video.wiiznu.dev/studybuddy",
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
        orientation: "landscape",
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
        orientation: "landscape",
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
        orientation: "landscape",
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
