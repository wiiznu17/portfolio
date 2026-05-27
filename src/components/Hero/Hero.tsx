"use client"

import React from "react"
import styles from "./Hero.module.css"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="about"
      className={styles.section}
    >
      {/* Avatar Container with glowing backdrop ring */}
      <div className={styles.avatarContainer}>
        {/* 3D Shadow Base under Avatar */}
        <div
          className={styles.avatarShadow}
        ></div>
        <div className={styles.avatarBorder}>
          <div className={styles.avatarInner}>
            {/* High-fidelity 3D-styled Avatar Artwork SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-28 h-28 mt-4 md:w-32 md:h-32"
              style={{
                width: "8rem",
                height: "8rem",
              }}
            >
              <defs>
                <linearGradient
                  id="botBody"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#eff6ff"
                  />
                  <stop
                    offset="100%"
                    stopColor="#93c5fd"
                  />
                </linearGradient>
                <linearGradient
                  id="visorGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#1e293b"
                  />
                  <stop
                    offset="100%"
                    stopColor="#0f172a"
                  />
                </linearGradient>
                <linearGradient
                  id="eyeGlow"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#38bdf8"
                  />
                  <stop
                    offset="50%"
                    stopColor="#bae6fd"
                  />
                  <stop
                    offset="100%"
                    stopColor="#38bdf8"
                  />
                </linearGradient>
              </defs>

              {/* Antenna */}
              <line
                x1="50"
                y1="20"
                x2="50"
                y2="10"
                stroke="#94a3b8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle
                cx="50"
                cy="8"
                r="4"
                fill="#fbbf24"
              />

              {/* Main Body/Head */}
              <rect
                x="25"
                y="20"
                width="50"
                height="45"
                rx="12"
                fill="url(#botBody)"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <rect
                x="25"
                y="20"
                width="50"
                height="45"
                rx="12"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="1"
                transform="translate(1, 1)"
                opacity="0.5"
              />

              {/* Visor */}
              <rect
                x="30"
                y="32"
                width="40"
                height="18"
                rx="6"
                fill="url(#visorGrad)"
                stroke="#334155"
                strokeWidth="2"
              />
              <path
                d="M 32 35 Q 40 33 48 35"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.3"
                strokeLinecap="round"
              />

              {/* Glowing Eyes */}
              <rect
                x="36"
                y="38"
                width="28"
                height="6"
                rx="3"
                fill="url(#eyeGlow)"
                style={{
                  filter:
                    "drop-shadow(0 0 3px #38bdf8)",
                }}
              />

              {/* Feet */}
              <rect
                x="32"
                y="65"
                width="12"
                height="12"
                rx="4"
                fill="#64748b"
              />
              <rect
                x="56"
                y="65"
                width="12"
                height="12"
                rx="4"
                fill="#64748b"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Headline Details */}
      <div className={styles.headlineWrap}>
        <h1 className={styles.title}>
          {/* Decorative Sparkle Top Left */}
          <svg
            viewBox="0 0 24 24"
            className={`${styles.sparkleLeft} floating-shape-3`}
          >
            <path
              fill="currentColor"
              d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5Z"
            />
          </svg>
          {t("hero_title", COMMON_TRANSLATIONS)}
          {/* Decorative Sparkle Bottom Right */}
          <svg
            viewBox="0 0 24 24"
            className={`${styles.sparkleRight} floating-shape-1`}
          >
            <path
              fill="currentColor"
              d="M12,2L13.5,8.5L20,10L13.5,11.5L12,18L10.5,11.5L4,10L10.5,8.5Z"
            />
          </svg>
        </h1>

        <h2 className={styles.subtitle}>
          {t(
            "hero_subtitle",
            COMMON_TRANSLATIONS
          )}
        </h2>

        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: t(
              "hero_desc",
              COMMON_TRANSLATIONS
            ),
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className={styles.btnGroup}>
        <a
          href="#projects"
          className={`${styles.btn} clay-btn text-white`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              width: "1.25rem",
              height: "1.25rem",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span>
            {t(
              "hero_btn_projects",
              COMMON_TRANSLATIONS
            )}
          </span>
        </a>
        <a
          href="#contact"
          className={`${styles.btn} clay-btn-secondary text-slate-700`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              width: "1.25rem",
              height: "1.25rem",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>
            {t(
              "hero_btn_contact",
              COMMON_TRANSLATIONS
            )}
          </span>
        </a>
      </div>
    </section>
  )
}
