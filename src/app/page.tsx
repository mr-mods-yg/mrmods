"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ProjectsSection from "@/components/custom/projects";

const narutoQuotes = [
  "I never go back on my word—that’s my ninja way!",
  "I’ll become Hokage, no matter what!",
  "I won’t let my friends get hurt.",
  "Believe it!",
  "I carry everyone’s hopes on my back.",
  "I’m not alone anymore.",
  "You’re not taking my bond away."
];

const sasukeQuotes = [
  "I walk my own path.",
  "My goal is revenge. Nothing more.",
  "I won’t let my past define me.",
  "You’re still too weak.",
  "I sever bonds… to grow stronger.",
  "Hatred is my fuel.",
  "I have my own version of justice."
];

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
      <motion.div initial={{ x: 50, opacity: 0 }}      // start off-screen right
        animate={{ x: 0, opacity: 1 }}       // move to center
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="w-full md:w-7/10 flex justify-end items-center gap-2 mb-8">
        {resolvedTheme === "dark" ?
          sasukeQuotes[Math.floor(Math.random() * sasukeQuotes.length)]
          : narutoQuotes[Math.floor(Math.random() * narutoQuotes.length)]}

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
      </motion.div>
      {/* ABOUT SECTION */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl text-center mb-16" >
        <Image src={"/profileAvatar.png"} alt="Yash Garg" width={100} height={100} className="mx-auto my-3" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Yash Garg</h1>
        <h2 className="text-xl md:text-2xl font-mono text-[var(--color-blue-400)] mb-4">Full Stack Developer</h2>
        <p className="flex gap-2 justify-center my-2">
          <Button variant={"outline"} className="hover:scale-103 transition-transform">
            <Link href="https://drive.google.com/file/d/1wMFjoYZUTdg0rs17RxET6tVH8vP9-9Xs/view?usp=sharing" className="flex gap-1 items-center">
              Resume <FileText />
            </Link>
          </Button>
          <Button variant={"outline"} className="hover:scale-103 transition-transform ">
            <Link href="mailto:yg292001@gmail.com" className="flex gap-1 items-center">
              Mail <Mail />
            </Link>
          </Button>
        </p>
        {/* <p className="text-[var(--foreground)] my-2">Email : <Link href="mailto:yg292001@gmail.com" prefetch={false} className="underline">yg292001@gmail.com</Link>{" :)"}</p> */}

        <p className="text-base md:text-lg text-[var(--foreground)] max-w-xl mx-auto whitespace-pre-wrap">
          A programmer who can fix annoying bugs, create something awesome, or make someone&apos;s dream a reality.</p>

      </motion.section>

      {/* TECH STACK SECTION */}
      <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl mb-16">
        <h3 className="text-lg font-semibold mb-4 text-left">Tech Stack</h3>
        <div className="overflow-hidden whitespace-nowrap relative w-full">
          <motion.div
            className="flex gap-4"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 70,      // speed of scroll
              ease: "linear",
              repeat: Infinity,  // infinite loop
              repeatType: "loop"
            }}
            style={{ width: "max-content" }}
          >
            {/* Duplicate list to make it loop seamlessly */}
            {[...skills, ...skills].map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-[var(--border)] text-[var(--foreground)] rounded-full hover:opacity-80"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}

      <ProjectsSection isHomePage={true} />
      {/* <section className="w-full max-w-2xl mb-8">
        <h3 className="text-base font-semibold mb-4 text-left flex gap-2">My Latest Resume - <Link className="flex gap-0.5 underline items-center" href={"https://drive.google.com/file/d/1wMFjoYZUTdg0rs17RxET6tVH8vP9-9Xs/view?usp=sharing"}>Google Drive <ExternalLink size={16} /></Link></h3>
        <h3 className="text-base font-semibold mb-4 text-left">Projects I have built - <Link className="underline" href={"/projects"}>/projects</Link></h3>
        <h3 className="text-base font-semibold mb-4 text-left">My Holopin badges - <Link className="underline" href={"/holopin"}>/holopin</Link></h3>
        <h3 className="text-base font-semibold mb-4 text-left">Check out my website - <Link className="underline" href={"https://www.driplist.in"}>DripList.in</Link> and my <Link className="underline" href={"https://www.driplist.in/u/mrmods"}>profile</Link> on it.</h3>
      </section> */}



      {/* BADGES SECTION */}
      <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl mb-16">
        <h3 className="text-lg font-semibold mb-2">Badges</h3>
        <Image src={'/holopin.png'} width={"600"} height={"200"} alt="holpoin board"></Image>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl border-t border-[#232323] pt-8">
        <div className="flex justify-start gap-4">
          <a href="https://github.com/mr-mods-yg" aria-label="GitHub" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Github />GitHub</a>
          <a href="https://www.linkedin.com/in/mr-mods/" aria-label="LinkedIn" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Linkedin />LinkedIn</a>
          <a href="https://x.com/mr_mods_yg" aria-label="X (Twitter)" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Twitter /> (Twitter)</a>
        </div>
        <div className="pt-10 text-lg">
          Thank you for visiting {"(๑ > ᴗ < ๑)"}
        </div>
      </motion.section>
    </main>
  );
}
