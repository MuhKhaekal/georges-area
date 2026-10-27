"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Sparkles } from "lucide-react";
import { journeyItems } from "@/data/journey";

const typeMeta = {
  education: { label: "Education", icon: BookOpen },
  experience: { label: "Experience", icon: BriefcaseBusiness },
  learning: { label: "Independent learning", icon: Sparkles },
} as const;

function JourneyLogo({ src, organization }: { src?: string; organization: string }) {
  const [failed, setFailed] = useState(false);
  const initials = organization
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  if (!src || failed) {
    return <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border font-display text-sm font-semibold text-accent">{initials || "—"}</div>;
  }

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-white p-1.5">
      <img src={src} alt={`${organization} logo`} className="h-full w-full object-contain" onError={() => setFailed(true)} />
    </div>
  );
}

export default function Journey() {
  const reduceMotion = useReducedMotion();
  const items = journeyItems;

  return (
    <section id="journey" className="section-padding relative">
      <div className="container-shell">
        <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1fr_280px] md:items-end">
          <div>
            <p className="eyebrow mb-4">The timeline</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              A work in
              <br />
              <span className="text-accent">progress.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted md:justify-self-end">Every experience is part of the learning process, building something, and expanding the way I solve problems.</p>
        </div>

        <div className="border-t border-border">
          {items.map((item, index) => {
            const meta = typeMeta[item.type];
            const TypeIcon = meta.icon;

            return (
              <motion.article
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="group grid gap-5 border-b border-border py-8 md:grid-cols-[170px_28px_minmax(0,1fr)] md:gap-7 md:py-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 md:block">
                  <p className="font-mono text-xs tracking-wide text-accent">{item.period}</p>
                  
                </div>

                <div className="hidden flex-col items-center md:flex">
                  <span className="mt-1 h-3 w-3 rounded-full border-2 border-accent bg-background transition-colors group-hover:bg-accent" />
                  {index !== items.length - 1 && <span className="mt-3 w-px flex-1 bg-border" />}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <JourneyLogo src={item.logo} organization={item.organization} />

                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <TypeIcon size={13} strokeWidth={1.7} className="text-accent-secondary" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{meta.label}</span>
                      </div>

                      <h3 className="font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">{item.title}</h3>

                      <p className="mt-2 text-sm font-medium text-accent">{item.organization}</p>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{item.description}</p>

                      {item.organizationUrl && (
                        <a href={item.organizationUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-foreground transition-colors hover:text-accent">
                          Visit organization <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">End of current chapter / More to come</p>
      </div>
    </section>
  );
}
