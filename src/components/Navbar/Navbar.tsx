"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects", "skills"];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset for sticky navbar
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Brand Logo */}
        <a href="#" className={styles.logo}>
          <span>Wiiznu</span>
        </a>

        {/* Menu Links */}
        <div className={styles.menu}>
          <a
            href="#about"
            className={`${styles.menuLink} ${activeSection === "about" ? styles.activeLink : ""}`}
          >
            About
          </a>
          <a
            href="#experience"
            className={`${styles.menuLink} ${activeSection === "experience" ? styles.activeLink : ""}`}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={`${styles.menuLink} ${activeSection === "projects" ? styles.activeLink : ""}`}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`${styles.menuLink} ${activeSection === "skills" ? styles.activeLink : ""}`}
          >
            Tech Stack
          </a>
        </div>

        {/* CTA Button */}
        <div>
          <a href="#contact" className={`${styles.ctaBtn} clay-btn`}>
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}
