"use client"

import { useEffect, useRef, useState } from "react"

export default function Mascot() {
  const mascotRef = useRef<HTMLDivElement>(null)
  const [isWalking, setIsWalking] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const lastScrollY = useRef(0)
  const walkTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight

      // Calculate scroll percentage (0 to 1)
      const scrollPercent = maxScroll > 0 ? Math.min(Math.max(currentScrollY / maxScroll, 0), 1) : 0

      // Calculate horizontal positioning
      const maxLeft = window.innerWidth - 60 // Keep a small margin from the right edge
      const currentLeft = scrollPercent * maxLeft

      if (mascotRef.current) {
        mascotRef.current.style.left = `${currentLeft}px`
      }

      // Determine face direction based on scroll delta
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> face right
        setDirection("right")
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up -> face left
        setDirection("left")
      }

      // Trigger walking animation state
      setIsWalking(true)

      // Stop walking when scroll stops (debounce)
      if (walkTimeout.current) {
        clearTimeout(walkTimeout.current)
      }

      walkTimeout.current = setTimeout(() => {
        setIsWalking(false)
      }, 100)

      lastScrollY.current = currentScrollY
    }

    // Initial run
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (walkTimeout.current) {
        clearTimeout(walkTimeout.current)
      }
    }
  }, [])

  return (
    <div
      ref={mascotRef}
      className="mascot-container"
      style={{
        position: "fixed",
        bottom: 0,
        zIndex: 100,
        width: "80px",
        height: "80px",
        pointerEvents: "none",
        left: "-100px",
        transform: direction === "right" ? "scaleX(1)" : "scaleX(-1)",
        transition: "left 0.15s linear, transform 0.2s ease-in-out",
        willChange: "left, transform",
      }}
    >
      <div
        className={`w-full h-full ${isWalking ? "walking" : ""}`}
        style={{
          filter: "drop-shadow(0 8px 10px rgba(59,130,246,0.4))",
          width: "100%",
          height: "100%",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="botBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="eyeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Antenna */}
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="10"
            stroke="#94a3b8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="50" cy="8" r="4" fill="#fbbf24" />

          {/* Main Body/Head */}
          <rect
            x="25"
            y="20"
            width="50"
            height="45"
            rx="12"
            fill="url(#botBody)"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <rect
            x="25"
            y="20"
            width="50"
            height="45"
            rx="12"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1"
            transform="translate(1, 1)"
            opacity="0.5"
          />

          {/* Visor */}
          <rect
            x="30"
            y="32"
            width="40"
            height="18"
            rx="6"
            fill="url(#visorGrad)"
            stroke="#334155"
            strokeWidth="2"
          />
          <path
            d="M 32 35 Q 40 33 48 35"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            opacity="0.3"
            strokeLinecap="round"
          />

          {/* Glowing Eyes */}
          <rect
            x="36"
            y="38"
            width="28"
            height="6"
            rx="3"
            fill="url(#eyeGlow)"
            style={{ filter: "drop-shadow(0 0 3px #38bdf8)" }}
          />

          {/* Feet */}
          <rect x="32" y="65" width="12" height="12" rx="4" fill="#64748b" />
          <rect x="56" y="65" width="12" height="12" rx="4" fill="#64748b" />
        </svg>
      </div>
    </div>
  )
}
