"use client"

import React, { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import FloatingShapes from "@/components/FloatingShapes"
import Mascot from "@/components/Mascot"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel"

import { projectsData, PROJECT_THEMES } from "@/constants/projects"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const projectKey = resolvedParams.id.toLowerCase()
  const project = projectsData[projectKey]

  const { language, t } = useLanguage()

  if (!project) {
    notFound()
  }

  // Dynamic Theme Styling Config
  const colors = PROJECT_THEMES[project.themeColor]

  const mappedImages = project.images.map((img) => ({
    url: img.url,
    title: img.title[language],
    description: img.description[language],
  }))

  return (
    <>
      {/* 3D background shapes */}
      <FloatingShapes />

      {/* Interactive Mascot bot companion */}
      <Mascot />

      {/* Navigation */}
      <Navbar />

      <main
        className="container-max py-8 flex flex-col gap-10 md:gap-14 detail-main"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          paddingBottom: "6rem",
          paddingTop: "2rem",
        }}
      >
        {/* Navigation / Header Buttons */}
        <div className="detail-header-row">
          <Link
            href="/#projects"
            className="clay-btn-secondary"
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "1rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg
              style={{ width: "1rem", height: "1rem" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>{t("proj_back_to_projects", COMMON_TRANSLATIONS)}</span>
          </Link>

          <span style={{ fontSize: "0.875rem", color: "var(--slate-500)", fontWeight: 700 }}>
            {project.role[language]}
          </span>
        </div>

        {/* Dynamic Project Hero Header */}
        <section
          className="clay-card"
          style={{ display: "grid", gridTemplateColumns: "1fr", overflow: "hidden", padding: 0 }}
        >
          {/* Visual Banner Mockup with Interactive Image Carousel */}
          <div
            className="detail-banner-area"
            style={{
              background: project.bannerGradient,
              position: "relative",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              overflow: "hidden",
            }}
          >
            {/* Floating shapes background for extra claymorphic premium depth */}
            <div
              className="floating-shape-1"
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                width: "3.5rem",
                height: "3.5rem",
                background: "rgba(255,255,255,0.4)",
                borderRadius: "50%",
                filter: "blur(2px)",
                zIndex: 1,
              }}
            ></div>
            <div
              className="floating-shape-2"
              style={{
                position: "absolute",
                bottom: "10%",
                right: "5%",
                width: "4.5rem",
                height: "4.5rem",
                background: "rgba(255,255,255,0.3)",
                borderRadius: "50%",
                filter: "blur(3px)",
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "relative",
                width: "95%",
                maxWidth: "68rem",
                zIndex: 10,
              }}
            >
              <ProjectCarousel images={mappedImages} />
            </div>
          </div>

          {/* Details Content */}
          <div className="detail-body-area">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                className="detail-header-row detail-title-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--slate-900)" }}>
                    {project.title[language]}
                  </h1>
                  <p style={{ fontSize: "1.125rem", color: "var(--slate-500)", fontWeight: 600 }}>
                    {project.subtitle[language]}
                  </p>
                </div>
                <div
                  className="detail-btn-group"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn-emerald"
                    style={{
                      padding: "0.5rem 1.25rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    <span>{t("proj_btn_demo", COMMON_TRANSLATIONS)}</span>
                    <svg
                      style={{ width: "1rem", height: "1rem" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn-rose"
                    style={{
                      padding: "0.5rem 1.25rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    <span>{t("proj_btn_video", COMMON_TRANSLATIONS)}</span>
                    <svg
                      style={{ width: "1rem", height: "1rem" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                  <span className="yearBadge" style={colors.badgeStyle}>
                    {t("proj_released", COMMON_TRANSLATIONS)} {project.year}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--slate-800)",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {project.tagline[language]}
              </p>

              {/* Stack badges */}
              <div
                style={{
                  borderTop: "1px solid var(--slate-100)",
                  paddingTop: "1.25rem",
                  marginTop: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    color: "var(--slate-400)",
                    fontWeight: 800,
                    marginBottom: "0.75rem",
                  }}
                >
                  {t("proj_leveraged", COMMON_TRANSLATIONS)}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="tech-badge rounded-md"
                      style={{ borderRadius: "8px" }}
                    >
                      <img
                        src={tech.logo}
                        className={tech.size || "w-3.5 h-3.5"}
                        alt={tech.name}
                        style={{ width: "0.875rem", height: "0.875rem" }}
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown: Problem Statement & Solution */}
        <section
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}
          className="md:grid-cols-2"
        >
          {/* Problem Block */}
          <div
            className="clay-card"
            style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.75rem" }}>⚠️</span>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)" }}>
                {t("proj_problem", COMMON_TRANSLATIONS)}
              </h2>
            </div>
            <div
              style={{
                height: "4px",
                width: "3rem",
                background: "#f87171",
                borderRadius: "9999px",
              }}
            ></div>
            <p
              style={{
                fontSize: "0.975rem",
                color: "var(--slate-600)",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              {project.problem[language]}
            </p>
          </div>

          {/* Solution Block */}
          <div
            className="clay-card"
            style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.75rem" }}>💡</span>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)" }}>
                {t("proj_solution", COMMON_TRANSLATIONS)}
              </h2>
            </div>
            <div
              style={{
                height: "4px",
                width: "3rem",
                background: "#4ade80",
                borderRadius: "9999px",
              }}
            ></div>
            <p
              style={{
                fontSize: "0.975rem",
                color: "var(--slate-600)",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              {project.solution[language]}
            </p>
          </div>
        </section>

        {/* Deep Dive Architecture Details */}
        <section
          className="clay-card"
          style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "1.75rem" }}>🏗️</span>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--slate-900)" }}>
              {t("proj_architecture", COMMON_TRANSLATIONS)}
            </h2>
          </div>
          <div
            style={{
              height: "4px",
              width: "4rem",
              background: "linear-gradient(to right, #3b82f6, #8a2be2)",
              borderRadius: "9999px",
            }}
          ></div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.25rem",
              marginTop: "0.5rem",
            }}
          >
            {project.architecture[language].map((item, index) => (
              <div
                key={index}
                className="detail-architecture-item"
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  background: "rgba(255,255,255,0.4)",
                  padding: "1rem 1.25rem",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,0.5)",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(to right, #3b82f6, #8a2be2)",
                    color: "#ffffff",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </span>
                <p
                  style={{
                    fontSize: "0.975rem",
                    color: "var(--slate-700)",
                    fontWeight: 600,
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="section-title-wrap" style={{ marginBottom: "1rem" }}>
            <h2 className="section-title">{t("proj_highlights", COMMON_TRANSLATIONS)}</h2>
            <div className="section-title-bar"></div>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
            className="md:grid-cols-2"
          >
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="clay-card"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{highlight.icon}</span>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--slate-900)" }}>
                    {highlight.title[language]}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--slate-600)",
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  {highlight.description[language]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA Banner */}
        <section
          className="clay-card detail-footer-cta"
          style={{
            padding: "2.5rem 2rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            background: "rgba(255, 255, 255, 0.8)",
            border: "2px solid rgba(255, 255, 255, 0.95)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--slate-900)" }}>
            {t("proj_footer_cta", COMMON_TRANSLATIONS)}
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--slate-500)",
              fontWeight: 600,
              maxWidth: "32rem",
              margin: "0 auto",
            }}
          >
            {t("proj_footer_desc", COMMON_TRANSLATIONS)}
          </p>
          <div
            className="detail-footer-cta-buttons"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn-emerald"
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "1.25rem",
                fontSize: "0.95rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>{t("proj_btn_demo", COMMON_TRANSLATIONS)}</span>
              <svg
                style={{ width: "1.2rem", height: "1.2rem" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn-rose"
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "1.25rem",
                fontSize: "0.95rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>{t("proj_btn_video", COMMON_TRANSLATIONS)}</span>
              <svg
                style={{ width: "1.2rem", height: "1.2rem" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn-secondary"
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "1.25rem",
                fontSize: "0.95rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>{t("proj_btn_view_repo", COMMON_TRANSLATIONS)}</span>
            </a>
            <Link
              href="/#projects"
              className="clay-btn-secondary"
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "1.25rem",
                fontSize: "0.95rem",
                fontWeight: 700,
              }}
            >
              {t("proj_btn_other", COMMON_TRANSLATIONS)}
            </Link>
          </div>
        </section>

        {/* Physical Footer */}
        <Footer />
      </main>

      {/* Styled JSX fallback inline support to match media queries */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .detail-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            width: 100%;
          }
          .detail-banner-area {
            min-height: 32rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 3rem 1rem;
            overflow: hidden;
          }
          .detail-body-area {
            padding: 2.5rem 3rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            box-sizing: border-box;
          }

          @media (max-width: 768px) {
            .md\\:grid-cols-2 {
              grid-template-columns: 1fr !important;
            }
            .detail-main {
              gap: 1.75rem !important;
              padding-top: 1rem !important;
              padding-bottom: 4rem !important;
            }
            .detail-header-row {
              flex-direction: column;
              align-items: flex-start !important;
              gap: 0.75rem;
            }
            .detail-banner-area {
              min-height: 20rem !important;
              padding: 1.5rem 0.5rem !important;
            }
            .detail-body-area {
              padding: 1.25rem !important;
            }
            .detail-title-row {
              flex-direction: column;
              align-items: flex-start !important;
              gap: 1rem !important;
            }
            .detail-btn-group {
              width: 100% !important;
              justify-content: flex-start !important;
              gap: 0.75rem !important;
            }
            .detail-btn-group a, .detail-btn-group span {
              flex-grow: 1;
              text-align: center;
              justify-content: center;
            }
            .detail-architecture-item {
              padding: 0.75rem 1rem !important;
              gap: 0.75rem !important;
            }
            .detail-footer-cta {
              padding: 2rem 1.25rem !important;
              gap: 1rem !important;
            }
            .detail-footer-cta-buttons {
              width: 100%;
              flex-direction: column !important;
              gap: 0.75rem !important;
            }
            .detail-footer-cta-buttons a, .detail-footer-cta-buttons link {
              width: 100% !important;
              text-align: center;
              justify-content: center;
              margin: 0 !important;
            }
          }
          @media (min-width: 769px) {
            .md\\:grid-cols-2 {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `,
        }}
      />
    </>
  )
}
