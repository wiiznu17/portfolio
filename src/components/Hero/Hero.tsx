import React from "react"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section id="about" className={styles.section}>
      {/* Avatar Container with glowing backdrop ring */}
      <div className={styles.avatarContainer}>
        {/* 3D Shadow Base under Avatar */}
        <div className={styles.avatarShadow}></div>
        <div className={styles.avatarBorder}>
          <div className={styles.avatarInner}>
            {/* High-fidelity 3D-styled Avatar Artwork SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-28 h-28 mt-4 md:w-32 md:h-32"
              style={{ width: "8rem", height: "8rem" }}
            >
              <defs>
                <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff8f0" />
                  <stop offset="60%" stopColor="#ffedd5" />
                  <stop offset="100%" stopColor="#fdba74" />
                </linearGradient>
                <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
              </defs>
              {/* Face */}
              <circle cx="50" cy="42" r="20" fill="url(#skinGrad)" />
              {/* Hair */}
              <path d="M28 42 C26 22, 74 22, 72 42 C67 30, 33 30, 28 42 Z" fill="url(#hairGrad)" />
              <path d="M28 42 C25 45, 26 35, 32 32" fill="url(#hairGrad)" />
              <path d="M72 42 C75 45, 74 35, 68 32" fill="url(#hairGrad)" />
              {/* Eyes */}
              <circle cx="43" cy="40" r="3" fill="#0f172a" />
              <circle cx="57" cy="40" r="3" fill="#0f172a" />
              <circle cx="44.5" cy="38.5" r="1" fill="#ffffff" />
              <circle cx="58.5" cy="38.5" r="1" fill="#ffffff" />
              {/* Cheeks */}
              <circle cx="38" cy="45" r="3" fill="#f43f5e" opacity="0.2" />
              <circle cx="62" cy="45" r="3" fill="#f43f5e" opacity="0.2" />
              {/* Smile */}
              <path
                d="M46 48 Q50 52 54 48"
                fill="none"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Neck */}
              <path d="M44 60 L44 65 C44 69, 56 69, 56 65 L56 60 Z" fill="url(#skinGrad)" />
              {/* White Shirt */}
              <path d="M20 88 C20 68, 80 68, 80 88 Z" fill="url(#shirtGrad)" />
              <path d="M38 88 L50 68 L62 88 Z" fill="#ffffff" opacity="0.9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Headline Details */}
      <div className={styles.headlineWrap}>
        <h1 className={styles.title}>
          {/* Decorative Sparkle Top Left */}
          <svg viewBox="0 0 24 24" className={`${styles.sparkleLeft} floating-shape-3`}>
            <path
              fill="currentColor"
              d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5Z"
            />
          </svg>
          Hi, I&apos;m Wissanu Rayayoi
          {/* Decorative Sparkle Bottom Right */}
          <svg viewBox="0 0 24 24" className={`${styles.sparkleRight} floating-shape-1`}>
            <path
              fill="currentColor"
              d="M12,2L13.5,8.5L20,10L13.5,11.5L12,18L10.5,11.5L4,10L10.5,8.5Z"
            />
          </svg>
        </h1>

        <h2 className={styles.subtitle}>Software Engineer</h2>

        <p className={styles.desc}>
          Computer Engineering graduate from Khon Kaen University. Interested in{" "}
          <strong>backend development</strong> and <strong>distributed systems</strong>. A
          disciplined, detail-oriented individual who takes full ownership of work and approaches
          challenges with a logical mindset. Ready to adapt and collaborate to support system
          development.
        </p>
      </div>

      {/* Action Buttons */}
      <div className={styles.btnGroup}>
        <a href="#projects" className={`${styles.btn} clay-btn text-white`}>
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
              strokeWidth="2.5"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>Explore Projects</span>
        </a>
        <a href="#contact" className={`${styles.btn} clay-btn-secondary text-slate-700`}>
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
              strokeWidth="2.5"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Contact Details</span>
        </a>
      </div>
    </section>
  )
}
