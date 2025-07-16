import ProjectsSection from "@/components/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <Link href="/" className="text-xl font-bold mb-4 underline tracking-tight">Go Back</Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-18 tracking-tight">My Projects</h1>
      {/* PROJECTS SECTION */}
      <ProjectsSection isHomePage={false}/>
      
    </main>
  );
}
