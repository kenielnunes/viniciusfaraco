"use client";

import { useEffect, useRef } from "react";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { experiences } from "@/shared/experiences";
import { certifications } from "@/shared/certifications";
import { academicProjects } from "@/shared/academicProjects";

export default function HomePage() {
  // Refs para animações de scroll
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Função para animar elementos quando entram na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observar todos os elementos com a classe .animate-on-scroll
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection aboutRef={aboutRef} />

      {/* Experience Section */}
      <ExperienceSection
        experienceRef={experienceRef}
        experiences={experiences}
      />

      {/* Education Section */}
      <EducationSection
        educationRef={educationRef}
        certifications={certifications}
        academicProjects={academicProjects}
      />

      {/* Skills Section */}
      <SkillsSection skillsRef={skillsRef} />

      {/* Contact Section */}
      <ContactSection contactRef={contactRef} />
    </div>
  );
}
