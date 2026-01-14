"use client";
import React from 'react'
import { motion } from "framer-motion";
import skills from '@/data/skills';

function TechStackSection() {
  return (
    <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }} className="w-full max-w-2xl mb-8">
        <h3 className="text-xl font-semibold mb-4 text-left">Tech Stack</h3>
        <div className="overflow-hidden whitespace-nowrap relative w-full">
          <motion.div
            className="flex gap-4"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 70,
              ease: "linear",
              repeat: Infinity, 
              repeatType: "loop"
            }}
            style={{ width: "max-content" }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-[var(--border)] text-[var(--foreground)] rounded-sm hover:opacity-80"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>
  )
}

export default TechStackSection
