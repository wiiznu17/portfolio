import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

import type { Viewport } from "next"

export const metadata: Metadata = {
  title: "Wissanu Rayayoi - Software Engineer Portfolio",
  description:
    "Computer Engineering graduate from Khon Kaen University. Specialized in backend development, distributed systems, and modern web architectures.",
  keywords: [
    "Wissanu Rayayoi",
    "Software Engineer",
    "Backend Developer",
    "Distributed Systems",
    "Khon Kaen University",
    "Portfolio",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "TypeScript",
  ],
  authors: [{ name: "Wissanu Rayayoi" }],
  icons: {
    icon: "/icon.svg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="antialiased overflow-x-hidden relative min-h-screen">{children}</body>
    </html>
  )
}
