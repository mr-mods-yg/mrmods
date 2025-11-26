"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ProjectsSection from "@/components/custom/projects";
import { GitHubCalendar } from "react-github-calendar";
import { Clock } from "@/components/custom/clock";

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
    <main className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 py-5 sm:py-12 bg-[var(--background)] text-[var(--foreground)]">

      {/* Upper Bar (Clock + Toggle Theme + Github) */}
      <motion.section initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="w-full max-w-2xl text-center mb-8 flex justify-between items-center gap-2">
        <Clock />
        <span className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            className="rounded-xs"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline"
            size="icon"
            className="rounded-xs"><Github /></Button>
        </span>

      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl text-center mb-16" >
        <Image src={"/profileAvatar.png"} alt="Yash Garg" width={100} height={100} className="mx-auto my-3" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Yash Garg</h1>
        <h2 className="text-xl md:text-2xl font-mono text-[var(--color-blue-400)] mb-4">Full Stack Developer</h2>
        <p className="flex gap-2 justify-center my-2">
          <Button variant={"outline"} className="rounded-xs hover:scale-103 transition-transform">
            <Link href="https://drive.google.com/file/d/1wMFjoYZUTdg0rs17RxET6tVH8vP9-9Xs/view?usp=sharing" className="flex gap-1 items-center">
              Resume <FileText />
            </Link>
          </Button>
          <Button variant={"outline"} className="rounded-xs hover:scale-103 transition-transform ">
            <Link href="mailto:yg292001@gmail.com" className="flex gap-1 items-center">
              Mail <Mail />
            </Link>
          </Button>
        </p>
        <p className="text-base md:text-lg text-[var(--foreground)] max-w-xl mx-auto whitespace-pre-wrap">
          A programmer who can fix annoying bugs, create something awesome, or make someone&apos;s dream a reality.</p>
      </motion.section>

      {/* TECH STACK SECTION */}
      <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl mb-16">
        <h3 className="text-xl font-semibold mb-4 text-left">Tech Stack</h3>
        <div className="overflow-hidden whitespace-nowrap relative w-full">
          <motion.div
            className="flex gap-4"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 70,
              ease: "linear",
              repeat: Infinity, 
              repeatType: "loop"
            }}
            style={{ width: "max-content" }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-[var(--border)] text-[var(--foreground)] rounded-sm hover:opacity-80"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <ProjectsSection isHomePage={true} />

      {/* GITHUB SECTION */}
      <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl mb-16 flex flex-col gap-2 items-center">
        <h3 className="text-xl font-semibold mb-2 w-full">Github Contributions</h3>
        <GitHubCalendar
          username="mr-mods-yg"
          colorScheme={resolvedTheme as "light" | "dark"}
          blockSize={12}
          blockMargin={0.5}
        />
      </motion.section>

      {/* BADGES SECTION */}
      <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl mb-8 flex flex-col gap-2">
        <h3 className="text-xl font-semibold mb-2">Badges</h3>
        <Image src={'/holopin.png'} width={"600"} height={"200"} className="w-full object-cover" alt="holpoin board"></Image>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl border-t border-[#232323] pt-8">
        <div className="flex justify-start gap-4">
          <a href="https://github.com/mr-mods-yg" aria-label="GitHub" className="p-2 border rounded-xs hover:bg-blue-800 hover:text-white"><Github />GitHub</a>
          <a href="https://www.linkedin.com/in/mr-mods/" aria-label="LinkedIn" className="p-2 border rounded-xs hover:bg-blue-800 hover:text-white"><Linkedin />LinkedIn</a>
          <a href="https://x.com/mr_mods_yg" aria-label="X (Twitter)" className="p-2 border rounded-xs hover:bg-blue-800 hover:text-white"><Twitter /> (Twitter)</a>
        </div>
        <div className="pt-10 text-xl">
          Thank you for visiting {"(๑ > ᴗ < ๑)"}
        </div>
      </motion.section>
    </main>
  );
}
