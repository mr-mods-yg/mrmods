import ProjectsSection from "@/components/custom/projects";
import HeroBar from "@/sections/hero-bar";
import AboutSection from "@/sections/about-section";
import GithubSection from "@/sections/github-section";
import TechStackSection from "@/sections/tech-stack";
import WorkSection from "@/sections/work-section";
import BadgeSection from "@/sections/badge-section";
import ContactSection from "@/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-5 sm:py-12">
      <HeroBar/>
      <AboutSection/>
      <TechStackSection/>
      <WorkSection/>
      <ProjectsSection isHomePage={true} />
      <GithubSection/>
      <BadgeSection/>
      <ContactSection/>
    </main>
  );
}
