"use client"

import React, {
  useState,
  useEffect,
  useCallback,
} from "react"
import { createPortal } from "react-dom"
import styles from "./ProjectCarousel.module.css"
import { useLanguage } from "@/context/LanguageContext"

export interface ProjectImage {
  url: string
  title: { en: string; th: string }
  description: { en: string; th: string }
  orientation?: "landscape" | "portrait" | "square"
}

interface ProjectCarouselProps {
  images: ProjectImage[]
}

const ASPECT_RATIO: Record<
  NonNullable<ProjectImage["orientation"]>,
  string
> = {
  landscape: "16 / 9",
  portrait: "16 / 9",
  square: "16 / 9",
}

// Broken-image placeholder shown when a URL fails to load
function BrokenImagePlaceholder({
  language,
}: {
  language: string
}) {
  return (
    <div className={styles.brokenState}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={styles.brokenIcon}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span>
        {language === "th"
          ? "ไม่พบรูปภาพ"
          : "Image not available"}
      </span>
    </div>
  )
}

export default function ProjectCarousel({
  images,
}: ProjectCarouselProps) {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] =
    useState(0)
  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false)
  const [isTransitioning, setIsTransitioning] =
    useState(false)
  const [isMounted, setIsMounted] =
    useState(false)
  // Track which image URLs have failed to load
  const [erroredUrls, setErroredUrls] = useState<
    Set<string>
  >(new Set())

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Filter out broken images — only after mount so SSR stays consistent
  const validImages = isMounted
    ? images.filter((img) => !erroredUrls.has(img.url))
    : images

  // Keep currentIndex in-bounds if a broken image was removed
  useEffect(() => {
    if (currentIndex >= validImages.length && validImages.length > 0) {
      setCurrentIndex(validImages.length - 1)
    }
  }, [validImages.length, currentIndex])

  const handlePrev = useCallback(() => {
    if (validImages.length <= 1 || isTransitioning)
      return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? validImages.length - 1 : prev - 1
      )
      setIsTransitioning(false)
    }, 200)
  }, [validImages.length, isTransitioning])

  const handleNext = useCallback(() => {
    if (validImages.length <= 1 || isTransitioning)
      return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === validImages.length - 1 ? 0 : prev + 1
      )
      setIsTransitioning(false)
    }, 200)
  }, [validImages.length, isTransitioning])

  const handleDotClick = useCallback(
    (index: number) => {
      if (
        index === currentIndex ||
        isTransitioning
      )
        return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 200)
    },
    [currentIndex, isTransitioning]
  )

  // Keyboard navigation
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
    return () =>
      window.removeEventListener("keydown", handleKeyDown)
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

  // Before mount, show the first image (no filtering yet — avoids hydration mismatch)
  const displayImages = isMounted ? validImages : images
  if (displayImages.length === 0) return null

  const currentImage = displayImages[currentIndex] ?? displayImages[0]
  const orientation = currentImage.orientation ?? "landscape"
  const aspectRatio = ASPECT_RATIO[orientation]
  const isBroken = erroredUrls.has(currentImage.url)

  return (
    <div className={styles.carouselGrid}>
      {/* Slider Frame — aspect ratio driven by orientation */}
      <div
        className={`${styles.sliderFrame} ${styles[orientation]}`}
        style={{ "--slide-ratio": aspectRatio } as React.CSSProperties}
      >
        {/* Main Display Image */}
        <div
          className={`${styles.imageWrapper} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          onClick={() =>
            !isBroken && setIsLightboxOpen(true)
          }
          title={
            isBroken
              ? undefined
              : "Click to expand view"
          }
        >
          {isBroken ? (
            <BrokenImagePlaceholder language={language} />
          ) : (
            <>
              {orientation === "portrait" && (
                <img
                  src={currentImage.url}
                  alt=""
                  className={styles.blurredBackground}
                  aria-hidden="true"
                />
              )}
              <img
                src={currentImage.url}
                alt={
                  language === "th"
                    ? currentImage.title.th
                    : currentImage.title.en
                }
                className={styles.sliderImage}
                onError={() =>
                  setErroredUrls((prev) => {
                    const next = new Set(prev)
                    next.add(currentImage.url)
                    return next
                  })
                }
              />
              {/* Zoom overlay */}
              <div className={styles.zoomOverlay}>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.zoomIcon}
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
                <span>
                  {language === "th"
                    ? "คลิกเพื่อขยายภาพ"
                    : "Click to Expand"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Prev/Next Navigation */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className={`${styles.navBtn} ${styles.prevBtn}`}
              aria-label="Previous image"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
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

        {/* Dot indicators */}
        {displayImages.length > 1 && (
          <div className={styles.dotsWrapper}>
            {displayImages.map((_, idx) => (
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

      {/* Caption Panel */}
      <div className={styles.captionPanel}>
        <span className={styles.slideIndicator}>
          {language === "th"
            ? `คุณสมบัติที่ ${currentIndex + 1} จากทั้งหมด ${displayImages.length} รายการ`
            : `Feature ${currentIndex + 1} of ${displayImages.length}`}
        </span>
        <h2 className={styles.captionTitle}>
          {language === "th"
            ? currentImage.title.th
            : currentImage.title.en}
        </h2>
        <div className={styles.captionDivider}></div>
        <p className={styles.captionDesc}>
          {language === "th"
            ? currentImage.description.th
            : currentImage.description.en}
        </p>
        {!isBroken && (
          <div className={styles.captionTip}>
            <span className={styles.tipIcon}>🔍</span>
            <span>
              {language === "th"
                ? "คลิกที่รูปเพื่อตรวจสอบรายละเอียดขนาดเต็ม"
                : "Click image to inspect in full resolution"}
            </span>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen &&
        isMounted &&
        !isBroken &&
        createPortal(
          <div
            className={styles.lightbox}
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className={styles.lightboxBg} />

            <button
              className={`${styles.closeBtn} clay-btn-rose`}
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close fullscreen"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {displayImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrev()
                  }}
                  className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
                  aria-label="Previous fullscreen image"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
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

            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.url}
                alt={
                  language === "th"
                    ? currentImage.title.th
                    : currentImage.title.en
                }
                className={styles.lightboxImage}
              />
              <div className={styles.lightboxCaption}>
                <h3 className={styles.lightboxTitle}>
                  {language === "th"
                    ? currentImage.title.th
                    : currentImage.title.en}
                </h3>
                <p className={styles.lightboxDesc}>
                  {language === "th"
                    ? currentImage.description.th
                    : currentImage.description.en}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
