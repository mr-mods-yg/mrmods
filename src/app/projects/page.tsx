import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <Link href="/" className="text-xl font-bold mb-4 underline tracking-tight">Go Back</Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-18 tracking-tight">My Projects</h1>
      {/* PROJECTS SECTION */}
      <section className="w-full max-w-2xl mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-[#18181b] rounded-lg p-5 text-left border border-[#232323]">
            <h4 className="font-bold mb-1">VirtualMeet</h4>
            <p className="text-gray-400 text-sm mb-2">A virtual event management platform built using MERN stack.</p>
            <a href="https://virtual-meet-psi.vercel.app/" className="underline mr-3 text-[var(--accent)] text-md">Demo</a>
            <a href="https://github.com/mr-mods-yg/VirtualMeet" className="mr-3 underline text-[var(--accent)] text-md">Github</a>
          </div>
          <div className="bg-[#18181b] rounded-lg p-5 text-left border border-[#232323]">
            <h4 className="font-bold mb-1">ShadowTalk</h4>
            <p className="text-gray-400 text-sm mb-2">A real-time room based chat platform built with MERN stack.</p>
            <a href="https://shadow-talk-chat-app.vercel.app/" className="mr-3 underline text-[var(--accent)] text-md">Demo</a>
            <a href="https://github.com/mr-mods-yg/shadow-talk-chat-app" className="mr-3 underline text-[var(--accent)] text-md">Github</a>
          </div>

          <div className="bg-[#18181b] rounded-lg p-5 text-left border border-[#232323]">
            <h4 className="font-bold mb-1">Bytes code editor</h4>
            <p className="text-gray-400 text-sm mb-2">A simple code editor for creating java programs built with Java, Swing(AWT).</p>
            <a href="https://github.com/mr-mods-yg/Bytes-code-editor" className="mr-3 underline text-[var(--accent)] text-md">Github</a>
          </div>
        </div>
      </section>
      
    </main>
  );
}
