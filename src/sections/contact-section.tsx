"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Twitter } from 'lucide-react';

function ContactSection() {
    return (
        <motion.section initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="w-full max-w-2xl border-t border-[#232323] border-dashed pt-8">
            <h3 className="text-xl font-semibold mb-2">Socials</h3>

            <div className="flex flex-wrap justify-start gap-4">
                <a href="https://github.com/mr-mods-yg" aria-label="GitHub" className="flex items-center gap-2 p-2 border rounded-xs"><Github />GitHub</a>
                <a href="https://www.linkedin.com/in/mr-mods/" aria-label="LinkedIn" className="flex items-center gap-2 p-2 border rounded-xs"><Linkedin className='text-blue-500' />LinkedIn</a>
                <a href="https://x.com/mr_mods_yg" aria-label="X (Twitter)" className="flex items-center gap-2 p-2 border rounded-xs"><Twitter className='text-blue-500' />Twitter</a>
                <a href="https://github.com/sponsors/mr-mods-yg" aria-label="Sponsor" className="flex items-center gap-2 p-2 border rounded-xs"><Heart className='text-pink-500' />Sponsor</a>
            </div>
            <div className="mt-10 flex justify-between w-full pt-5 text-base md:text-lg border-t border-[#232323]">
                <p>© {new Date().getFullYear()} Yash Garg.</p>
                <p>{"(๑ > ᴗ < ๑)"}</p>
            </div>
        </motion.section>
    )
}

export default ContactSection
