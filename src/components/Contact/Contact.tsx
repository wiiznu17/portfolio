"use client"

import React, { useState } from "react"
import styles from "./Contact.module.css"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"

export default function Contact() {
  const { language, t } = useLanguage()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      alert(language === "th" ? "กรุณากรอกข้อมูลให้ครบถ้วน" : "Please fill in all fields.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSuccessOpen(true)
        setName("")
        setEmail("")
        setMessage("")
      } else {
        alert(data.error || t("contact_error", COMMON_TRANSLATIONS))
      }
    } catch {
      alert(
        language === "th"
          ? "เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาตรวจสอบอินเทอร์เน็ตของคุณ"
          : "A connection error occurred. Please check your internet connection."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.contactCard} clay-card`}>
        {/* Background decorative blob */}
        <div className={styles.bgBlob}></div>

        {/* Floating 3D Paper Plane */}
        <div className={`${styles.planeContainer} floating-shape-1`}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ filter: "drop-shadow(0 10px 15px rgba(99,102,241,0.3))" }}
          >
            <defs>
              <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="planeAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <polygon points="10,45 90,15 45,60" fill="url(#planeGrad)" />
            <polygon points="45,60 90,15 65,75" fill="#cbd5e1" />
            <polygon points="45,60 55,75 65,75" fill="url(#planeAccent)" />
            <polygon points="45,60 50,90 55,75" fill="#64748b" />
          </svg>
        </div>

        <div className={styles.cardContent}>
          {/* Header */}
          <div className={styles.headerArea}>
            <h3 className={styles.title}>{t("contact_title", COMMON_TRANSLATIONS)}</h3>
            <p className={styles.subtitle}>
              {language === "th"
                ? "พร้อมเรียนรู้และร่วมมือกับทีมเพื่อขับเคลื่อนระบบให้ก้าวหน้า"
                : "Ready to adapt and collaborate with a team to support system development."}
            </p>

            {/* Direct Shortcuts */}
            <div className={styles.shortcuts}>
              <a href="mailto:wissanu.rayayoi@gmail.com" className={styles.shortcutLink}>
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>wissanu.rayayoi@gmail.com</span>
              </a>
              <a href="tel:0968984950" className={styles.shortcutLink}>
                <svg
                  className="w-4 h-4 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>096-898-4950</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div>
                <label htmlFor="formName" className={styles.label}>
                  {t("contact_name_label", COMMON_TRANSLATIONS)}
                </label>
                <input
                  id="formName"
                  type="text"
                  placeholder={language === "th" ? "ชื่อของคุณ" : "John Doe"}
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="formEmail" className={styles.label}>
                  {t("contact_email_label", COMMON_TRANSLATIONS)}
                </label>
                <input
                  id="formEmail"
                  type="email"
                  placeholder="your-email@example.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="formMessage" className={styles.label}>
                {t("contact_msg_label", COMMON_TRANSLATIONS)}
              </label>
              <textarea
                id="formMessage"
                rows={4}
                placeholder={
                  language === "th"
                    ? "สวัสดีวิษณุ ฉันต้องการพูดคุยเกี่ยวกับ..."
                    : "Hi Wissanu, I'd love to chat about..."
                }
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className={styles.submitContainer}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitBtn} clay-btn`}
              >
                {isSubmitting
                  ? t("contact_btn_sending", COMMON_TRANSLATIONS)
                  : t("contact_btn_send", COMMON_TRANSLATIONS)}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal Backdrop */}
      <div
        className={`${styles.modalBackdrop} ${isSuccessOpen ? styles.modalOpen : ""}`}
        onClick={() => setIsSuccessOpen(false)}
      >
        {/* Modal Box */}
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalIcon}>✓</div>
          <h4 className={styles.modalTitle}>
            {language === "th" ? "ส่งข้อความเรียบร้อยแล้ว!" : "Message Sent!"}
          </h4>
          <p className={styles.modalText}>{t("contact_success", COMMON_TRANSLATIONS)}</p>
          <button className={styles.modalCloseBtn} onClick={() => setIsSuccessOpen(false)}>
            {language === "th" ? "ปิด" : "Close"}
          </button>
        </div>
      </div>
    </section>
  )
}
