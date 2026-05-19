import React from "react";
import Mascot from "@/components/Mascot";
import FloatingShapes from "@/components/FloatingShapes";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import AdditionalInfo from "@/components/AdditionalInfo/AdditionalInfo";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* Dynamic Background decor shapes */}
      <FloatingShapes />

      {/* Interactive Mascot bot */}
      <Mascot />

      {/* Main Glassmorphic Navigation */}
      <Navbar />

      {/* Central Content Area */}
      <main className="container-max py-8 flex flex-col gap-16 md:gap-24" style={{ display: "flex", flexDirection: "column", gap: "5rem", paddingBottom: "4rem" }}>
        {/* About / Hero Details */}
        <Hero />

        {/* Work Intern History */}
        <Experience />

        {/* Dynamic Project Portfolios */}
        <Projects />

        {/* Tech Badges Skills */}
        <Skills />

        {/* Academic Details / Languages */}
        <AdditionalInfo />

        {/* Interactive Form Contact Area */}
        <Contact />

        {/* Simple physical Footer copyright details */}
        <Footer />
      </main>
    </>
  );
}
