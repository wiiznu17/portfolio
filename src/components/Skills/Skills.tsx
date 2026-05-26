"use client"

import React from "react"
import styles from "./Skills.module.css"
import TiltCard from "../TiltCard"
import { skillsData } from "@/constants/skills"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"

const renderCategoryIcon = (
  key:
    | "frontend"
    | "backend"
    | "database"
    | "cloud"
) => {
  switch (key) {
    case "frontend":
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 8px 12px rgba(59,130,246,0.3))",
          }}
        >
          <defs>
            <linearGradient
              id="frontGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#93c5fd"
              />
              <stop
                offset="100%"
                stopColor="#2563eb"
              />
            </linearGradient>
            <linearGradient
              id="frontHighlight"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#eff6ff"
              />
              <stop
                offset="100%"
                stopColor="#bfdbfe"
              />
            </linearGradient>
          </defs>
          <rect
            x="10"
            y="25"
            width="80"
            height="55"
            rx="8"
            fill="url(#frontGrad)"
            opacity="0.95"
          />
          <rect
            x="10"
            y="25"
            width="80"
            height="18"
            rx="8"
            fill="url(#frontHighlight)"
            opacity="0.9"
          />
          <circle
            cx="20"
            cy="34"
            r="3"
            fill="#f87171"
          />
          <circle
            cx="30"
            cy="34"
            r="3"
            fill="#facc15"
          />
          <circle
            cx="40"
            cy="34"
            r="3"
            fill="#4ade80"
          />
          <rect
            x="25"
            y="55"
            width="35"
            height="12"
            rx="4"
            fill="#ffffff"
            opacity="0.8"
          />
          <rect
            x="65"
            y="55"
            width="15"
            height="12"
            rx="4"
            fill="#60a5fa"
            opacity="0.8"
          />
        </svg>
      )
    case "backend":
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 8px 12px rgba(147,51,234,0.3))",
          }}
        >
          <defs>
            <linearGradient
              id="backGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#d8b4fe"
              />
              <stop
                offset="100%"
                stopColor="#7e22ce"
              />
            </linearGradient>
            <radialGradient
              id="nodeGlow"
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor="#f3e8ff"
              />
              <stop
                offset="100%"
                stopColor="#a855f7"
              />
            </radialGradient>
          </defs>
          <path
            d="M50 25 L50 75 M25 50 L75 50"
            stroke="#c084fc"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="16"
            fill="url(#backGrad)"
          />
          <circle
            cx="50"
            cy="50"
            r="6"
            fill="#ffffff"
            opacity="0.8"
          />
          <circle
            cx="50"
            cy="20"
            r="12"
            fill="url(#nodeGlow)"
          />
          <circle
            cx="50"
            cy="80"
            r="12"
            fill="url(#nodeGlow)"
          />
          <circle
            cx="20"
            cy="50"
            r="12"
            fill="url(#nodeGlow)"
          />
          <circle
            cx="80"
            cy="50"
            r="12"
            fill="url(#nodeGlow)"
          />
        </svg>
      )
    case "database":
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 8px 12px rgba(245,158,11,0.3))",
          }}
        >
          <defs>
            <linearGradient
              id="dbGrad2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#fde68a"
              />
              <stop
                offset="100%"
                stopColor="#d97706"
              />
            </linearGradient>
          </defs>
          <path
            d="M15 65 V80 C15 90, 85 90, 85 80 V65"
            fill="url(#dbGrad2)"
          />
          <ellipse
            cx="50"
            cy="65"
            rx="35"
            ry="12"
            fill="#fef3c7"
          />
          <path
            d="M15 45 V60 C15 70, 85 70, 85 60 V45"
            fill="url(#dbGrad2)"
          />
          <ellipse
            cx="50"
            cy="45"
            rx="35"
            ry="12"
            fill="#fffbeb"
          />
          <path
            d="M15 25 V40 C15 50, 85 50, 85 40 V25"
            fill="url(#dbGrad2)"
          />
          <ellipse
            cx="50"
            cy="25"
            rx="35"
            ry="12"
            fill="#ffffff"
          />
        </svg>
      )
    case "cloud":
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 8px 12px rgba(6,182,212,0.3))",
          }}
        >
          <defs>
            <linearGradient
              id="toolGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#22d3ee"
              />
              <stop
                offset="100%"
                stopColor="#0891b2"
              />
            </linearGradient>
          </defs>
          <polygon
            points="50,15 85,35 85,75 50,95 15,75 15,35"
            fill="url(#toolGrad)"
          />
          <polygon
            points="50,15 85,35 50,55 15,35"
            fill="#cffafe"
            opacity="0.9"
          />
          <polygon
            points="15,35 50,55 50,95 15,75"
            fill="#06b6d4"
            opacity="0.6"
          />
          <circle
            cx="50"
            cy="55"
            r="10"
            fill="#ffffff"
            opacity="0.95"
            style={{
              filter:
                "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
            }}
          />
        </svg>
      )
    default:
      return null
  }
}

const renderSkillLogo = (
  logo: string,
  name: string,
  size?: string
) => {
  if (logo === "custom-tanstack") {
    return (
      <svg
        className="w-3.5 h-3.5 text-red-500"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{
          width: "0.875rem",
          height: "0.875rem",
        }}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    )
  }
  if (logo === "custom-bullmq") {
    return (
      <svg
        className="w-3.5 h-3.5 text-blue-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{
          width: "0.875rem",
          height: "0.875rem",
        }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    )
  }
  if (logo === "custom-flyway") {
    return (
      <svg
        className="w-3.5 h-3.5 text-emerald-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{
          width: "0.875rem",
          height: "0.875rem",
        }}
      >
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  }
  return (
    <img
      src={logo}
      className={size || "w-3.5 h-3.5"}
      alt={name}
      style={{
        width: size ? "1.25rem" : "0.875rem",
        height: size ? "1.25rem" : "0.875rem",
      }}
    />
  )
}

export default function Skills() {
  const { language, t } = useLanguage()

  const categoryTitles: Record<
    string,
    { en: string; th: string }
  > = {
    Frontend: {
      en: "Frontend",
      th: "ฝั่งหน้าบ้าน (Frontend)",
    },
    "Backend & Languages": {
      en: "Backend & Languages",
      th: "ฝั่งหลังบ้านและภาษาโปรแกรม",
    },
    "Database & ORM": {
      en: "Database & ORM",
      th: "ฐานข้อมูลและ ORM",
    },
    "Cloud & Tools": {
      en: "Cloud & Tools",
      th: "ระบบคลาวด์และเครื่องมือ",
    },
  }

  return (
    <section
      id="skills"
      className={styles.section}
    >
      <div className="section-title-wrap">
        <h2 className="section-title">
          {t("skills_title", COMMON_TRANSLATIONS)}
        </h2>
        <div className="section-title-bar"></div>
      </div>

      <div className={styles.grid}>
        {skillsData.map((category) => (
          <TiltCard
            key={category.title}
            className={`${styles.card} clay-card`}
          >
            <div className={styles.iconContainer}>
              {renderCategoryIcon(
                category.iconKey
              )}
            </div>
            <h3 className={styles.title}>
              {categoryTitles[category.title]?.[
                language
              ] || category.title}
            </h3>
            <div className={styles.badgeGrid}>
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="tech-badge rounded-md"
                >
                  {renderSkillLogo(
                    skill.logo,
                    skill.name,
                    skill.size
                  )}{" "}
                  {skill.name}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
