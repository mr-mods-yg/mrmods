"use client";
import React from 'react'
import { motion } from "framer-motion";

const workExperience = [
    {
        role: "Full Stack Developer Intern",
        company: "Helios",
        period: "Jul 2026 — Present",
        description: "Building and maintaining full stack web applications, collaborating with the team, and shipping features end to end.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "AWS", "Python"],
    },
]

function WorkSection() {
    return (
        <motion.section
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-2xl pt-4 border-t border-[#232323] border-dashed mb-8">
            <h3 className="text-xl font-semibold mb-4 text-left">Work Experience</h3>
            <div className="flex flex-col gap-6">
                {workExperience.map((job, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                            <h4 className="font-semibold">
                                {job.role} <span className="text-[var(--color-blue-600)] dark:text-[var(--color-blue-400)]">@ {job.company}</span>
                            </h4>
                            <span className="font-mono text-sm text-[var(--muted-foreground)]">{job.period}</span>
                        </div>
                        <p className="text-sm text-[var(--foreground)]">{job.description}</p>
                        <p className="flex gap-1 items-center flex-wrap">
                            {job.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 border border-[var(--border)] text-[var(--foreground)] rounded-sm text-xs">
                                    {tech}
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default WorkSection
