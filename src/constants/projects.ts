export interface TechStackItem {
  name: string
  logo: string
  size?: string
}

export interface HighlightItem {
  title: string
  description: string
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

export interface Project {
  id: string
  title: string
  subtitle: string
  year: string
  role: string
  tagline: string
  themeColor: "blue" | "amber" | "indigo"
  bannerGradient: string
  problem: string
  solution: string
  architecture: string[]
  highlights: HighlightItem[]
  techStack: TechStackItem[]
  githubUrl: string
  demoUrl: string
  videoUrl: string
  bullets: string[]
}

export const projectsData: Record<string, Project> = {
  "p-wallet": {
    id: "p-wallet",
    title: "P-wallet",
    subtitle: "Digital E-Wallet & Financial Ledger System",
    year: "2026",
    role: "Lead Backend Architect & Security Engineer",
    tagline:
      "Ultra-secure, transactionally consistent digital ledger engine engineered with Spring Boot, NestJS, and Kafka.",
    themeColor: "blue",
    bannerGradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    problem:
      "Financial applications demand 100% transactional consistency. Concurrent balance updates (race conditions) can lead to classic ledger issues like double-spending, data discrepancies, and slow locking speeds under high concurrent user loads.",
    solution:
      "We designed a robust ledger system based on double-entry bookkeeping rules where every debit has an equal credit. To achieve distributed safety, Redis Redlock was implemented on currency transfer APIs to ensure single-transaction locks. We also decoupled transaction processing from peripheral microservices by applying the Integration Outbox Pattern with Apache Kafka, guaranteeing transactional reliability while ensuring at-least-once message delivery.",
    architecture: [
      "Strict double-entry accounting records keeping clear audit trails and zero balance drift.",
      "Distributed locks with Redis to securely serialize transfer requests under sub-millisecond conditions.",
      "Outbox table capture logic syncing backend state securely to Kafka clusters, removing immediate API write blockages.",
      "AES-256 symmetric encryption securing sensitive user KYC files, verified automatically via high-accuracy computer vision pipelines.",
    ],
    highlights: [
      {
        title: "Double-Entry Ledger",
        description:
          "Enforced strict accounting balance constraints at the database engine tier, guaranteeing assets are mathematically conserved.",
        icon: "💳",
      },
      {
        title: "Distributed Safety",
        description:
          "Implemented Redis Redlock clustering to guarantee that transaction operations remain serialized and completely immune to race conditions.",
        icon: "🔒",
      },
      {
        title: "Event-Driven Outbox",
        description:
          "Implemented transactional outbox pattern to seamlessly deliver transactions to Apache Kafka, decoupling the core system from heavy analytical processes.",
        icon: "⚡",
      },
      {
        title: "Secure KYC Pipelines",
        description:
          "Integrated AWS Rekognition & Google Vision API for scanning physical IDs, secured using envelope encryption (AES-256 + AWS KMS).",
        icon: "🆔",
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
    githubUrl: "https://github.com/wiiznu17",
    demoUrl: "https://p-wallet.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/p-wallet",
    bullets: [
      "Developed a digital e-wallet system with double-entry bookkeeping using Java Spring Boot and NestJS.",
      "Implemented distributed locking, idempotency keys, and Integration Outbox pattern to improve transaction consistency.",
      "Built KYC pipeline using AWS Rekognition & Google Vision API with AES-256 encryption.",
      "Built React Native app and Next.js admin dashboard for monitoring.",
    ],
  },
  digishop: {
    id: "digishop",
    title: "DigiShop",
    subtitle: "Multi-vendor E-commerce platform",
    year: "2025",
    role: "Full-Stack Software Engineer & DevOps Lead",
    tagline:
      "Scalable, high-throughput microservices commerce monorepo powered by Next.js, Node.js, and Redis task queues.",
    themeColor: "amber",
    bannerGradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    problem:
      "Coordinating separate applications (Customer store, Merchant dashboard, Admin dashboard) under high user transaction spikes is historically challenging. Storing high-volume data in standard relational databases leads to bottlenecks, invoice generator lag, and slow responses.",
    solution:
      "We built a modern multi-vendor system utilizing Turborepo to enforce rigid type-safety across independent Next.js clients. The architecture decouples synchronous API traffic from heavy background jobs using BullMQ and Redis, offloading intensive tasks like stock replenishment, real-time push notifications, and payment gateway checks into isolated containerized workers.",
    architecture: [
      "Monorepo design with Turborepo to leverage unified package caching and instant compiler hot-reloading.",
      "Asynchronous queuing with BullMQ to fully isolate long-running invoice routines and payment checkout sweeps.",
      "Highly responsive Sequelize SQL query optimization incorporating indexing on hot database indexes.",
      "Secure JWT auth + Role-Based Access Control (RBAC) to strictly isolate sensitive merchant sales dashboards from customers.",
    ],
    highlights: [
      {
        title: "Turborepo Monorepo",
        description:
          "Shared interfaces and visual themes between Customer, Merchant, and Admin layouts, ensuring 100% code reuse.",
        icon: "📦",
      },
      {
        title: "Redis Background Queues",
        description:
          "Offloaded critical actions (such as transaction notifications) to independent BullMQ background workers, saving client threads.",
        icon: "⚙️",
      },
      {
        title: "Sequelize Optimizations",
        description:
          "Engineered database indexing, pagination, and compound keys to support ultra-fast query execution.",
        icon: "💾",
      },
      {
        title: "Azure Cloud Infrastructure",
        description:
          "Deployed containerized services securely utilizing Docker containers mapped into scalable Azure App Services.",
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
      { name: "Turborepo", logo: "custom-turborepo" }, // Special logo flag handled by component
      { name: "BullMQ", logo: "custom-bullmq" }, // Special logo flag handled by component
      {
        name: "Azure",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      },
    ],
    githubUrl: "https://github.com/wiiznu17",
    demoUrl: "https://digishop.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/digishop",
    bullets: [
      "Developed a multi-vendor e-commerce system using Microservices and Turborepo monorepo for scalability.",
      "Developed three distinct Next.js web applications (Customer, Merchant, Admin) supported by synchronized backends.",
      "Implemented Background Workers via BullMQ for asynchronous tasks like payment timeouts and order updates.",
    ],
  },
  studybuddy: {
    id: "studybuddy",
    title: "StudyBuddy",
    subtitle: "Matching platform for study & project recruitment",
    year: "2026",
    role: "Lead Full-Stack Web Developer",
    tagline:
      "Secure academic networking and real-time team recruitment platform powered by NestJS and Supabase.",
    themeColor: "indigo",
    bannerGradient: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
    problem:
      "Academic spaces are highly collaborative, but students struggle to securely locate team partners with corresponding skills. Standard search applications store private contact records insecurely, allowing unauthorized views or database modifications.",
    solution:
      "We engineered a matching engine backed by PostgreSQL Row Level Security (RLS) policies within Supabase. Every entry, match event, and text conversation is isolated at the database layer. The platform processes matching metrics via clean, structured NestJS APIs and establishes real-time WebSockets communication for instant messaging notification loops.",
    architecture: [
      "Strict Row Level Security (RLS) ensuring students can only view authorized academic records and matches.",
      "Supabase Realtime channels implementing sub-second socket messages between students.",
      "Clean TypeScript controllers and NestJS validation guards blocking input injection or malformed data packets.",
      "Bespoke physical dashboard permitting students to filter opportunities dynamically based on tags and skills.",
    ],
    highlights: [
      {
        title: "Row Level Security (RLS)",
        description:
          "Ensured complete data separation at the database engine tier, blocking cross-user leaks or unauthorized profile updates.",
        icon: "🛡️",
      },
      {
        title: "Real-Time Matching",
        description:
          "Leveraged WebSocket channels to feed instant matches and active chats directly to matching dashboards.",
        icon: "💬",
      },
      {
        title: "Structured API Routing",
        description:
          "Built modular architecture in NestJS featuring strict compiler validation, type checks, and reusable auth middleware.",
        icon: "🧩",
      },
      {
        title: "KKU Academic Focus",
        description:
          "Customized to align with Khon Kaen University student directories, permitting searches filtered by major, class year, and interest.",
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
    githubUrl: "https://github.com/wiiznu17",
    demoUrl: "https://studybuddy.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/studybuddy",
    bullets: [
      "Developed a social platform to match students with shared academic interests for study groups.",
      "Focused on frontend development and backend API refinement for a seamless UX.",
      "Managed database persistence and implemented Row Level Security (RLS) for student data using PostgreSQL via Supabase.",
    ],
  },
}
