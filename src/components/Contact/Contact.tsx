"use client"

import React, { useState } from "react"
import styles from "./Contact.module.css"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"
import { Mail, Phone } from "lucide-react"
import { CONTACT_INFO } from "@/constants/contact"

export default function Contact() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] =
    useState(false)
  const [isSuccessOpen, setIsSuccessOpen] =
    useState(false)

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()
    if (!name || !email || !message) {
      alert(t("contact_alert_fill", COMMON_TRANSLATIONS))
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      )

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSuccessOpen(true)
        setName("")
        setEmail("")
        setMessage("")
      } else {
        alert(
          data.error ||
            t(
              "contact_error",
              COMMON_TRANSLATIONS
            )
        )
      }
    } catch {
      alert(t("contact_alert_connection", COMMON_TRANSLATIONS))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className={styles.section}
    >
      <div
        className={`${styles.contactCard} clay-card`}
      >
        {/* Background decorative blob */}
        <div className={styles.bgBlob}></div>

        {/* Floating 3D Paper Plane */}
        <div
          className={`${styles.planeContainer} floating-shape-1`}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{
              filter:
                "drop-shadow(0 10px 15px rgba(99,102,241,0.3))",
            }}
          >
            <defs>
              <linearGradient
                id="planeGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#ffffff"
                />
                <stop
                  offset="60%"
                  stopColor="#e2e8f0"
                />
                <stop
                  offset="100%"
                  stopColor="#94a3b8"
                />
              </linearGradient>
              <linearGradient
                id="planeAccent"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#bfdbfe"
                />
                <stop
                  offset="100%"
                  stopColor="#3b82f6"
                />
              </linearGradient>
            </defs>
            <polygon
              points="10,45 90,15 45,60"
              fill="url(#planeGrad)"
            />
            <polygon
              points="45,60 90,15 65,75"
              fill="#cbd5e1"
            />
            <polygon
              points="45,60 55,75 65,75"
              fill="url(#planeAccent)"
            />
            <polygon
              points="45,60 50,90 55,75"
              fill="#64748b"
            />
          </svg>
        </div>

        <div className={styles.cardContent}>
          {/* Header */}
          <div className={styles.headerArea}>
            <h3 className={styles.title}>
              {t(
                "contact_title",
                COMMON_TRANSLATIONS
              )}
            </h3>
            <p className={styles.subtitle}>
              {t("contact_subtitle", COMMON_TRANSLATIONS)}
            </p>

            {/* Direct Shortcuts */}
            <div className={styles.shortcuts}>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className={styles.shortcutLink}
              >
                <Mail
                  size={16}
                  className="text-blue-500"
                  strokeWidth={2.5}
                />
                <span>
                  {CONTACT_INFO.email}
                </span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className={styles.shortcutLink}
              >
                <Phone
                  size={16}
                  className="text-purple-500"
                  strokeWidth={2.5}
                />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.formRow}>
              <div>
                <label
                  htmlFor="formName"
                  className={styles.label}
                >
                  {t(
                    "contact_name_label",
                    COMMON_TRANSLATIONS
                  )}
                </label>
                <input
                  id="formName"
                  type="text"
                  placeholder={t("contact_name_placeholder", COMMON_TRANSLATIONS)}
                  className={styles.input}
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="formEmail"
                  className={styles.label}
                >
                  {t(
                    "contact_email_label",
                    COMMON_TRANSLATIONS
                  )}
                </label>
                <input
                  id="formEmail"
                  type="email"
                  placeholder="your-email@example.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="formMessage"
                className={styles.label}
              >
                {t(
                  "contact_msg_label",
                  COMMON_TRANSLATIONS
                )}
              </label>
              <textarea
                id="formMessage"
                rows={4}
                placeholder={t("contact_msg_placeholder", COMMON_TRANSLATIONS)}
                className={styles.textarea}
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                required
              ></textarea>
            </div>

            <div
              className={styles.submitContainer}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitBtn} clay-btn`}
              >
                {isSubmitting
                  ? t(
                      "contact_btn_sending",
                      COMMON_TRANSLATIONS
                    )
                  : t(
                      "contact_btn_send",
                      COMMON_TRANSLATIONS
                    )}
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
        <div
          className={`${styles.modalBody} clay-card`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalIcon}>
            ✓
          </div>
          <h4 className={styles.modalTitle}>
            {t("contact_modal_title", COMMON_TRANSLATIONS)}
          </h4>
          <p className={styles.modalText}>
            {t(
              "contact_success",
              COMMON_TRANSLATIONS
            )}
          </p>
          <button
            className={`${styles.modalCloseBtn} clay-btn-emerald`}
            onClick={() =>
              setIsSuccessOpen(false)
            }
          >
            {t("contact_modal_close", COMMON_TRANSLATIONS)}
          </button>
        </div>
      </div>
    </section>
  )
}
