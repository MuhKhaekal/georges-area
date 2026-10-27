"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-shell">
        <div className="mb-14 flex flex-col justify-between gap-5 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Technical index</p>
            <h2 className="font-display max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Tools for
              <br />
              <span className="text-accent">making things.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-muted md:text-right">The technologies I use to design, build, and develop digital solutions.</p>
        </div>

        <div className="border-t border-border">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
              className="group grid gap-5 border-b border-border py-8 md:grid-cols-[100px_minmax(0,1fr)_minmax(240px,0.8fr)] md:gap-8 md:py-10"
            >
              <div className="flex items-start justify-between md:block">
                <span className="font-mono text-sm text-accent">[{category.number}]</span>
                <ChevronRight aria-hidden="true" className="h-5 w-5 text-muted transition-colors group-hover:text-accent md:mt-8" strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">{category.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted">{category.description}</p>
              </div>

              <div className="flex flex-wrap content-start gap-x-2 gap-y-2 md:pt-1">
                {category.technologies.map((technology) => (
                  <span key={technology} className="inline-flex items-center gap-2 border-b border-border px-0.5 py-2 text-sm text-foreground/85 transition-colors hover:border-accent hover:text-accent">
                    <span className="h-1 w-1 rounded-full bg-accent-secondary" />
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:text-xs">
          <span>Knowledge / Stack / Workflow</span>
          <span className="flex items-center gap-2">
            Explore my process <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </section>
  );
}
