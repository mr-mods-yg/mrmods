"use client";
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

function BadgeSection() {
  return (
    <motion.section initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }} className="w-full max-w-2xl pt-4 mb-8 flex flex-col border-t border-[#232323] border-dashed gap-2">
        <h3 className="text-xl font-semibold mb-2">Badges</h3>
        <Image src={'/holopin.png'} width={"600"} height={"200"} className="w-full object-cover" alt="holpoin board"></Image>
      </motion.section>
  )
}

export default BadgeSection
