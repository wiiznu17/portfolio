"use client";

import React from "react";
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

            <div className={styles.mockupCard}>
              <div className="flex justify-between items-center mb-3" style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", gap: "0.375rem" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f87171", display: "inline-block" }}></span>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#facc15", display: "inline-block" }}></span>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    background: "#e0e7ff",
                    fontWeight: 800,
                    color: "#4f46e5",
                    padding: "2px 8px",
                    borderRadius: "9999px",
                  }}
                >
                  Ledger System
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ height: "12px", background: "#e0e7ff", borderRadius: "4px", width: "75%" }}></div>
                <div style={{ height: "10px", background: "#f1f5f9", borderRadius: "4px", width: "50%" }}></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", paddingTop: "0.5rem" }}>
                  <div
                    style={{
                      height: "32px",
                      borderRadius: "8px",
                      background: "#e0e7ff",
                      border: "1px solid #c7d2fe",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "0 6px",
                    }}
                  >
                    <span style={{ fontSize: "7px", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                      Safe Transfer
                    </span>
                  </div>
                  <div
                    style={{
                      height: "32px",
                      borderRadius: "8px",
                      background: "#e0e7ff",
                      border: "1px solid #c7d2fe",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "0 6px",
                    }}
                  >
                    <span style={{ fontSize: "7px", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                      Double Entry
                    </span>
                  </div>
                  <div
                    style={{
                      height: "32px",
                      borderRadius: "8px",
                      background: "#e0e7ff",
                      border: "1px solid #c7d2fe",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "0 6px",
                    }}
                  >
                    <span style={{ fontSize: "7px", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                      KYC Auth
                    </span>
                  </div>
                </div>
              </div>
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
              <a
                href="https://github.com/wiiznu17"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaLink} ${styles.ctaLinkBlue}`}
              >
                <span>View GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1rem", height: "1rem" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </a>
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

            <div className={styles.mockupBrowser}>
              <div className={styles.mockupInner}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>
                  <div style={{ height: "8px", background: "#fde68a", borderRadius: "4px", width: "4rem" }}></div>
                  <div style={{ height: "8px", background: "#e2e8f0", borderRadius: "4px", width: "2.5rem" }}></div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <div
                    style={{
                      height: "40px",
                      background: "#f8fafc",
                      borderRadius: "4px",
                      border: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "8px",
                      fontWeight: 700,
                      color: "#94a3b8",
                    }}
                  >
                    Customer
                  </div>
                  <div
                    style={{
                      height: "40px",
                      background: "#f8fafc",
                      borderRadius: "4px",
                      border: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "8px",
                      fontWeight: 700,
                      color: "#94a3b8",
                    }}
                  >
                    Merchant
                  </div>
                </div>
              </div>
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
              <a
                href="https://github.com/wiiznu17"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaLink} ${styles.ctaLinkAmber}`}
              >
                <span>View GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1rem", height: "1rem" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3: StudyBuddy */}
        <div className={`${styles.card} clay-card ${styles.fullWidthCard}`}>
          <div className={`${styles.banner} ${styles.bannerStudybuddy}`}>
            <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.3 }}>
              <svg viewBox="0 0 100 100" style={{ width: "10rem", height: "10rem" }}>
                <circle cx="20" cy="50" r="4" fill="#6366f1" />
                <circle cx="80" cy="50" r="4" fill="#6366f1" />
                <circle cx="50" cy="20" r="4" fill="#6366f1" />
                <circle cx="50" cy="80" r="4" fill="#6366f1" />
                <path d="M20 50 L50 20 L80 50 L50 80 Z" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="2,2" />
              </svg>
            </div>
            <div
              style={{
                position: "relative",
                padding: "0.375rem 1.5rem",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "9999px",
                border: "1px solid #ffffff",
                boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.1)",
                fontSize: "0.875rem",
                fontWeight: 800,
                color: "#6366f1",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                zIndex: 10,
              }}
            >
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#818cf8" }} className="animate-pulse"></span>
              <span>Matching Platform API</span>
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
              <a
                href="https://github.com/wiiznu17"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaLink} ${styles.ctaLinkIndigo}`}
              >
                <span>View GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1rem", height: "1rem" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
