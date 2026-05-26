"use client"

import React from "react"
import Link from "next/link"
import styles from "./Projects.module.css"
import { projectsData } from "@/constants/projects"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"

const bannerStyles: Record<string, string> = {
  "p-wallet": styles.bannerPwallet,
  digishop: styles.bannerDigishop,
  studybuddy: styles.bannerStudybuddy,
}

const yearBadgeStyles: Record<string, string> = {
  blue: styles.yearBlue,
  amber: styles.yearAmber,
  indigo: styles.yearIndigo,
}

export default function Projects() {
  const { language, t } = useLanguage()
  return (
    <section
      id="projects"
      className={styles.section}
    >
      <div className="section-title-wrap">
        <h2 className="section-title">
          {t("proj_title", COMMON_TRANSLATIONS)}
        </h2>
        <div className="section-title-bar"></div>
      </div>

      <div className={styles.grid}>
        {Object.values(projectsData).map(
          (project) => {
            const isFullWidth =
              project.id === "studybuddy"
            return (
              <div
                key={project.id}
                className={`${styles.card} clay-card ${isFullWidth ? styles.fullWidthCard : ""}`}
              >
                <div
                  className={`${styles.banner} ${bannerStyles[project.id]}`}
                >
                  {project.id === "p-wallet" && (
                    <>
                      <div
                        className={styles.blob}
                        style={{
                          top: "2.5rem",
                          left: "2.5rem",
                          width: "2rem",
                          height: "2rem",
                        }}
                      ></div>
                      <div
                        className={styles.blob}
                        style={{
                          bottom: "3rem",
                          right: "3rem",
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      ></div>
                    </>
                  )}
                  {project.id === "digishop" && (
                    <>
                      <div
                        className={styles.blob}
                        style={{
                          top: "2.5rem",
                          right: "2.5rem",
                          width: "3rem",
                          height: "3rem",
                        }}
                      ></div>
                      <div
                        className={styles.blob}
                        style={{
                          bottom: "2.5rem",
                          left: "2.5rem",
                          width: "2rem",
                          height: "2rem",
                        }}
                      ></div>
                    </>
                  )}

                  <div
                    className={
                      styles.previewContainer
                    }
                  >
                    <img
                      src={project.images[0]?.url}
                      alt={`${project.title[language]} Preview`}
                      className={
                        styles.previewImage
                      }
                    />
                  </div>
                </div>

                <div
                  className={styles.body}
                  style={
                    isFullWidth
                      ? {
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.5rem",
                        }
                      : undefined
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      width: "100%",
                    }}
                  >
                    <div
                      className={
                        styles.cardHeader
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                        }}
                      >
                        <h3
                          className={
                            styles.cardTitle
                          }
                        >
                          {
                            project.title[
                              language
                            ]
                          }
                        </h3>
                        {isFullWidth && (
                          <span
                            className={`${styles.yearBadge} ${yearBadgeStyles[project.themeColor]}`}
                          >
                            {project.year}
                          </span>
                        )}
                      </div>
                      {!isFullWidth && (
                        <span
                          className={`${styles.yearBadge} ${yearBadgeStyles[project.themeColor]}`}
                        >
                          {project.year}
                        </span>
                      )}
                    </div>
                    <p
                      className={styles.subtitle}
                    >
                      {project.subtitle[language]}
                    </p>
                    <div
                      className={styles.bullets}
                    >
                      {project.bullets[
                        language
                      ].map((bullet, idx) => (
                        <div key={idx}>
                          • {bullet}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.divider}>
                    <div
                      className={
                        styles.techBadgeGrid
                      }
                    >
                      {project.techStack.map(
                        (tech) => (
                          <span
                            key={tech.name}
                            className="tech-badge rounded-md"
                          >
                            {tech.logo ===
                            "custom-turborepo" ? (
                              <svg
                                className="w-3.5 h-3.5 text-slate-800"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                style={{
                                  width:
                                    "0.875rem",
                                  height:
                                    "0.875rem",
                                }}
                              >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                              </svg>
                            ) : tech.logo ===
                              "custom-bullmq" ? (
                              <svg
                                className="w-3.5 h-3.5 text-red-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                style={{
                                  width:
                                    "0.875rem",
                                  height:
                                    "0.875rem",
                                }}
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            ) : tech.logo ===
                              "custom-sendgrid" ? (
                              <svg
                                className="w-3.5 h-3.5 text-sky-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                  width: "0.875rem",
                                  height: "0.875rem",
                                }}
                              >
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                              </svg>
                            ) : tech.logo ===
                              "custom-railway" ? (
                              <svg
                                className="w-3.5 h-3.5 text-slate-800"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                  width: "0.875rem",
                                  height: "0.875rem",
                                }}
                              >
                                <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18" />
                                <path d="M12 2v20" />
                                <path d="M4 12h16" />
                                <path d="M4 6h16" />
                                <path d="M4 18h16" />
                              </svg>
                            ) : (
                              <img
                                src={tech.logo}
                                className={
                                  tech.size ||
                                  "w-3.5 h-3.5"
                                }
                                alt={tech.name}
                                style={{
                                  width: tech.size
                                    ? "1rem"
                                    : "0.875rem",
                                  height:
                                    tech.size
                                      ? "1rem"
                                      : "0.875rem",
                                }}
                              />
                            )}{" "}
                            {tech.name}
                          </span>
                        )
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className={`${styles.ctaLink} ${styles.ctaLinkBlue}`}
                    >
                      <span
                        className={
                          styles.stretchedLink
                        }
                      ></span>
                      <span>
                        {language === "th"
                          ? "ดูรายละเอียด"
                          : "View Details"}
                      </span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          width: "1rem",
                          height: "1rem",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}
