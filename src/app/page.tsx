"use client";
import ProjectsSection from "@/components/About";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
