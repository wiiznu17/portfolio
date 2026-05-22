import React from "react"
import styles from "./AdditionalInfo.module.css"

export default function AdditionalInfo() {
  return (
    <section id="info" className={styles.section}>
      <div className="section-title-wrap">
        <h2 className="section-title">Additional Information</h2>
        <div className="section-title-bar"></div>
      </div>

      <div className={`${styles.infoCard} clay-card`}>
        {/* Decorative Graduation Cap Floating SVG on the left */}
        <svg viewBox="0 0 100 100" className={styles.decorationLeft}>
          <defs>
            <linearGradient id="eduGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--emerald-400)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="var(--emerald-600)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M50 15 L90 35 L50 55 L10 35 Z"
            fill="url(#eduGrad)"
            stroke="var(--emerald-500)"
            strokeWidth="1.5"
            opacity="0.8"
          />
          <path
            d="M30 45 L30 70 C30 80, 70 80, 70 70 L70 45"
            fill="none"
            stroke="var(--emerald-500)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M90 35 L90 65"
            fill="none"
            stroke="var(--emerald-500)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="90" cy="65" r="3" fill="var(--emerald-500)" opacity="0.8" />
          <path
            d="M20 20 L22 25 L27 27 L22 29 L20 34 L18 29 L13 27 L18 25 Z"
            fill="var(--emerald-400)"
            opacity="0.5"
          />
          <path
            d="M75 60 L76.5 64 L80 65 L76.5 66 L75 70 L73.5 66 L70 65 L73.5 64 Z"
            fill="var(--emerald-400)"
            opacity="0.5"
          />
        </svg>

        {/* Decorative Languages Speech Bubble Floating SVG on the right */}
        <svg viewBox="0 0 100 100" className={styles.decorationRight}>
          <defs>
            <linearGradient id="langGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--blue-400)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="var(--blue-600)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect
            x="15"
            y="20"
            width="55"
            height="40"
            rx="12"
            fill="url(#langGrad)"
            stroke="var(--blue-500)"
            strokeWidth="1.5"
            opacity="0.8"
          />
          <path
            d="M25 60 L20 70 L35 60"
            fill="url(#langGrad)"
            stroke="var(--blue-500)"
            strokeWidth="1.5"
            opacity="0.8"
          />
          <rect
            x="45"
            y="45"
            width="40"
            height="30"
            rx="10"
            fill="url(#langGrad)"
            stroke="var(--blue-400)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <path
            d="M75 75 L80 82 L70 75"
            fill="url(#langGrad)"
            stroke="var(--blue-400)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <path
            d="M85 25 L86.5 29 L90 30 L86.5 31 L85 35 L83.5 31 L80 30 L83.5 29 Z"
            fill="var(--blue-400)"
            opacity="0.5"
          />
          <path
            d="M15 80 L16 83 L19 84 L16 85 L15 88 L14 85 L11 84 L14 83 Z"
            fill="var(--blue-400)"
            opacity="0.5"
          />
        </svg>

        <div className={styles.grid}>
          {/* Education Section */}
          <div className={`${styles.column} ${styles.columnLeft}`}>
            <div className={`${styles.titleRow} ${styles.titleRowEmerald}`}>
              <div className={`${styles.iconBox} ${styles.iconBoxEmerald}`}>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ width: "1.25rem", height: "1.25rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3 className={styles.title}>Education</h3>
            </div>

            <div className={styles.contentList}>
              <div className={styles.eduItem}>
                <div className={styles.eduIcon}>
                  <img
                    src="/images/projects/kku.png"
                    alt="KKU Logo"
                    style={{ width: "90%", height: "90%", objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h4 className={styles.eduName}>Khon Kaen University</h4>
                  <p className={styles.eduSubtitle}>
                    Bachelor of Engineering in Computer Engineering
                  </p>
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ width: "1.25rem", height: "1.25rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
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
  )
}
