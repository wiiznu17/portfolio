import React from "react";
import styles from "./AdditionalInfo.module.css";

export default function AdditionalInfo() {
  return (
    <section id="info" className={styles.section}>
      <div className="section-title-wrap">
        <h2 className="section-title">Additional Information</h2>
        <div className="section-title-bar"></div>
      </div>

      <div className={`${styles.infoCard} clay-card`}>
        <div className={styles.grid}>
          {/* Education Section */}
          <div className={`${styles.column} ${styles.columnLeft}`}>
            <div className={`${styles.titleRow} ${styles.titleRowEmerald}`}>
              <div className={`${styles.iconBox} ${styles.iconBoxEmerald}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1.25rem", height: "1.25rem" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className={styles.title}>Education</h3>
            </div>

            <div className={styles.contentList}>
              <div className={styles.eduItem}>
                <div className={styles.eduIcon}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1rem", height: "1rem" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.eduName}>Khon Kaen University</h4>
                  <p className={styles.eduSubtitle}>Bachelor of Engineering in Computer Engineering</p>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>2022-2026</span>
                    <span className={styles.gpaxBadge}>GPAX: 3.07</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className={`${styles.column} ${styles.columnRight}`}>
            <div className={`${styles.titleRow} ${styles.titleRowBlue}`}>
              <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1.25rem", height: "1.25rem" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className={styles.title}>Languages</h3>
            </div>

            <div className={styles.contentList}>
              {/* Thai */}
              <div className={styles.langItem}>
                <div className={`${styles.langIconBox} ${styles.langIconTH}`}>TH</div>
                <div>
                  <h4 className={styles.langName}>Thai</h4>
                  <p className={styles.langLevel}>Native</p>
                </div>
              </div>
              {/* English */}
              <div className={styles.langItem}>
                <div className={`${styles.langIconBox} ${styles.langIconEN}`}>EN</div>
                <div>
                  <h4 className={styles.langName}>English</h4>
                  <p className={styles.langLevel}>Intermediate</p>
                </div>
              </div>
              {/* Japanese */}
              <div className={styles.langItem}>
                <div className={`${styles.langIconBox} ${styles.langIconJP}`}>JP</div>
                <div>
                  <h4 className={styles.langName}>Japanese</h4>
                  <p className={styles.langLevel}>Beginner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
