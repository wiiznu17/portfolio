import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import FloatingShapes from "@/components/FloatingShapes";
import Mascot from "@/components/Mascot";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Detailed project mock database
interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tagline: string;
  themeColor: "blue" | "amber" | "indigo";
  bannerGradient: string;
  mockupType: "wallet" | "monorepo" | "matching";
  problem: string;
  solution: string;
  architecture: string[];
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  techStack: {
    name: string;
    logo: string;
    size?: string;
  }[];
  githubUrl: string;
  demoUrl: string;
  videoUrl: string;
}

const projectsData: Record<string, ProjectDetail> = {
  "p-wallet": {
    id: "p-wallet",
    title: "P-wallet",
    subtitle: "Digital E-Wallet & Financial Ledger System",
    year: "2026",
    role: "Lead Backend Architect & Security Engineer",
    tagline: "Ultra-secure, transactionally consistent digital ledger engine engineered with Spring Boot, NestJS, and Kafka.",
    themeColor: "blue",
    bannerGradient: "linear-gradient(135deg, #cee4e0 0%, #e4eff1 100%)",
    mockupType: "wallet",
    problem: "Financial applications demand 100% transactional consistency. Concurrent balance updates (race conditions) can lead to classic ledger issues like double-spending, data discrepancies, and slow locking speeds under high concurrent user loads.",
    solution: "We designed a robust ledger system based on double-entry bookkeeping rules where every debit has an equal credit. To achieve distributed safety, Redis Redlock was implemented on currency transfer APIs to ensure single-transaction locks. We also decoupled transaction processing from peripheral microservices by applying the Integration Outbox Pattern with Apache Kafka, guaranteeing transactional reliability while ensuring at-least-once message delivery.",
    architecture: [
      "Strict double-entry accounting records keeping clear audit trails and zero balance drift.",
      "Distributed locks with Redis to securely serialize transfer requests under sub-millisecond conditions.",
      "Outbox table capture logic syncing backend state securely to Kafka clusters, removing immediate API write blockages.",
      "AES-256 symmetric encryption securing sensitive user KYC files, verified automatically via high-accuracy computer vision pipelines."
    ],
    highlights: [
      {
        title: "Double-Entry Ledger",
        description: "Enforced strict accounting balance constraints at the database engine tier, guaranteeing assets are mathematically conserved.",
        icon: "💳"
      },
      {
        title: "Distributed Safety",
        description: "Implemented Redis Redlock clustering to guarantee that transaction operations remain serialized and completely immune to race conditions.",
        icon: "🔒"
      },
      {
        title: "Event-Driven Outbox",
        description: "Implemented transactional outbox pattern to seamlessly deliver transactions to Apache Kafka, decoupling the core system from heavy analytical processes.",
        icon: "⚡"
      },
      {
        title: "Secure KYC Pipelines",
        description: "Integrated AWS Rekognition & Google Vision API for scanning physical IDs, secured using envelope encryption (AES-256 + AWS KMS).",
        icon: "🆔"
      }
    ],
    techStack: [
      { name: "Java Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", size: "w-4 h-4" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
    ],
    githubUrl: "https://github.com/wiiznu17",
    demoUrl: "https://p-wallet.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/p-wallet"
  },
  "digishop": {
    id: "digishop",
    title: "DigiShop",
    subtitle: "Multi-vendor E-commerce platform",
    year: "2025",
    role: "Full-Stack Software Engineer & DevOps Lead",
    tagline: "Scalable, high-throughput microservices commerce monorepo powered by Next.js, Node.js, and Redis task queues.",
    themeColor: "amber",
    bannerGradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    mockupType: "monorepo",
    problem: "Coordinating separate applications (Customer store, Merchant dashboard, Admin dashboard) under high user transaction spikes is historically challenging. Storing high-volume data in standard relational databases leads to bottlenecks, invoice generator lag, and slow responses.",
    solution: "We built a modern multi-vendor system utilizing Turborepo to enforce rigid type-safety across independent Next.js clients. The architecture decouples synchronous API traffic from heavy background jobs using BullMQ and Redis, offloading intensive tasks like stock replenishment, real-time push notifications, and payment gateway checks into isolated containerized workers.",
    architecture: [
      "Monorepo design with Turborepo to leverage unified package caching and instant compiler hot-reloading.",
      "Asynchronous queuing with BullMQ to fully isolate long-running invoice routines and payment checkout sweeps.",
      "Highly responsive Sequelize SQL query optimization incorporating indexing on hot database indexes.",
      "Secure JWT auth + Role-Based Access Control (RBAC) to strictly isolate sensitive merchant sales dashboards from customers."
    ],
    highlights: [
      {
        title: "Turborepo Monorepo",
        description: "Shared interfaces and visual themes between Customer, Merchant, and Admin layouts, ensuring 100% code reuse.",
        icon: "📦"
      },
      {
        title: "Redis Background Queues",
        description: "Offloaded critical actions (such as transaction notifications) to independent BullMQ background workers, saving client threads.",
        icon: "⚙️"
      },
      {
        title: "Sequelize Optimizations",
        description: "Engineered database indexing, pagination, and compound keys to support ultra-fast query execution.",
        icon: "💾"
      },
      {
        title: "Azure Cloud Infrastructure",
        description: "Deployed containerized services securely utilizing Docker containers mapped into scalable Azure App Services.",
        icon: "☁️"
      }
    ],
    techStack: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js (Express)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Sequelize ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" }
    ],
    githubUrl: "https://github.com/wiiznu17",
    demoUrl: "https://digishop.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/digishop"
  },
  "studybuddy": {
    id: "studybuddy",
    title: "StudyBuddy",
    subtitle: "Matching platform for study & project recruitment",
    year: "2026",
    role: "Lead Full-Stack Web Developer",
    tagline: "Secure academic networking and real-time team recruitment platform powered by NestJS and Supabase.",
    themeColor: "indigo",
    bannerGradient: "linear-gradient(135deg, #e0e7ff 0%, #eef2ff 100%)",
    mockupType: "matching",
    problem: "Academic spaces are highly collaborative, but students struggle to securely locate team partners with corresponding skills. Standard search applications store private contact records insecurely, allowing unauthorized views or database modifications.",
    solution: "We engineered a matching engine backed by PostgreSQL Row Level Security (RLS) policies within Supabase. Every entry, match event, and text conversation is isolated at the database layer. The platform processes matching metrics via clean, structured NestJS APIs and establishes real-time WebSockets communication for instant messaging notification loops.",
    architecture: [
      "Strict Row Level Security (RLS) ensuring students can only view authorized academic records and matches.",
      "Supabase Realtime channels implementing sub-second socket messages between students.",
      "Clean TypeScript controllers and NestJS validation guards blocking input injection or malformed data packets.",
      "Bespoke physical dashboard permitting students to filter opportunities dynamically based on tags and skills."
    ],
    highlights: [
      {
        title: "Row Level Security (RLS)",
        description: "Ensured complete data separation at the database engine tier, blocking cross-user leaks or unauthorized profile updates.",
        icon: "🛡️"
      },
      {
        title: "Real-Time Matching",
        description: "Leveraged WebSocket channels to feed instant matches and active chats directly to matching dashboards.",
        icon: "💬"
      },
      {
        title: "Structured API Routing",
        description: "Built modular architecture in NestJS featuring strict compiler validation, type checks, and reusable auth middleware.",
        icon: "🧩"
      },
      {
        title: "KKU Academic Focus",
        description: "Customized to align with Khon Kaen University student directories, permitting searches filtered by major, class year, and interest.",
        icon: "🎓"
      }
    ],
    techStack: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" }
    ],
    githubUrl: "https://github.com/wiiznu17",
    demoUrl: "https://studybuddy.wiiznu.dev",
    videoUrl: "https://video.wiiznu.dev/studybuddy"
  }
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const projectKey = resolvedParams.id.toLowerCase();
  const project = projectsData[projectKey];

  if (!project) {
    notFound();
  }

  // Dynamic Theme Styling Config
  const colors = {
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
  }[project.themeColor];

  return (
    <>
      {/* 3D background shapes */}
      <FloatingShapes />

      {/* Interactive Mascot bot companion */}
      <Mascot />

      {/* Navigation */}
      <Navbar />

      <main className="container-max py-8 flex flex-col gap-10 md:gap-14" style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingBottom: "6rem", paddingTop: "2rem" }}>
        
        {/* Navigation / Header Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/#projects" className="clay-btn-secondary" style={{ padding: "0.625rem 1.25rem", borderRadius: "1rem", fontSize: "0.875rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <svg style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Projects</span>
          </Link>

          <span style={{ fontSize: "0.875rem", color: "var(--slate-500)", fontWeight: 700 }}>
            {project.role}
          </span>
        </div>

        {/* Dynamic Project Hero Header */}
        <section className="clay-card" style={{ display: "grid", gridTemplateColumns: "1fr", overflow: "hidden", padding: 0 }}>
          {/* Visual Banner Mockup */}
          <div style={{ background: project.bannerGradient, minHeight: "22rem", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid rgba(255,255,255,0.4)", padding: "2.5rem", overflow: "hidden" }}>
            {/* Floating shapes background for extra claymorphic premium depth */}
            <div className="floating-shape-1" style={{ position: "absolute", top: "10%", left: "10%", width: "3rem", height: "3rem", background: "rgba(255,255,255,0.4)", borderRadius: "50%", filter: "blur(2px)", zIndex: 1 }}></div>
            <div className="floating-shape-2" style={{ position: "absolute", bottom: "10%", right: "10%", width: "4rem", height: "4rem", background: "rgba(255,255,255,0.3)", borderRadius: "50%", filter: "blur(3px)", zIndex: 1 }}></div>
            
            <div style={{
              position: "relative",
              width: "90%",
              maxWidth: "34rem",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              border: "1.5px solid rgba(255, 255, 255, 0.8)",
              background: "rgba(255, 255, 255, 0.6)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 10,
            }}>
              <img
                src={`/images/projects/${project.id}.png`}
                alt={`${project.title} Preview`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Details Content */}
          <div style={{ padding: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--slate-900)" }}>{project.title}</h1>
                  <p style={{ fontSize: "1.125rem", color: "var(--slate-500)", fontWeight: 600 }}>{project.subtitle}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn"
                    style={{
                      background: "#059669",
                      padding: "0.5rem 1.25rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.4), inset -2px -2px 4px rgba(0,0,0,0.15), 0 8px 16px rgba(5,150,105,0.25)"
                    }}
                  >
                    <span>Live Demo</span>
                    <svg style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn"
                    style={{
                      background: "#dc2626",
                      padding: "0.5rem 1.25rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.4), inset -2px -2px 4px rgba(0,0,0,0.15), 0 8px 16px rgba(220,38,38,0.25)"
                    }}
                  >
                    <span>Demo Video</span>
                    <svg style={{ width: "1rem", height: "1rem" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                  <span className="yearBadge" style={colors.badgeStyle}>
                    Released {project.year}
                  </span>
                </div>
              </div>


              <p style={{ fontSize: "1.125rem", color: "var(--slate-800)", fontWeight: 500, lineHeight: 1.6 }}>
                {project.tagline}
              </p>

              {/* Stack badges */}
              <div style={{ borderTop: "1px solid var(--slate-100)", paddingTop: "1.25rem", marginTop: "0.5rem" }}>
                <h3 style={{ fontSize: "0.875rem", textTransform: "uppercase", color: "var(--slate-400)", fontWeight: 800, marginBottom: "0.75rem" }}>Technologies Leveraged</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.techStack.map((tech) => (
                    <span key={tech.name} className="tech-badge rounded-md" style={{ borderRadius: "8px" }}>
                      <img src={tech.logo} className={tech.size || "w-3.5 h-3.5"} alt={tech.name} style={{ width: "0.875rem", height: "0.875rem" }} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown: Problem Statement & Solution */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="md:grid-cols-2">
          {/* Problem Block */}
          <div className="clay-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.75rem" }}>⚠️</span>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)" }}>The Problem & Challenge</h2>
            </div>
            <div style={{ height: "4px", width: "3rem", background: "#f87171", borderRadius: "9999px" }}></div>
            <p style={{ fontSize: "0.975rem", color: "var(--slate-600)", lineHeight: 1.7, fontWeight: 500 }}>
              {project.problem}
            </p>
          </div>

          {/* Solution Block */}
          <div className="clay-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.75rem" }}>💡</span>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)" }}>The Engineering Solution</h2>
            </div>
            <div style={{ height: "4px", width: "3rem", background: "#4ade80", borderRadius: "9999px" }}></div>
            <p style={{ fontSize: "0.975rem", color: "var(--slate-600)", lineHeight: 1.7, fontWeight: 500 }}>
              {project.solution}
            </p>
          </div>
        </section>

        {/* Deep Dive Architecture Details */}
        <section className="clay-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "1.75rem" }}>🏗️</span>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--slate-900)" }}>Technical System Architecture</h2>
          </div>
          <div style={{ height: "4px", width: "4rem", background: "linear-gradient(to right, #3b82f6, #8a2be2)", borderRadius: "9999px" }}></div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", marginTop: "0.5rem" }}>
            {project.architecture.map((item, index) => (
              <div key={index} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(255,255,255,0.4)", padding: "1rem 1.25rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.5)" }}>
                <span style={{ background: "linear-gradient(to right, #3b82f6, #8a2be2)", color: "#ffffff", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, flexShrink: 0 }}>
                  {index + 1}
                </span>
                <p style={{ fontSize: "0.975rem", color: "var(--slate-700)", fontWeight: 600, lineHeight: 1.6 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="section-title-wrap" style={{ marginBottom: "1rem" }}>
            <h2 className="section-title">Key System Highlights</h2>
            <div className="section-title-bar"></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="md:grid-cols-2">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="clay-card" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{highlight.icon}</span>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--slate-900)" }}>{highlight.title}</h3>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--slate-600)", lineHeight: 1.6, fontWeight: 500 }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA Banner */}
        <section className="clay-card" style={{ padding: "2.5rem 2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", background: "rgba(255, 255, 255, 0.8)", border: "2px solid rgba(255, 255, 255, 0.95)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--slate-900)" }}>Want to inspect the codebase or demo?</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--slate-500)", fontWeight: 600, maxWidth: "32rem", margin: "0 auto" }}>
            All systems are fully functional. Explore the source repositories on GitHub, or access the active deployment directly.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="clay-btn" style={{ background: "#059669", padding: "0.75rem 2rem", borderRadius: "1.25rem", fontSize: "0.95rem", color: "#ffffff", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.4), inset -2px -2px 4px rgba(0,0,0,0.15), 0 8px 20px rgba(5,150,105,0.25)" }}>
              <span>Live Demo</span>
              <svg style={{ width: "1.2rem", height: "1.2rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="clay-btn" style={{ background: "#dc2626", padding: "0.75rem 2rem", borderRadius: "1.25rem", fontSize: "0.95rem", color: "#ffffff", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.4), inset -2px -2px 4px rgba(0,0,0,0.15), 0 8px 20px rgba(220,38,38,0.25)" }}>
              <span>Demo Video</span>
              <svg style={{ width: "1.2rem", height: "1.2rem" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="clay-btn-secondary" style={{ padding: "0.75rem 2rem", borderRadius: "1.25rem", fontSize: "0.95rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <span>View Repository</span>
            </a>
            <Link href="/#projects" className="clay-btn-secondary" style={{ padding: "0.75rem 2rem", borderRadius: "1.25rem", fontSize: "0.95rem", fontWeight: 700 }}>
              Browse Other Projects
            </Link>
          </div>
        </section>

        {/* Physical Footer */}
        <Footer />
      </main>

      {/* Styled JSX fallback inline support to match media queries */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .md\\:grid-cols-2 {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 769px) {
            .md\\:grid-cols-2 {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `
      }} />
    </>
  );
}
