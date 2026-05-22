import React from "react"
import styles from "./Experience.module.css"
import { experienceData } from "@/constants/experience"

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-title-wrap">
        <h2 className="section-title">Experience</h2>
        <div className="section-title-bar"></div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
        {experienceData.map((exp, idx) => (
          <div key={idx} className={`${styles.experienceCard} clay-card`}>
            <div className={styles.headerRow}>
              <div className={styles.companyWrap}>
                <div className={styles.companyTitleRow}>
                  <h3 className={styles.companyName}>{exp.company}</h3>
                  <span className={styles.internBadge}>{exp.badge}</span>
                </div>
                <p className={styles.roleTitle}>{exp.role}</p>
              </div>
              <div className={styles.duration}>{exp.duration}</div>
            </div>

            <div className={styles.responsibilities}>
              <h4 className={styles.respTitle}>Core Responsibilities & Achievements:</h4>
              <div className={styles.gridList}>
                {exp.responsibilities.map((resp, respIdx) => (
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
