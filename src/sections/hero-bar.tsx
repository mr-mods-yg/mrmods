"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Clock } from "@/components/custom/clock";
import { Button } from "@/components/ui/button";
import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from 'next-themes';
import Link from 'next/link';

function HeroBar() {
  const { theme, setTheme } = useTheme();
  return (
    <motion.section initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
      className="w-full max-w-2xl text-center mb-8 flex justify-between items-center gap-2">
      <Clock />
      <span className="flex gap-1">
        <Button
          variant="outline"
          size="icon"
          className="rounded-xs"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Link href={"https://github.com/mr-mods-yg/mrmods"}>
          <Button variant="outline"
            size="icon"
            className="rounded-xs"><Github />
          </Button>
        </Link>
      </span>

    </motion.section>
  )
}

export default HeroBar
