"use client";

import React from "react";
import Link from "next/link";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-title-wrap">
        <h2 className="section-title">Projects</h2>
        <div className="section-title-bar"></div>
      </div>

      <div className={styles.grid}>
        {/* Project 1: P-wallet */}
        <div className={`${styles.card} clay-card`}>
          <div className={`${styles.banner} ${styles.bannerPwallet}`}>
            <div
              className={styles.blob}
              style={{ top: "2.5rem", left: "2.5rem", width: "2rem", height: "2rem" }}
            ></div>
            <div
              className={styles.blob}
              style={{ bottom: "3rem", right: "3rem", width: "2.5rem", height: "2.5rem" }}
            ></div>

            <div className={styles.previewContainer}>
              <img
                src="/images/projects/p-wallet.png"
                alt="P-wallet Preview"
                className={styles.previewImage}
              />
            </div>
          </div>

          <div className={styles.body}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>P-wallet</h3>
                <span className={`${styles.yearBadge} ${styles.yearBlue}`}>2026</span>
              </div>
              <p className={styles.subtitle}>Digital E-Wallet & Financial Ledger System</p>
              <div className={styles.bullets}>
                <div>• Developed a digital e-wallet system with double-entry bookkeeping using Java Spring Boot and NestJS.</div>
                <div>• Implemented distributed locking, idempotency keys, and Integration Outbox pattern to improve transaction consistency.</div>
                <div>• Built KYC pipeline using AWS Rekognition & Google Vision API with AES-256 encryption.</div>
                <div>• Built React Native app and Next.js admin dashboard for monitoring.</div>
              </div>
            </div>

            <div className={styles.divider}>
              <div className={styles.techBadgeGrid}>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" className="w-3.5 h-3.5" alt="Spring" style={{ width: "0.875rem", height: "0.875rem" }} /> Java Spring Boot
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" className="w-3.5 h-3.5" alt="NestJS" style={{ width: "0.875rem", height: "0.875rem" }} /> NestJS
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-3.5 h-3.5" alt="React Native" style={{ width: "0.875rem", height: "0.875rem" }} /> React Native
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-3.5 h-3.5" alt="Next.js" style={{ width: "0.875rem", height: "0.875rem" }} /> Next.js
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-3.5 h-3.5" alt="PostgreSQL" style={{ width: "0.875rem", height: "0.875rem" }} /> PostgreSQL
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" className="w-3.5 h-3.5" alt="Kafka" style={{ width: "0.875rem", height: "0.875rem" }} /> Kafka
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="w-4 h-4" alt="AWS" style={{ width: "1rem", height: "1rem" }} /> AWS
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-3.5 h-3.5" alt="Docker" style={{ width: "0.875rem", height: "0.875rem" }} /> Docker
                </span>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                <Link
                  href="/projects/p-wallet"
                  className={`${styles.ctaLink} ${styles.ctaLinkBlue}`}
                >
                  <span className={styles.stretchedLink}></span>
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1rem", height: "1rem" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://p-wallet.wiiznu.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoLink}
                >
                  <span>Live Demo</span>
                </a>
                <a
                  href="https://video.wiiznu.dev/p-wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.videoLink}
                >
                  <span>Demo Video</span>
                </a>
                <a
                  href="https://github.com/wiiznu17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: DigiShop */}
        <div className={`${styles.card} clay-card`}>
          <div className={`${styles.banner} ${styles.bannerDigishop}`}>
            <div
              className={styles.blob}
              style={{ top: "2.5rem", right: "2.5rem", width: "3rem", height: "3rem" }}
            ></div>
            <div
              className={styles.blob}
              style={{ bottom: "2.5rem", left: "2.5rem", width: "2rem", height: "2rem" }}
            ></div>

            <div className={styles.previewContainer}>
              <img
                src="/images/projects/digishop.png"
                alt="DigiShop Preview"
                className={styles.previewImage}
              />
            </div>
          </div>

          <div className={styles.body}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>DigiShop</h3>
                <span className={`${styles.yearBadge} ${styles.yearAmber}`}>2025</span>
              </div>
              <p className={styles.subtitle}>Multi-vendor E-commerce platform</p>
              <div className={styles.bullets}>
                <div>• Developed a multi-vendor e-commerce system using Microservices and Turborepo monorepo for scalability.</div>
                <div>• Developed three distinct Next.js web applications (Customer, Merchant, Admin) supported by synchronized backends.</div>
                <div>• Implemented Background Workers via BullMQ for asynchronous tasks like payment timeouts and order updates.</div>
              </div>
            </div>

            <div className={styles.divider}>
              <div className={styles.techBadgeGrid}>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-3.5 h-3.5" alt="Next.js" style={{ width: "0.875rem", height: "0.875rem" }} /> Next.js
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-3.5 h-3.5" alt="Node.js" style={{ width: "0.875rem", height: "0.875rem" }} /> Node.js (Express)
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" className="w-3.5 h-3.5" alt="Sequelize" style={{ width: "0.875rem", height: "0.875rem" }} /> Sequelize ORM
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-3.5 h-3.5" alt="MySQL" style={{ width: "0.875rem", height: "0.875rem" }} /> MySQL
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" className="w-3.5 h-3.5" alt="Redis" style={{ width: "0.875rem", height: "0.875rem" }} /> Redis
                </span>
                <span className="tech-badge rounded-md">
                  <svg className="w-3.5 h-3.5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "0.875rem", height: "0.875rem" }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg> Turborepo
                </span>
                <span className="tech-badge rounded-md">
                  <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "0.875rem", height: "0.875rem" }}><path d="M5 12h14M12 5l7 7-7 7" /></svg> BullMQ
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" className="w-3.5 h-3.5" alt="Azure" style={{ width: "0.875rem", height: "0.875rem" }} /> Azure
                </span>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                <Link
                  href="/projects/digishop"
                  className={`${styles.ctaLink} ${styles.ctaLinkAmber}`}
                >
                  <span className={styles.stretchedLink}></span>
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1rem", height: "1rem" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://digishop.wiiznu.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoLink}
                >
                  <span>Live Demo</span>
                </a>
                <a
                  href="https://video.wiiznu.dev/digishop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.videoLink}
                >
                  <span>Demo Video</span>
                </a>
                <a
                  href="https://github.com/wiiznu17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: StudyBuddy */}
        <div className={`${styles.card} clay-card ${styles.fullWidthCard}`}>
          <div className={`${styles.banner} ${styles.bannerStudybuddy}`}>
            <div className={styles.previewContainer}>
              <img
                src="/images/projects/studybuddy.png"
                alt="StudyBuddy Preview"
                className={styles.previewImage}
              />
            </div>
          </div>

          <div className={styles.body} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%" }}>
              <div className={styles.cardHeader}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <h3 className={styles.cardTitle}>StudyBuddy</h3>
                  <span className={`${styles.yearBadge} ${styles.yearIndigo}`}>2026</span>
                </div>
              </div>
              <p className={styles.subtitle}>Matching platform for study & project recruitment</p>
              <div className={styles.bullets}>
                <div>• Developed a social platform to match students with shared academic interests for study groups.</div>
                <div>• Focused on frontend development and backend API refinement for a seamless UX.</div>
                <div>• Managed database persistence and implemented Row Level Security (RLS) for student data using PostgreSQL via Supabase.</div>
              </div>
            </div>

            <div className={styles.divider} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
              <div className={styles.techBadgeGrid} style={{ flex: 1 }}>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-3.5 h-3.5" alt="Next.js" style={{ width: "0.875rem", height: "0.875rem" }} /> Next.js
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" className="w-3.5 h-3.5" alt="NestJS" style={{ width: "0.875rem", height: "0.875rem" }} /> NestJS
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-3.5 h-3.5" alt="TypeScript" style={{ width: "0.875rem", height: "0.875rem" }} /> TypeScript
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" className="w-3.5 h-3.5" alt="Supabase" style={{ width: "0.875rem", height: "0.875rem" }} /> Supabase
                </span>
                <span className="tech-badge rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-3.5 h-3.5" alt="PostgreSQL" style={{ width: "0.875rem", height: "0.875rem" }} /> PostgreSQL
                </span>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                <Link
                  href="/projects/studybuddy"
                  className={`${styles.ctaLink} ${styles.ctaLinkIndigo}`}
                >
                  <span className={styles.stretchedLink}></span>
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1rem", height: "1rem" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://studybuddy.wiiznu.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoLink}
                >
                  <span>Live Demo</span>
                </a>
                <a
                  href="https://video.wiiznu.dev/studybuddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.videoLink}
                >
                  <span>Demo Video</span>
                </a>
                <a
                  href="https://github.com/wiiznu17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
