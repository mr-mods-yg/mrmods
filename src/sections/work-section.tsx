"use client";
import React from 'react'
import { motion } from "framer-motion";

interface WorkExperienceItem {
    role: string;
    company: string;
    period: string;
    description?: string;
    points?: string[];
    technologies: string[];
}

const workExperience: WorkExperienceItem[] = [
    {
        role: "Full Stack Developer Intern",
        company: "Helios",
        period: "Jul 2026 — Present",
        points: [
            "Developed and maintained full-stack web applications using Next.js, React, JavaScript, contributing to both frontend and backend development.",
            "Optimized frontend API calls and data-fetching workflows, cutting redundant requests by 35% and boosting application performance metrics.",
        ],
        technologies: ["Next.js", "JavaScript", "Tailwind CSS", "MongoDB", "AWS", "Python", "Linux"],
    },
]

function WorkSection() {
    return (
        <motion.section
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl pt-4 border-t border-[#232323] border-dashed mb-8">
            <h3 className="text-xl font-semibold mb-4 text-left">Work Experience</h3>
            <div className="flex flex-col gap-6">
                {workExperience.map((job, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                            <h4 className="font-semibold">
                                {job.company} <span className="opacity-75 font-normal">/ {job.role}</span>
                            </h4>
                            <span className="text-sm text-[var(--muted-foreground)] font-normal">{job.period}</span>
                        </div>
                        {job.points && job.points.length > 0 ? (
                            <ul className="list-disc list-outside pl-4 text-sm text-[var(--foreground)] space-y-1 my-1">
                                {job.points.map((point, pIdx) => (
                                    <li key={pIdx}>{point}</li>
                                ))}
                            </ul>
                        ) : job.description ? (
                            <p className="text-sm text-[var(--foreground)]">{job.description}</p>
                        ) : null}
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default WorkSection
