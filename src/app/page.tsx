import ProjectsSection from "@/components/projects";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
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
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      {/* ABOUT SECTION */}
      <section className="w-full max-w-2xl text-center mb-16">
        <Image src={"/profileAvatar.png"} alt="Yash Garg" width={100} height={100} className="mx-auto my-3" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Yash Garg</h1>
        <h2 className="text-xl md:text-2xl font-mono text-[var(--accent)] mb-4">Full Stack Developer</h2>
        <p className="text-gray-400 my-2">Email : <a href="mailto:yg292001@gmail.com" className="underline">yg292001@gmail.com</a>{" :)"}</p>

        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto whitespace-pre-wrap">
          I like to build applications with great user functionality. I am passionate about my projects and I am always looking to learn new things in my day to day life.
        </p>

      </section>

      {/* TECH STACK SECTION */}
      <section className="w-full max-w-2xl mb-16">
        <h3 className="text-lg font-semibold mb-4 text-left">Tech Stack</h3>
        <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-300">
          {skills.map((skill, index) => <li key={index} className="px-3 py-1 bg-[#18181b] rounded-full hover:opacity-80">{skill}</li>)}
        </ul>
      </section>
      {/* PROJECTS SECTION */}
      <ProjectsSection isHomePage={true}/>
      <section className="w-full max-w-2xl mb-16">
      <h3 className="text-lg font-semibold mb-2">Badges</h3>

        <Image src={'/holopin.png'} width={"600"} height={"200"} alt="holpoin board"></Image>
      </section>
      {/* CONTACT SECTION */}
      <section className="w-full max-w-2xl text-center border-t border-[#232323] pt-8">
        <h3 className="text-lg font-semibold mb-2">Contact</h3>
        <p className="text-gray-400 mb-2">Email: <a href="mailto:yg292001@gmail.com" className="underline">yg292001@gmail.com</a></p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/mr-mods-yg" aria-label="GitHub" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Github/>GitHub</a>
          <a href="https://www.linkedin.com/in/mr-mods/" aria-label="LinkedIn" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Linkedin/>LinkedIn</a>
          <a href="https://x.com/mr_mods_yg" aria-label="X (Twitter)" className="p-2 border rounded-md hover:bg-blue-800 hover:text-white"><Twitter/> (Twitter)</a>
        </div>
      </section>
    </main>
  );
}
