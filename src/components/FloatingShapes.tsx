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
      {/* Top Left: Purple 3D Code Icon </ > */}
      <div
        className="floating-shape-1"
        style={{
          position: "absolute",
          top: "15%",
          left: "6%",
          width: "96px",
          height: "96px",
          opacity: 0.9,
          display: "var(--display-lg, block)",
        }}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 15px 20px rgba(168,85,247,0.35))",
          }}
        >
          <defs>
            <linearGradient
              id="purple3D"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#d8b4fe"
              />
              <stop
                offset="50%"
                stopColor="#a855f7"
              />
              <stop
                offset="100%"
                stopColor="#7e22ce"
              />
            </linearGradient>
            <linearGradient
              id="purple3DShadow"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#4c1d95"
              />
              <stop
                offset="100%"
                stopColor="#2e1065"
              />
            </linearGradient>
          </defs>
          <path
            d="M45 40 L25 60 L45 80"
            fill="none"
            stroke="url(#purple3DShadow)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(3, 5)"
          />
          <path
            d="M75 40 L95 60 L75 80"
            fill="none"
            stroke="url(#purple3DShadow)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(3, 5)"
          />
          <path
            d="M45 40 L25 60 L45 80"
            fill="none"
            stroke="url(#purple3D)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M75 40 L95 60 L75 80"
            fill="none"
            stroke="url(#purple3D)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Top Right: Purple/Blue 3D Database Cylinder */}
      <div
        className="floating-shape-2"
        style={{
          position: "absolute",
          top: "14%",
          right: "7%",
          width: "96px",
          height: "112px",
          opacity: 0.9,
          display: "var(--display-lg, block)",
        }}
      >
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 20px 25px rgba(139,92,246,0.35))",
          }}
        >
          <defs>
            <linearGradient
              id="cylinderGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#c084fc"
              />
              <stop
                offset="30%"
                stopColor="#a78bfa"
              />
              <stop
                offset="70%"
                stopColor="#818cf8"
              />
              <stop
                offset="100%"
                stopColor="#6366f1"
              />
            </linearGradient>
            <linearGradient
              id="cylinderTop"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#e9d5ff"
              />
              <stop
                offset="100%"
                stopColor="#c084fc"
              />
            </linearGradient>
          </defs>
          <path
            d="M15 80 V95 C15 105, 85 105, 85 95 V80"
            fill="url(#cylinderGrad)"
          />
          <ellipse
            cx="50"
            cy="80"
            rx="35"
            ry="12"
            fill="url(#cylinderTop)"
          />
          <path
            d="M15 50 V65 C15 75, 85 75, 85 65 V50"
            fill="url(#cylinderGrad)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="35"
            ry="12"
            fill="url(#cylinderTop)"
          />
          <path
            d="M15 20 V35 C15 45, 85 45, 85 35 V20"
            fill="url(#cylinderGrad)"
          />
          <ellipse
            cx="50"
            cy="20"
            rx="35"
            ry="12"
            fill="url(#cylinderTop)"
          />
        </svg>
      </div>

      {/* Mid Left: Soft Pink 3D Cone/Pyramid */}
      <div
        className="floating-shape-3"
        style={{
          position: "absolute",
          top: "48%",
          left: "4%",
          width: "64px",
          height: "64px",
          opacity: 0.8,
          display: "var(--display-md, block)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 15px 20px rgba(244,63,94,0.3))",
          }}
        >
          <defs>
            <linearGradient
              id="coneLeft"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#fbcfe8"
              />
              <stop
                offset="100%"
                stopColor="#f43f5e"
              />
            </linearGradient>
            <linearGradient
              id="coneRight"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#fda4af"
              />
              <stop
                offset="100%"
                stopColor="#be123c"
              />
            </linearGradient>
          </defs>
          <polygon
            points="50,15 15,75 50,85"
            fill="url(#coneLeft)"
          />
          <polygon
            points="50,15 50,85 85,75"
            fill="url(#coneRight)"
          />
        </svg>
      </div>

      {/* Mid Right: Pastel Blue 3D Prism/Triangle */}
      <div
        className="floating-shape-1"
        style={{
          position: "absolute",
          top: "58%",
          right: "5%",
          width: "80px",
          height: "80px",
          opacity: 0.8,
          display: "var(--display-md, block)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 15px 25px rgba(96,165,250,0.3))",
          }}
        >
          <defs>
            <linearGradient
              id="prismFront"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#93c5fd"
              />
              <stop
                offset="100%"
                stopColor="#3b82f6"
              />
            </linearGradient>
            <linearGradient
              id="prismSide"
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
                stopColor="#1d4ed8"
              />
            </linearGradient>
          </defs>
          <polygon
            points="20,20 80,40 50,80"
            fill="url(#prismFront)"
          />
          <polygon
            points="80,40 50,80 85,75"
            fill="url(#prismSide)"
          />
        </svg>
      </div>

      {/* Bottom Left: Pastel 3D Torus/Donut */}
      <div
        className="floating-shape-2"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "3%",
          width: "96px",
          height: "96px",
          opacity: 0.8,
          display: "var(--display-lg, block)",
        }}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 20px 25px rgba(129,140,248,0.35))",
          }}
        >
          <defs>
            <radialGradient
              id="torusGlow"
              cx="35%"
              cy="35%"
              r="65%"
            >
              <stop
                offset="0%"
                stopColor="#e0e7ff"
              />
              <stop
                offset="30%"
                stopColor="#c7d2fe"
              />
              <stop
                offset="70%"
                stopColor="#818cf8"
              />
              <stop
                offset="100%"
                stopColor="#4f46e5"
              />
            </radialGradient>
          </defs>
          <path
            d="M 60,20 A 40,40 0 1,0 60,100 A 40,40 0 1,0 60,20 Z M 60,45 A 15,15 0 1,1 60,75 A 15,15 0 1,1 60,45 Z"
            fill="url(#torusGlow)"
          />
        </svg>
      </div>

      {/* Bottom Right: Soft Pastel 3D Sphere */}
      <div
        className="floating-shape-3"
        style={{
          position: "absolute",
          bottom: "8%",
          right: "4%",
          width: "80px",
          height: "80px",
          opacity: 0.8,
          display: "var(--display-lg, block)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter:
              "drop-shadow(0 20px 30px rgba(244,143,177,0.4))",
          }}
        >
          <defs>
            <radialGradient
              id="sphere3D"
              cx="30%"
              cy="30%"
              r="70%"
            >
              <stop
                offset="0%"
                stopColor="#fff1f2"
              />
              <stop
                offset="25%"
                stopColor="#ffe4e6"
              />
              <stop
                offset="65%"
                stopColor="#fda4af"
              />
              <stop
                offset="100%"
                stopColor="#f43f5e"
              />
            </radialGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="url(#sphere3D)"
          />
        </svg>
      </div>

      {/* Inline styles to handle media queries for responsiveness */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 1024px) {
            :root {
              --display-lg: none;
            }
          }
          @media (max-width: 768px) {
            :root {
              --display-md: none;
            }
          }
        `,
        }}
      />
    </div>
  )
}
