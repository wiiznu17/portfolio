"use client"

import React from "react"
import styles from "./Experience.module.css"
import { experienceData } from "@/constants/experience"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"

export default function Experience() {
  const { language, t } = useLanguage()
  return (
    <section id="experience" className={styles.section}>
      <div className="section-title-wrap">
        <h2 className="section-title">{t("exp_title", COMMON_TRANSLATIONS)}</h2>
        <div className="section-title-bar"></div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
        {experienceData.map((exp, idx) => (
          <div key={idx} className={`${styles.experienceCard} clay-card`}>
            <div className={styles.headerRow}>
              <div className={styles.companyWrap}>
                <div className={styles.companyTitleRow}>
                  <h3 className={styles.companyName}>{exp.company}</h3>
                  <span className={styles.internBadge}>{exp.badge[language]}</span>
                </div>
                <p className={styles.roleTitle}>{exp.role[language]}</p>
              </div>
              <div className={styles.duration}>{exp.duration[language]}</div>
            </div>

            <div className={styles.responsibilities}>
              <h4 className={styles.respTitle}>
                {language === "th"
                  ? "หน้าที่ความรับผิดชอบหลักและผลงาน:"
                  : "Core Responsibilities & Achievements:"}
              </h4>
              <div className={styles.gridList}>
                {exp.responsibilities[language].map((resp, respIdx) => (
                  <div key={respIdx} className={styles.listItem}>
                    <span className={styles.numberCircle}>{respIdx + 1}</span>
                    <span className={styles.text} dangerouslySetInnerHTML={{ __html: resp }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
