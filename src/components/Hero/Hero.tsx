"use client"

import React from "react"
import Image from "next/image"
import styles from "./Hero.module.css"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="about" className={styles.section}>
      {/* Content Container (aligned with site width) */}
      <div className={styles.container}>
        <div className={styles.contentCol}>
          {/* Author Header Row: Mascot Sticker + Full Name & Role */}
          <div className={styles.authorHeader}>
            <div className={styles.mascotWrapper}>
              {/* Top-left Sparkle */}
              <svg
                className={`${styles.sparkle} ${styles.sparkleTopLeft}`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                  fill="#3b82f6"
                />
              </svg>

              {/* Right Sparkle */}
              <svg
                className={`${styles.sparkle} ${styles.sparkleRight}`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5L12 0Z"
                  fill="#60a5fa"
                />
              </svg>

              {/* Bottom-right Sparkle */}
              <svg
                className={`${styles.sparkle} ${styles.sparkleBottomRight}`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                  fill="#93c5fd"
                />
              </svg>

              {/* Mascot Robot Artwork */}
              <div className={styles.botContainer}>
                <svg
                  viewBox="0 0 100 100"
                  className={styles.botSvg}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="heroBotBody" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="60%" stopColor="#eff6ff" />
                      <stop offset="100%" stopColor="#dbeafe" />
                    </linearGradient>

                    <linearGradient id="heroBotEar" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#93c5fd" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>

                    <linearGradient id="heroVisor" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>

                    <filter id="heroEyeGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Antenna */}
                  <line
                    x1="50"
                    y1="22"
                    x2="50"
                    y2="10"
                    stroke="#94a3b8"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx="50" cy="8" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

                  {/* Left Headphone Ear */}
                  <rect x="15" y="32" width="11" height="24" rx="5.5" fill="url(#heroBotEar)" />
                  <rect x="17" y="35" width="4" height="18" rx="2" fill="#bfdbfe" opacity="0.6" />

                  {/* Right Headphone Ear */}
                  <rect x="74" y="32" width="11" height="24" rx="5.5" fill="url(#heroBotEar)" />
                  <rect x="79" y="35" width="4" height="18" rx="2" fill="#bfdbfe" opacity="0.6" />

                  {/* Main Head Base */}
                  <rect
                    x="23"
                    y="18"
                    width="54"
                    height="50"
                    rx="16"
                    fill="url(#heroBotBody)"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="23"
                    y="18"
                    width="54"
                    height="50"
                    rx="16"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="1.2"
                    opacity="0.6"
                  />

                  {/* Visor Screen */}
                  <rect
                    x="29"
                    y="29"
                    width="42"
                    height="26"
                    rx="8"
                    fill="url(#heroVisor)"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  {/* Visor Reflection */}
                  <path
                    d="M 32 32 Q 42 30 52 32"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.3"
                  />

                  {/* Glowing Eyes */}
                  <rect
                    x="35"
                    y="37"
                    width="11"
                    height="10"
                    rx="4"
                    fill="#38bdf8"
                    filter="url(#heroEyeGlow)"
                  />
                  <rect
                    x="54"
                    y="37"
                    width="11"
                    height="10"
                    rx="4"
                    fill="#38bdf8"
                    filter="url(#heroEyeGlow)"
                  />

                  {/* Eye Catchlights */}
                  <circle cx="37.5" cy="39.5" r="1.5" fill="#ffffff" />
                  <circle cx="56.5" cy="39.5" r="1.5" fill="#ffffff" />

                  {/* Cute Feet */}
                  <rect x="33" y="68" width="12" height="8" rx="4" fill="#64748b" />
                  <rect x="55" y="68" width="12" height="8" rx="4" fill="#64748b" />
                </svg>
              </div>
            </div>

            <div className={styles.authorInfo}>
              <div className={styles.greetingText}>
                <span>{t("hero_greeting", COMMON_TRANSLATIONS)}</span>
              </div>
              <h1 className={styles.authorName}>
                {t("hero_fullname", COMMON_TRANSLATIONS)}
              </h1>
            </div>
          </div>

          {/* Bio Description Paragraph */}
          <p
            className={styles.bioText}
            dangerouslySetInnerHTML={{
              __html: t("hero_desc", COMMON_TRANSLATIONS),
            }}
          />

          {/* Action Button Row */}
          <div className={styles.btnRow}>
            <a href="#projects" className={styles.primaryBtn}>
              <span className={styles.btnCodeIcon}>&lt;/&gt;</span>
              <span>{t("hero_btn_projects", COMMON_TRANSLATIONS)}</span>
              <span className={styles.btnArrow}>&rarr;</span>
            </a>

            <a href="#contact" className={styles.secondaryBtn}>
              <svg
                className={styles.btnMailIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{t("hero_btn_contact", COMMON_TRANSLATIONS)}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Full-Bleed Top-Right Image with Soft Bottom-Left Blur & Fade */}
      <div className={styles.imageCol}>
        <div className={styles.imageFrame}>
          <Image
            src="/images/profile.jpeg"
            alt="Developer illustration working at desk"
            width={2398}
            height={1792}
            priority
            className={styles.heroImg}
          />

          {/* Soft Blur layer covering the bottom-left */}
          <div className={styles.bottomLeftBlur} />

          {/* Soft Gradient Fade dissolving bottom-left into background */}
          <div className={styles.bottomLeftFade} />
        </div>
      </div>
    </section>
  )
}
