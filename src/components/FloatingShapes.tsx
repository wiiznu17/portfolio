import React from "react"

export default function FloatingShapes() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Top-Left Organic Curved Fluid Wave matching Design.png */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "36vw",
          maxWidth: "540px",
          height: "48vh",
          maxHeight: "560px",
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 0 L 320 0 C 270 140 180 220 140 320 C 100 420 40 470 0 500 Z"
            fill="url(#topLeftWaveGrad)"
          />
          <defs>
            <linearGradient id="topLeftWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#e0e7ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#eff6ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mid Left: Soft Pink 3D Cone/Pyramid */}
      <div
        className="floating-shape-3"
        style={{
          position: "absolute",
          top: "46%",
          left: "3%",
          width: "56px",
          height: "56px",
          opacity: 0.65,
          display: "var(--display-md, block)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 15px 20px rgba(244,63,94,0.25))",
          }}
        >
          <defs>
            <linearGradient id="coneLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="coneRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
          </defs>
          <polygon points="50,15 15,75 50,85" fill="url(#coneLeft)" />
          <polygon points="50,15 50,85 85,75" fill="url(#coneRight)" />
        </svg>
      </div>

      {/* Mid Right: Pastel Blue 3D Prism/Triangle */}
      <div
        className="floating-shape-1"
        style={{
          position: "absolute",
          top: "54%",
          right: "4%",
          width: "68px",
          height: "68px",
          opacity: 0.7,
          display: "var(--display-md, block)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 15px 25px rgba(96,165,250,0.25))",
          }}
        >
          <defs>
            <linearGradient id="prismFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="prismSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <polygon points="20,20 80,40 50,80" fill="url(#prismFront)" />
          <polygon points="80,40 50,80 85,75" fill="url(#prismSide)" />
        </svg>
      </div>

      {/* Bottom Left: Pastel 3D Torus/Donut */}
      <div
        className="floating-shape-2"
        style={{
          position: "absolute",
          bottom: "12%",
          left: "3%",
          width: "80px",
          height: "80px",
          opacity: 0.7,
          display: "var(--display-lg, block)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 15px 20px rgba(16,185,129,0.25))",
          }}
        >
          <defs>
            <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="32"
            fill="none"
            stroke="url(#torusGrad)"
            strokeWidth="16"
          />
          <circle
            cx="50"
            cy="50"
            r="32"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            opacity="0.4"
            transform="translate(-2, -2)"
          />
        </svg>
      </div>

      {/* Bottom Right: Gold 3D Cube */}
      <div
        className="floating-shape-3"
        style={{
          position: "absolute",
          bottom: "8%",
          right: "4%",
          width: "60px",
          height: "60px",
          opacity: 0.7,
          display: "var(--display-md, block)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 15px 20px rgba(245,158,11,0.25))",
          }}
        >
          <defs>
            <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>
            <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
          <polygon points="50,15 85,35 50,55 15,35" fill="url(#cubeTop)" />
          <polygon points="15,35 50,55 50,90 15,70" fill="url(#cubeLeft)" />
          <polygon points="50,55 85,35 85,70 50,90" fill="url(#cubeRight)" />
        </svg>
      </div>
    </div>
  )
}
