"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
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
            About
          </Link>
          <Link
            href={isHome ? "#experience" : "/#experience"}
            className={`${styles.menuLink} ${currentActiveSection === "experience" ? styles.activeLink : ""}`}
          >
            Experience
          </Link>
          <Link
            href={isHome ? "#projects" : "/#projects"}
            className={`${styles.menuLink} ${currentActiveSection === "projects" ? styles.activeLink : ""}`}
          >
            Projects
          </Link>
          <Link
            href={isHome ? "#skills" : "/#skills"}
            className={`${styles.menuLink} ${currentActiveSection === "skills" ? styles.activeLink : ""}`}
          >
            Tech Stack
          </Link>
        </div>

        {/* CTA Button */}
        <div>
          <Link href={isHome ? "#contact" : "/#contact"} className={`${styles.ctaBtn} clay-btn`}>
            Contact Me
          </Link>
        </div>
      </nav>
    </header>
  )
}
