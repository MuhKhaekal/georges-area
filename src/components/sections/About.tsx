"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Braces, Database, LayoutTemplate } from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "Application Development",
    description: "Build web applications with a clear structure, a directed flow, and user needs as a reference.",
    icon: LayoutTemplate,
  },
  {
    number: "02",
    title: "Backend Engineering",
    description: "Develop application logic, data management, and processes that support system functions.",
    icon: Braces,
  },
  {
    number: "03",
    title: "Database Design",
    description: "Develop data structures and relationships so that information can be managed consistently and efficiently.",
    icon: Database,
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding border-t border-border">
      <div className="container-shell">
        <div className="mb-12 flex flex-wrap items-center gap-3 sm:mb-16">
          <span className="eyebrow">THE STORY</span>
          <span aria-hidden="true" className="h-px w-12 bg-accent-secondary" />
          <span className="font-mono text-xs text-muted">A LITTLE ABOUT ME</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, ease: "easeOut" }}>
            <h2 id="about-heading" className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.055em] sm:text-6xl">
              Curious by nature.
              <br />
              <span className="text-accent">Built to create.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-muted">For me, software development isnt just about writing code. Its about understanding problems, developing solutions, and turning ideas into something usable.</p>

            <p className="mt-4 max-w-lg text-base leading-8 text-muted">
              Im interested in developing web applications, mobile applications, and database management. I enjoy learning, exploring new approaches, and refining the details to make a product work well.
            </p>

            <a
              href="#projects"
              className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-accent/50 pb-1 text-sm font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explore selected projects
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </motion.div>

          <div className="space-y-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group grid gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent-secondary/50 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-5 sm:p-6"
                >
                  <span className="font-mono text-xs text-accent-secondary"></span>

                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{area.title}</h3>

                    <p className="mt-2 text-sm leading-7 text-muted">{area.description}</p>
                  </div>

                  <span className="flex size-11 items-center justify-center rounded-lg border border-border text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface sm:mt-24">
          <div className="grid sm:grid-cols-3">
            {[
              { value: "THINK", label: "Understand the problem" },
              { value: "BUILD", label: "Create the solution" },
              { value: "REFINE", label: "Improve the details" },
            ].map((item, index) => (
              <div key={item.value} className={`p-6 sm:p-8 ${index !== 2 ? "border-b border-border sm:border-b-0 sm:border-r" : ""}`}>
                <p className="font-mono text-xs text-accent-secondary">STEP {index + 1}</p>

                <p className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {item.value}
                  <span className="text-accent">.</span>
                </p>

                <p className="mt-2 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
