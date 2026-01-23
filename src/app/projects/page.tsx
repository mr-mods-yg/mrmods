import ProjectsSection from "@/components/custom/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <section className="w-full max-w-2xl mb-16">
        <Link className="font-bold text-lg underline" href={"/"}>Go back</Link>
        <h3 className="text-3xl md:text-4xl pt-4 border-t border-[#232323] border-dashed mt-5 font-bold tracking-tight">Projects</h3>
        <h3 className="text-base md:text-lg pt-5 tracking-tight">Here are the projects that I have completed or currently working with.</h3>

        <ProjectsSection isHomePage={false} />

        <h3 className="text-2xl md:text-3xl pt-4 border-t border-[#232323] border-dashed mt-5 font-bold tracking-tight">Past/Side Projects</h3>
        <h3 className="text-base md:text-lg py-4 tracking-tight">Here are some of the projects that I have made for fun and testing purposes.</h3>

        <ProjectsSection isHomePage={false} isSideProjects={true} />

      </section>

    </main>
  );
}
