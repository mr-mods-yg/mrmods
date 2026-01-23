"use client";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
function ProjectsSection({ isHomePage, isSideProjects }: { isHomePage: boolean, isSideProjects?: boolean }) {
    if (isSideProjects) {
        return <motion.section initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl mb-8">

            <div className="grid gap-6 sm:grid-cols-2">
                <ProjectCard
                    imagePath="/image-dither.png"
                    imageAlt="Torrent Search Image"
                    name="Image dither"
                    description="An image modification tool that can be used to dither a image using various algorithms and export the result."
                    technologlies={["NextJS", "TypeScript", "TailwindCSS"]}
                    liveURL="https://dither-image-five.vercel.app/"
                    githubURL="https://github.com/mr-mods-yg/ditherImage"
                />
                <ProjectCard
                    imagePath="/torrent-search.png"
                    imageAlt="Torrent Search Image"
                    name="Torrent Search"
                    description="A simple torrent search client built using Flask (Python) that provides the service using public APIs."
                    technologlies={["Python", "Flask", "REST API"]}
                    liveURL="https://torrent-search-pi.vercel.app/"
                    githubURL="https://github.com/mr-mods-yg/torrent-search"
                />
                <ProjectCard
                    imagePath="/discord-moderation.png"
                    imageAlt="Discord Moderation bot Image"
                    name="Discord Moderation Bot"
                    description="A discord bot that helps server owners and administrators manage their online communities on Discord."
                    technologlies={["Python", "discord.py", "REST API"]}
                    githubURL="https://github.com/mr-mods-yg/moderation-fun-bot-python"
                />

            </div>
        </motion.section>
    }
    return <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className={`w-full max-w-2xl pt-4 ${isHomePage && "border-t border-[#232323] border-dashed"} mb-8`}>
        {isHomePage && <h3 className="text-xl font-semibold mb-2 text-start">Featured Projects</h3>}
        <div className="grid gap-6 sm:grid-cols-2">
            <ProjectCard
                imagePath="/driplist.png"
                imageAlt="DripList Image"
                name="DripList"
                description="A social platform for tracking your watched content, sharing reviews and discovering content and its opinions."
                technologlies={["NextJS", "TypeScript", "TailwindCSS", "shadcn/ui", "Prisma", "PostgreSQL", "NextAuth.js", "Zustand"]}
                liveURL="https://driplist.in/"
            />
            <ProjectCard
                imagePath="/open-notion-landing.png"
                imageAlt="Open Notion Image"
                name="Open Notion"
                description="A note-taking platform similar to notion which has block based editor and slash commands made from scratch."
                technologlies={["NextJS", "TypeScript", "TailwindCSS", "shadcn/ui", "Prisma", "Better Auth", "TanStack query"]}
                liveURL="https://open-notion.vercel.app"
                githubURL="https://github.com/mr-mods-yg/open-notion"
                isWorkInProgress
            />
            <ProjectCard
                imagePath="/vernaan.png"
                imageAlt="Vernaan Image"
                name="Vernaan - Landing page"
                description="I made this landing page as an assignment in three days. Figma design was given to me, I made it look similar, resposive and functional"
                technologlies={["NextJS", "TypeScript", "TailwindCSS"]}
                liveURL="https://vernaan.vercel.app/"
                githubURL="https://github.com/mr-mods-yg/ez-labs-vernaan"
            />
            <ProjectCard
                imagePath="/shadow-talk.png"
                imageAlt="ShadowTalk Image"
                name="ShadowTalk"
                description="A real-time room based chat platform with functionalities such as typing indicator and sending images."
                technologlies={["ReactJS", "TailwindCSS", "ExpressJS", "Socket.io", "DaisyUI"]}
                liveURL="https://shadow-talk-chat-app.vercel.app/"
                githubURL="https://github.com/mr-mods-yg/shadow-talk-chat-app"
            />


            {!isHomePage && <>
                <ProjectCard
                    imagePath="/virtual-meet.png"
                    imageAlt="VirtualMeet Image"
                    name="VirtualMeet"
                    description="A virtual event management platform where you can create, manage and explore virtual events and meetings."
                    technologlies={["ReactJS", "MongoDB", "TailwindCSS", "ExpressJS", "Mongoose ORM"]}
                    liveURL="https://virtual-meet-psi.vercel.app/"
                    githubURL="https://github.com/mr-mods-yg/VirtualMeet"
                />
                <ProjectCard
                    imagePath="/bytes-editor.png"
                    imageAlt="BytesEditor Image"
                    name="Bytes code editor"
                    description="A simple code editor for creating, modifiying or/and debugging java programs."
                    technologlies={["Java", "Swing(AWT)", "File Handling", "Terminal Management"]}
                    githubURL="https://github.com/mr-mods-yg/Bytes-code-editor"
                />

            </>}
        </div>
        {isHomePage ?
            <Link href="/projects" className="mt-4 w-full flex justify-end underline">View All Projects</Link>
            :
            <></>
        }
    </motion.section>
}

function TechnolgiesBadge({ text }: { text: string }) {
    return <span className="py-1 px-2 outline-1 rounded-xs">{text}</span>
}

function ProjectCard({ imagePath, imageAlt, name, isWorkInProgress, description, technologlies, liveURL, githubURL }: {
    imagePath: string,
    imageAlt: string,
    name: string,
    isWorkInProgress?: boolean,
    description: string,
    technologlies: string[],
    liveURL?: string,
    githubURL?: string,
}) {
    return <div className="bg-[var(--card)] text-[var(--card-foreground)] rounded-lg text-left">
        <div className="mb-4 relative aspect-video">
            <Image
                src={imagePath}
                alt={imageAlt}
                fill
                className="h-full w-full rounded-lg object-cover"
            />
        </div>
        <div className="px-4 pb-2">
            <h4 className="font-bold mb-1">{name}
                {isWorkInProgress && isWorkInProgress === true && <span className="inline-flex items-center mx-2 rounded-md bg-muted px-2.5 py-0.5 text-sm font-medium text-green-500 ring-1 ring-inset ring-green-500">
                    In Progress
                </span>}</h4>
            <p className="text-sm mb-2">{description}</p>
            <p className="text-sm mb-2 flex gap-1 items-center flex-wrap">
                {technologlies.map((technologlies) => <TechnolgiesBadge key={technologlies} text={technologlies} />)}
            </p>
            <p className="flex gap-1">
                {liveURL && <a href={liveURL} className="underline mr-3 text-[var(--accent)] text-md flex">Live</a>}
                {githubURL && <a href={githubURL} className="mr-3 underline text-[var(--accent)] text-md">Github</a>}
            </p>

        </div>
    </div>
}
export default ProjectsSection