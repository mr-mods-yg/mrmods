"use client";
import React from 'react'
import { motion } from "framer-motion";
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
function GithubSection() {
    const { resolvedTheme } = useTheme();
    return (
        <motion.section initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="w-full max-w-2xl mb-16 flex flex-col gap-2 items-center">
            <h3 className="text-xl font-semibold mb-2 w-full">Github Contributions</h3>
            <GitHubCalendar
                username="mr-mods-yg"
                colorScheme={resolvedTheme as "light" | "dark"}
                blockSize={12}
                blockMargin={0.5}
            />
        </motion.section>
    )
}

export default GithubSection
