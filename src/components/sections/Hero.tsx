"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Code2, Database, Smartphone, CodeSquare } from "lucide-react";

const specialties = [
  { label: "Web Development", icon: Code2 },
  { label: "Mobile Development", icon: Smartphone },
  { label: "Database Engineering", icon: Database },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-12 -z-10 size-[28rem] rounded-full border border-accent-secondary/15 sm:size-[38rem]">
        <div className="absolute inset-10 rounded-full border border-accent-secondary/15" />
        <div className="absolute inset-20 rounded-full border border-accent-secondary/15" />
      </div>

      <div className="container-shell grid min-h-[calc(100svh-5rem)] items-center gap-12 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.h1
            id="hero-heading"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.06,
            }}
            className="font-display text-[clamp(3.4rem,9vw,7rem)] font-bold leading-[0.88] tracking-[-0.075em]"
          >
            I BUILD
            <br />
            DIGITAL
            <br />
            <span className="text-accent">THINGS</span>
            <span className="text-accent-secondary">.</span>
          </motion.h1>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : 0.14,
            }}
            className="mt-8 border-t border-border pt-6"
          >
            <p className="font-display text-xl font-semibold sm:text-2xl">Muhammad Khaekal</p>

            <p className="mt-1 text-sm text-accent-secondary sm:text-base">Software Developer</p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">Building digital applications by combining logic, good structure, and a comfortable user experience.</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {specialties.map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs text-muted">
                  <Icon aria-hidden="true" size={14} className="text-accent" />
                  {label}
                </span>
              ))}
            </div>

            <a
              href="#projects"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-5 font-semibold text-background transition-transform hover:-translate-y-1 hover:bg-[#d5ff7b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explore my work
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.65,
            delay: shouldReduceMotion ? 0 : 0.12,
          }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative rounded-2xl border border-border bg-surface p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div>
                <p className="mt-1 font-display text-sm text-gray-400">The person behind the code.</p>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#141C32]">
              <Image src="/images/profile/profile.webp" alt="Foto profil Muhammad Khaekal" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover object-center" />

              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">Muhammad Khaekal</p>
                  <p className="mt-1 text-xs text-slate-200">Software Developer</p>
                </div>

                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/20 text-accent backdrop-blur-sm">
                  <CodeSquare aria-hidden="true" size={18} />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-1 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Think. Build. Refine.</span>
              <span className="size-2 rounded-full bg-accent" />
            </div>
          </div>

          <div aria-hidden="true" className="absolute -bottom-4 -right-3 -z-10 size-24 rounded-2xl bg-accent-secondary/20 blur-2xl" />
        </motion.div>

        <a href="#about" className="hidden w-fit items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent lg:inline-flex">
          <ArrowDownRight aria-hidden="true" size={17} />
          Scroll to discover
        </a>
      </div>
    </section>
  );
}