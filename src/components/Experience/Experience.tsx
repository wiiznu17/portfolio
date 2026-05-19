import React from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-title-wrap">
        <h2 className="section-title">Experience</h2>
        <div className="section-title-bar"></div>
      </div>

      {/* Single Experience Card */}
      <div className={`${styles.experienceCard} clay-card`}>
        <div className={styles.headerRow}>
          <div className={styles.companyWrap}>
            <div className={styles.companyTitleRow}>
              <h3 className={styles.companyName}>Digio (Thailand) Co., Ltd.</h3>
              <span className={styles.internBadge}>Internship</span>
            </div>
            <p className={styles.roleTitle}>Web Developer Intern</p>
          </div>
          <div className={styles.duration}>Apr 2025 - Oct 2025</div>
        </div>

        <div className={styles.responsibilities}>
          <h4 className={styles.respTitle}>Core Responsibilities & Achievements:</h4>
          <div className={styles.gridList}>
            <div className={styles.listItem}>
              <span className={styles.numberCircle}>1</span>
              <span className={styles.text}>
                Assisted in maintaining the <strong>SCB Planet X</strong> admin portal by implementing features and resolving defects based on client requirements.
              </span>
            </div>
            <div className={styles.listItem}>
              <span className={styles.numberCircle}>2</span>
              <span className={styles.text}>
                Developed unit tests using <strong>Jest</strong> to ensure code quality while actively studying the existing project architecture.
              </span>
            </div>
            <div className={styles.listItem}>
              <span className={styles.numberCircle}>3</span>
              <span className={styles.text}>
                Integrated <strong>DigiPay</strong> (payment gateway) into the DigiShop project to handle secure payment flows.
              </span>
            </div>
            <div className={styles.listItem}>
              <span className={styles.numberCircle}>4</span>
              <span className={styles.text}>
                Studied financial payment workflows to design and successfully implement solutions on personal projects.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
