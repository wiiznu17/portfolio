"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { useLanguage } from "@/context/LanguageContext"
import { COMMON_TRANSLATIONS } from "@/constants/translations"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState("about")
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScrollVisibility = () => {
      const currentScrollY = window.scrollY

      // Prevent triggers on macOS elastic bounce
      if (currentScrollY < 0) return
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (currentScrollY > maxScroll) return

      // Scroll down -> hide, Scroll up -> show
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScrollVisibility, { passive: true })
    return () => window.removeEventListener("scroll", handleScrollVisibility)
  }, [])

  useEffect(() => {
    if (!isHome) return

    const sections = ["about", "experience", "projects", "skills"]

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200 // Offset for sticky navbar

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  const currentActiveSection = isHome ? activeSection : ""

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ""}`}>
      <nav className={styles.nav}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <span>Wiiznu</span>
        </Link>

        {/* Menu Links */}
        <div className={styles.menu}>
          <Link
            href={isHome ? "#about" : "/#about"}
            className={`${styles.menuLink} ${currentActiveSection === "about" ? styles.activeLink : ""}`}
          >
            {t("nav_about", COMMON_TRANSLATIONS)}
          </Link>
          <Link
            href={isHome ? "#experience" : "/#experience"}
            className={`${styles.menuLink} ${currentActiveSection === "experience" ? styles.activeLink : ""}`}
          >
            {t("nav_experience", COMMON_TRANSLATIONS)}
          </Link>
          <Link
            href={isHome ? "#projects" : "/#projects"}
            className={`${styles.menuLink} ${currentActiveSection === "projects" ? styles.activeLink : ""}`}
          >
            {t("nav_projects", COMMON_TRANSLATIONS)}
          </Link>
          <Link
            href={isHome ? "#skills" : "/#skills"}
            className={`${styles.menuLink} ${currentActiveSection === "skills" ? styles.activeLink : ""}`}
          >
            {t("nav_skills", COMMON_TRANSLATIONS)}
          </Link>
        </div>

        {/* Action area: Language toggle + CTA Button */}
        <div className={styles.actionContainer}>
          <div
            className={styles.langToggle}
            onClick={() => setLanguage(language === "en" ? "th" : "en")}
            role="button"
            tabIndex={0}
            aria-label="Toggle language"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setLanguage(language === "en" ? "th" : "en")
              }
            }}
          >
            <div
              className={`${styles.langSlider} ${language === "th" ? styles.thActive : ""}`}
            ></div>
            <span className={`${styles.langText} ${language === "en" ? styles.activeText : ""}`}>
              EN
            </span>
            <span className={`${styles.langText} ${language === "th" ? styles.activeText : ""}`}>
              TH
            </span>
          </div>

          <Link href={isHome ? "#contact" : "/#contact"} className={`${styles.ctaBtn} clay-btn`}>
            {t("nav_contact", COMMON_TRANSLATIONS)}
          </Link>
        </div>
      </nav>
    </header>
  )
}
