import ProjectsSection from "@/components/custom/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <section className="w-full max-w-2xl mb-16">
        <Link className="text-lg underline" href={"/"}>Go back</Link>
        <h3 className="text-3xl md:text-4xl mt-5 font-bold tracking-tight">Projects</h3>
        <h3 className="text-base md:text-lg my-5 tracking-tight">Here are some projects that I have completed in the past or am currently working on.</h3>

        <ProjectsSection isHomePage={false} />

        <h3 className="text-2xl md:text-3xl mt-5 font-bold tracking-tight">Past/Side Projects</h3>
        <h3 className="text-base md:text-lg my-5 tracking-tight">Here are some projects that I have made just for fun earlier in my career.</h3>

        <ProjectsSection isHomePage={false} isSideProjects={true} />

      </section>

    </main>
  );
}
