import Image from "next/image"
import Link from "next/link"

function ProjectsSection({ isHomePage }: { isHomePage: boolean }) {
    return <section className="w-full max-w-2xl mb-16">
        <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-[#18181b] rounded-lg p-5 text-left border border-[#232323] hover:scale-105 transition-transform">
                <div className="mb-4" style={{ position: 'relative', width: '100%', height: '160px' }}>
                    <Image
                        src="/driplist.png"
                        alt="DripList Image"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <h4 className="font-bold mb-1">DripList <span className="inline-flex items-center mx-2 rounded-md bg-muted px-2.5 py-0.5 text-sm font-medium text-green-500 ring-1 ring-inset ring-green-500">
                    Work in Progress
                </span></h4>
                <p className="text-gray-400 text-sm mb-2">A platform for tracking your watched content, sharing reviews and discovering content built using Next.js</p>
                <a href="https://driplist.in/" className="underline mr-3 text-[var(--accent)] text-md">DripList.in</a>
                {/* <a href="https://github.com/mr-mods-yg/driplist-next" className="mr-3 underline text-[var(--accent)] text-md">Github</a> */}
            </div>
            <div className="bg-[#18181b] rounded-lg p-5 text-left border border-[#232323] hover:scale-105 transition-transform">
                <div className="mb-4" style={{ position: 'relative', width: '100%', height: '160px' }}>
                    <Image
                        src="/virtualmeet.png"
                        alt="VirtualMeet Image"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <h4 className="font-bold mb-1">VirtualMeet</h4>
                <p className="text-gray-400 text-sm mb-2">A virtual event management platform where you can create, manage and explore events built using MERN stack</p>
                <a href="https://virtual-meet-psi.vercel.app/" className="underline mr-3 text-[var(--accent)] text-md">Demo</a>
                <a href="https://github.com/mr-mods-yg/VirtualMeet" className="mr-3 underline text-[var(--accent)] text-md">Github</a>
            </div>
            <div className="bg-[#18181b] rounded-lg p-5 text-left border border-[#232323] hover:scale-105 transition-transform">
                <div className="mb-4" style={{ position: 'relative', width: '100%', height: '160px' }}>
                    <Image
                        src="/shadowtalk.png"
                        alt="ShadowTalk Image"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <h4 className="font-bold mb-1">ShadowTalk</h4>
                <p className="text-gray-400 text-sm mb-2">A real-time room based chat platform with additional functionality of sending images built with MERN stack</p>
                <a href="https://shadow-talk-chat-app.vercel.app/" className="mr-3 underline text-[var(--accent)] text-md">Demo</a>
                <a href="https://github.com/mr-mods-yg/shadow-talk-chat-app" className="mr-3 underline text-[var(--accent)] text-md">Github</a>
            </div>
            <div className="bg-[#18181b] rounded-lg p-5 text-left border border-[#232323] hover:scale-105 transition-transform">
                <div className="mb-4" style={{ position: 'relative', width: '100%', height: '160px' }}>
                    <Image
                        src="/bytesEditor.png"
                        alt="BytesEditor Image"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <h4 className="font-bold mb-1">Bytes code editor</h4>
                <p className="text-gray-400 text-sm mb-2">A simple code editor for creating java programs built with Java, Swing(AWT).</p>
                <a href="https://github.com/mr-mods-yg/Bytes-code-editor" className="mr-3 underline text-[var(--accent)] text-md">Github</a>
            </div>
            {isHomePage ?
                <Link href="/projects" className="mt-4 underline block">View All Projects</Link>
                :
                <></>
            }
        </div>
    </section>
}

export default ProjectsSection