"use client"

import React, { useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import styles from "./ProjectCarousel.module.css"
import { useLanguage } from "@/context/LanguageContext"

export interface ProjectImage {
  url: string
  title: string
  description: string
}

interface ProjectCarouselProps {
  images: ProjectImage[]
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handlePrev = useCallback(() => {
    if (images.length <= 1 || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
      setIsTransitioning(false)
    }, 200)
  }, [images.length, isTransitioning])

  const handleNext = useCallback(() => {
    if (images.length <= 1 || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
      setIsTransitioning(false)
    }, 200)
  }, [images.length, isTransitioning])

  const handleDotClick = useCallback(
    (index: number) => {
      if (index === currentIndex || isTransitioning) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 200)
    },
    [currentIndex, isTransitioning]
  )

  // Keyboard navigation for accessible premium UX
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "Escape") {
        setIsLightboxOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handlePrev, handleNext])

  // Prevent scroll when lightbox is active
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLightboxOpen])

  if (!images || images.length === 0) {
    return null
  }

  const currentImage = images[currentIndex]

  return (
    <div className={styles.carouselGrid}>
      {/* 3D Visual Frame for Slider */}
      <div className={styles.sliderFrame}>
        {/* Main Display Image */}
        <div
          className={`${styles.imageWrapper} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          onClick={() => setIsLightboxOpen(true)}
          title="Click to expand view"
        >
          <img src={currentImage.url} alt={currentImage.title} className={styles.sliderImage} />
          {/* Zoom Hover Indicator overlay */}
          <div className={styles.zoomOverlay}>
            <svg viewBox="0 0 24 24" className={styles.zoomIcon} fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
            <span>{language === "th" ? "คลิกเพื่อขยายภาพ" : "Click to Expand"}</span>
          </div>
        </div>

        {/* Prev/Next Navigation Overlay */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className={`${styles.navBtn} ${styles.prevBtn}`}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className={`${styles.navBtn} ${styles.nextBtn}`}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Indicators Dots Panel Overlay */}
        {images.length > 1 && (
          <div className={styles.dotsWrapper}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  handleDotClick(idx)
                }}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Explanatory Caption Panel (Rich UI layout details) */}
      <div className={styles.captionPanel}>
        <span className={styles.slideIndicator}>
          {language === "th"
            ? `คุณสมบัติที่ ${currentIndex + 1} จากทั้งหมด ${images.length} รายการ`
            : `Feature ${currentIndex + 1} of ${images.length}`}
        </span>
        <h2 className={styles.captionTitle}>{currentImage.title}</h2>
        <div className={styles.captionDivider}></div>
        <p className={styles.captionDesc}>{currentImage.description}</p>
        <div className={styles.captionTip}>
          <span className={styles.tipIcon}>🔍</span>
          <span>
            {language === "th"
              ? "คลิกที่รูปเพื่อตรวจสอบรายละเอียดขนาดเต็ม"
              : "Click image to inspect in full resolution"}
          </span>
        </div>
      </div>

      {/* Immersive Fullscreen Lightbox Overlay Modal */}
      {isLightboxOpen &&
        isMounted &&
        createPortal(
          <div className={styles.lightbox} onClick={() => setIsLightboxOpen(false)}>
            {/* Lightbox background blur shadow */}
            <div className={styles.lightboxBg} />

            {/* Close button */}
            <button
              className={`${styles.closeBtn} clay-btn-rose`}
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close fullscreen"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Lightbox navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrev()
                  }}
                  className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
                  aria-label="Previous fullscreen image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  className={`${styles.lightboxNavBtn} ${styles.lightboxNext}`}
                  aria-label="Next fullscreen image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Fullscreen Image Canvas */}
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className={styles.lightboxImage}
              />
              {/* Overlay description details inside the Lightbox itself */}
              <div className={styles.lightboxCaption}>
                <h3 className={styles.lightboxTitle}>{currentImage.title}</h3>
                <p className={styles.lightboxDesc}>{currentImage.description}</p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
