"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {  FileText, Mail} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

function AboutSection() {
  return (
    <motion.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl text-center mb-16" >
        <Image src={"/profileAvatar.png"} alt="Yash Garg" width={100} height={100} className="mx-auto my-3" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Yash Garg</h1>
        <h2 className="text-xl md:text-2xl font-mono text-[var(--color-blue-400)] mb-4">Full Stack Developer</h2>
        <p className="flex gap-2 justify-center my-2">
          <Button variant={"outline"} className="rounded-xs hover:scale-103 transition-transform">
            <Link href="https://drive.google.com/file/d/1wMFjoYZUTdg0rs17RxET6tVH8vP9-9Xs/view?usp=sharing" className="flex gap-1 items-center">
              Resume <FileText />
            </Link>
          </Button>
          <Button variant={"outline"} className="rounded-xs hover:scale-103 transition-transform ">
            <Link href="mailto:yg292001@gmail.com" className="flex gap-1 items-center">
              Mail <Mail />
            </Link>
          </Button>
        </p>
        <p className="text-base md:text-lg text-[var(--foreground)] max-w-xl mx-auto whitespace-pre-wrap">
          A programmer who can fix annoying bugs, create something awesome, or make someone&apos;s dream a reality.</p>
      </motion.section>
  )
}

export default AboutSection
