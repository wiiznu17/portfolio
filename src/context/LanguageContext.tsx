"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"

export type Language = "en" | "th"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, customDict?: Record<string, string | Record<Language, string>>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Read persisted language preference from localStorage safely
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("preferred_language") as Language
      if (savedLang === "en" || savedLang === "th") {
        setLanguageState(savedLang)
      }
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_language", lang)
    }
  }, [])

  // A helper function to translate keys or objects reactively
  const t = useCallback(
    (key: string, customDict?: any) => {
      if (customDict && customDict[key]) {
        const val = customDict[key]
        if (typeof val === "object" && val !== null) {
          return val[language] || val["en"] || ""
        }
        return val
      }
      return key
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
