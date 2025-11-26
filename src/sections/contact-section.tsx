"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from 'lucide-react';

function ContactSection() {
    return (
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
    )
}

export default ContactSection
