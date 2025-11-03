"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const skills = [
    'React',
    'Next.js',
    'Node.js',
    'Javascript',
    'TypeScript',
    'MongoDB',
    'Tailwind CSS',
    'Zustand',
    'Postgres',
    'Prisma',
    'Socket.io',
    'Vercel',
    'Python',
    'Java',
    'Unity',
    'Blender'
  ]
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full md:w-7/10 flex justify-end items-center gap-2 mb-8">
        {resolvedTheme === "dark" ?
          "I walk the path of shadows 🌒"
          : "I shine with the power of the sun ☀️"}

        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      {/* ABOUT SECTION */}
      <section className="w-full max-w-2xl text-center mb-16">
        <Image src={"/profileAvatar.png"} alt="Yash Garg" width={100} height={100} className="mx-auto my-3" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Yash Garg</h1>
        <h2 className="text-xl md:text-2xl font-mono text-[var(--color-blue-400)] mb-4">Full Stack Developer</h2>
        <p className="text-[var(--foreground)] my-2">Email : <Link href="mailto:yg292001@gmail.com" prefetch={false} className="underline">yg292001@gmail.com</Link>{" :)"}</p>

        <p className="text-base md:text-lg text-[var(--foreground)] max-w-xl mx-auto whitespace-pre-wrap">
          I am a programmer who can fix annoying bugs, create something awesome, or make someone&apos;s dream a reality.</p>

      </section>

      {/* TECH STACK SECTION */}
      <section className="w-full max-w-2xl mb-16">
        <h3 className="text-lg font-semibold mb-4 text-left">Tech Stack</h3>
        <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-300">
          {skills.map((skill, index) => <li key={index} className="px-3 py-1 border border-[var(--border)] text-[var(--foreground)] rounded-full hover:opacity-80">{skill}</li>)}
        </ul>
      </section>

      {/* PROJECTS SECTION */}
      <section className="w-full max-w-2xl mb-8">
        <h3 className="text-base font-semibold mb-4 text-left flex gap-2">My Latest Resume - <Link className="flex gap-0.5 underline items-center" href={"https://drive.google.com/file/d/1wMFjoYZUTdg0rs17RxET6tVH8vP9-9Xs/view?usp=sharing"}>Google Drive <ExternalLink size={16} /></Link></h3>
        <h3 className="text-base font-semibold mb-4 text-left">Projects I have built - <Link className="underline" href={"/projects"}>/projects</Link></h3>
        <h3 className="text-base font-semibold mb-4 text-left">My Holopin badges - <Link className="underline" href={"/holopin"}>/holopin</Link></h3>
        <h3 className="text-base font-semibold mb-4 text-left">Check out my website - <Link className="underline" href={"https://www.driplist.in"}>DripList.in</Link> and my <Link className="underline" href={"https://www.driplist.in/u/mrmods"}>profile</Link> on it.</h3>
      </section>
      {/* <ProjectsSection isHomePage={true} /> */}
      {/* BADGES SECTION */}
      {/* <section className="w-full max-w-2xl mb-16">
        <h3 className="text-lg font-semibold mb-2">Badges</h3>
        <Image src={'/holopin.png'} width={"600"} height={"200"} alt="holpoin board"></Image>
      </section> */}

      {/* CONTACT SECTION */}
      <section className="w-full max-w-2xl border-t border-[#232323] pt-8">
        <div className="flex justify-start gap-4">
          <a href="https://github.com/mr-mods-yg" aria-label="GitHub" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Github />GitHub</a>
          <a href="https://www.linkedin.com/in/mr-mods/" aria-label="LinkedIn" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Linkedin />LinkedIn</a>
          <a href="https://x.com/mr_mods_yg" aria-label="X (Twitter)" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Twitter /> (Twitter)</a>
        </div>
      </section>
    </main>
  );
}
