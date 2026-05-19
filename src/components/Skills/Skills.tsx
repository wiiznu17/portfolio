"use client";

import React from "react";
import styles from "./Skills.module.css";
import TiltCard from "../TiltCard";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="section-title-wrap">
        <h2 className="section-title">Tech Stack & Skills</h2>
        <div className="section-title-bar"></div>
      </div>

      <div className={styles.grid}>
        {/* Frontend Card */}
        <TiltCard className={`${styles.card} clay-card`}>
          <div className={styles.iconContainer}>
            {/* 3D Browser SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: "drop-shadow(0 8px 12px rgba(59,130,246,0.3))" }}>
              <defs>
                <linearGradient id="frontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#93c5fd" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="frontHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#eff6ff" />
                  <stop offset="100%" stopColor="#bfdbfe" />
                </linearGradient>
              </defs>
              <rect x="10" y="25" width="80" height="55" rx="8" fill="url(#frontGrad)" opacity="0.95" />
              <rect x="10" y="25" width="80" height="18" rx="8" fill="url(#frontHighlight)" opacity="0.9" />
              <circle cx="20" cy="34" r="3" fill="#f87171" />
              <circle cx="30" cy="34" r="3" fill="#facc15" />
              <circle cx="40" cy="34" r="3" fill="#4ade80" />
              <rect x="25" y="55" width="35" height="12" rx="4" fill="#ffffff" opacity="0.8" />
              <rect x="65" y="55" width="15" height="12" rx="4" fill="#60a5fa" opacity="0.8" />
            </svg>
          </div>
          <h3 className={styles.title}>Frontend</h3>
          <div className={styles.badgeGrid}>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-3.5 h-3.5" alt="React" style={{ width: "0.875rem", height: "0.875rem" }} /> React
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-3.5 h-3.5" alt="React Native" style={{ width: "0.875rem", height: "0.875rem" }} /> React Native/Expo
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-3.5 h-3.5" alt="Next.js" style={{ width: "0.875rem", height: "0.875rem" }} /> Next.js
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-3.5 h-3.5" alt="Tailwind" style={{ width: "0.875rem", height: "0.875rem" }} /> Tailwind CSS
            </span>
            <span className="tech-badge rounded-md">
              <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24" style={{ width: "0.875rem", height: "0.875rem" }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg> TanStack Query
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" className="w-3.5 h-3.5" alt="Redux" style={{ width: "0.875rem", height: "0.875rem" }} /> Redux
            </span>
          </div>
        </TiltCard>

        {/* Backend & Languages Card */}
        <TiltCard className={`${styles.card} clay-card`}>
          <div className={styles.iconContainer}>
            {/* 3D Server Node Tree SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: "drop-shadow(0 8px 12px rgba(147,51,234,0.3))" }}>
              <defs>
                <linearGradient id="backGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d8b4fe" />
                  <stop offset="100%" stopColor="#7e22ce" />
                </linearGradient>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f3e8ff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </radialGradient>
              </defs>
              <path d="M50 25 L50 75 M25 50 L75 50" stroke="#c084fc" strokeWidth="6" strokeLinecap="round" />
              <circle cx="50" cy="50" r="16" fill="url(#backGrad)" />
              <circle cx="50" cy="50" r="6" fill="#ffffff" opacity="0.8" />
              <circle cx="50" cy="20" r="12" fill="url(#nodeGlow)" />
              <circle cx="50" cy="80" r="12" fill="url(#nodeGlow)" />
              <circle cx="20" cy="50" r="12" fill="url(#nodeGlow)" />
              <circle cx="80" cy="50" r="12" fill="url(#nodeGlow)" />
            </svg>
          </div>
          <h3 className={styles.title}>Backend & Languages</h3>
          <div className={styles.badgeGrid}>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-3.5 h-3.5" alt="TypeScript" style={{ width: "0.875rem", height: "0.875rem" }} /> TypeScript
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-3.5 h-3.5" alt="Java" style={{ width: "0.875rem", height: "0.875rem" }} /> Java
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-3.5 h-3.5" alt="Python" style={{ width: "0.875rem", height: "0.875rem" }} /> Python (FastAPI)
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-3.5 h-3.5" alt="Node.js" style={{ width: "0.875rem", height: "0.875rem" }} /> Node.js (NestJS, Express)
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" className="w-3.5 h-3.5" alt="Spring" style={{ width: "0.875rem", height: "0.875rem" }} /> Spring Boot
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" className="w-3.5 h-3.5" alt="Kafka" style={{ width: "0.875rem", height: "0.875rem" }} /> Kafka
            </span>
            <span className="tech-badge rounded-md">
              <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "0.875rem", height: "0.875rem" }}><path d="M5 12h14M12 5l7 7-7 7" /></svg> BullMQ
            </span>
          </div>
        </TiltCard>

        {/* Database & ORM Card */}
        <TiltCard className={`${styles.card} clay-card`}>
          <div className={styles.iconContainer}>
            {/* 3D Database Cylinder Stack SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: "drop-shadow(0 8px 12px rgba(245,158,11,0.3))" }}>
              <defs>
                <linearGradient id="dbGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
              <path d="M15 65 V80 C15 90, 85 90, 85 80 V65" fill="url(#dbGrad2)" />
              <ellipse cx="50" cy="65" rx="35" ry="12" fill="#fef3c7" />
              <path d="M15 45 V60 C15 70, 85 70, 85 60 V45" fill="url(#dbGrad2)" />
              <ellipse cx="50" cy="45" rx="35" ry="12" fill="#fffbeb" />
              <path d="M15 25 V40 C15 50, 85 50, 85 40 V25" fill="url(#dbGrad2)" />
              <ellipse cx="50" cy="25" rx="35" ry="12" fill="#ffffff" />
            </svg>
          </div>
          <h3 className={styles.title}>Database & ORM</h3>
          <div className={styles.badgeGrid}>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-3.5 h-3.5" alt="PostgreSQL" style={{ width: "0.875rem", height: "0.875rem" }} /> PostgreSQL
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-3.5 h-3.5" alt="MySQL" style={{ width: "0.875rem", height: "0.875rem" }} /> MySQL
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" className="w-3.5 h-3.5" alt="Redis" style={{ width: "0.875rem", height: "0.875rem" }} /> Redis
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" className="w-3.5 h-3.5" alt="Prisma" style={{ width: "0.875rem", height: "0.875rem" }} /> Prisma
            </span>
            <span className="tech-badge rounded-md">
              <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "0.875rem", height: "0.875rem" }}><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path d="M9 12l2 2 4-4" /></svg> Flyway
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" className="w-3.5 h-3.5" alt="Sequelize" style={{ width: "0.875rem", height: "0.875rem" }} /> Sequelize
            </span>
          </div>
        </TiltCard>

        {/* Cloud & DevOps Card */}
        <TiltCard className={`${styles.card} clay-card`}>
          <div className={styles.iconContainer}>
            {/* 3D Isometric Tool Box/Container SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: "drop-shadow(0 8px 12px rgba(6,182,212,0.3))" }}>
              <defs>
                <linearGradient id="toolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
              </defs>
              <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" fill="url(#toolGrad)" />
              <polygon points="50,15 85,35 50,55 15,35" fill="#cffafe" opacity="0.9" />
              <polygon points="15,35 50,55 50,95 15,75" fill="#06b6d4" opacity="0.6" />
              <circle cx="50" cy="55" r="10" fill="#ffffff" opacity="0.95" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))" }} />
            </svg>
          </div>
          <h3 className={styles.title}>Cloud & Tools</h3>
          <div className={styles.badgeGrid}>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-3.5 h-3.5" alt="Docker" style={{ width: "0.875rem", height: "0.875rem" }} /> Docker
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="w-5 h-5" alt="AWS" style={{ width: "1.25rem", height: "1.25rem" }} /> AWS
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" className="w-3.5 h-3.5" alt="Azure" style={{ width: "0.875rem", height: "0.875rem" }} /> Azure
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" className="w-3.5 h-3.5" alt="Supabase" style={{ width: "0.875rem", height: "0.875rem" }} /> Supabase
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-3.5 h-3.5" alt="Git" style={{ width: "0.875rem", height: "0.875rem" }} /> Git
            </span>
            <span className="tech-badge rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" className="w-3.5 h-3.5" alt="Jest" style={{ width: "0.875rem", height: "0.875rem" }} /> Jest
            </span>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
