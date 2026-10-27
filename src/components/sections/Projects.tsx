"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const projects = portfolioProjects;
  const [activeScreenshots, setActiveScreenshots] = useState<Record<string, number>>({});
  const [brokenScreenshots, setBrokenScreenshots] = useState<string[]>([]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-shell">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Built with
              <br />
              <span className="text-accent">intent.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted md:text-right">Some projects that represent my thinking process, problem solving, and technical implementation.</p>
        </div>

        <div>
          {projects.map((project, index) => {
            const availableScreenshots = (project.screenshots ?? []).filter((src) => !brokenScreenshots.includes(`${project.id}:${src}`));

            const activeIndex = (activeScreenshots[project.id] ?? 0) % Math.max(availableScreenshots.length, 1);

            const activeScreenshot = availableScreenshots[activeIndex];
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : 0.04,
                }}
                className="border-t border-border py-10 sm:py-14 lg:py-16"
              >
                <div className={`grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10 ${reversed ? "" : ""}`}>
                  <div className={`lg:col-span-4 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="mb-7 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Project {String(index + 1)}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{project.category}</span>
                    </div>

                    <h3 className="font-display text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-4xl lg:text-5xl">{project.title}</h3>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-muted">{project.description}</p>

                    <div className="mt-6 border-l-2 border-accent pl-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">My role</p>
                      <p className="mt-1 text-sm text-foreground">{project.role}</p>
                    </div>

                    <div className="mt-7">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Built with</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {project.technologies.map((technology) => (
                          <span key={technology} className="text-xs text-foreground/80">
                            <span className="mr-2 text-accent">/</span>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 border-b border-accent pb-2 text-sm font-medium text-accent transition-colors hover:text-foreground">
                          Live demo
                          <ArrowUpRight size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      )}

                      {project.repositoryUrl && (
                        <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 pb-2 text-sm text-muted transition-colors hover:text-accent">
                          <Code2 size={15} />
                          Source code
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={`min-w-0 lg:col-span-8 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                    {activeScreenshot ? (
                      <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface sm:aspect-[20/10]">
                          <img
                            key={activeScreenshot}
                            src={activeScreenshot}
                            alt={`${project.title} — screenshot ${activeIndex + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                            onError={() => {
                              const brokenKey = `${project.id}:${activeScreenshot}`;

                              setBrokenScreenshots((current) => (current.includes(brokenKey) ? current : [...current, brokenKey]));

                              setActiveScreenshots((current) => ({
                                ...current,
                                [project.id]: 0,
                              }));
                            }}
                          />

                          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/90 to-transparent px-4 pb-4 pt-12 sm:px-6 sm:pb-5">
                            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/75">Visual archive / {String(index + 1).padStart(2, "0")}</span>
                            <span className="font-mono text-xs text-white">
                              {String(activeIndex + 1).padStart(2, "0")} / {String(availableScreenshots.length).padStart(2, "0")}
                            </span>
                          </div>
                        </div>

                        {availableScreenshots.length > 1 && (
                          <div className="mt-4 flex items-center justify-between">
                            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Browse screenshots</p>

                            <div className="flex gap-2">
                              <button
                                type="button"
                                aria-label="Previous screenshot"
                                onClick={() =>
                                  setActiveScreenshots((current) => ({
                                    ...current,
                                    [project.id]: (activeIndex - 1 + availableScreenshots.length) % availableScreenshots.length,
                                  }))
                                }
                                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
                              >
                                <ArrowLeft size={16} />
                              </button>

                              <button
                                type="button"
                                aria-label="Next screenshot"
                                onClick={() =>
                                  setActiveScreenshots((current) => ({
                                    ...current,
                                    [project.id]: (activeIndex + 1) % availableScreenshots.length,
                                  }))
                                }
                                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
                              >
                                <ArrowRight size={16} />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden border border-border bg-surface p-6 sm:aspect-[16/10] sm:p-9">
                        <div className="pointer-events-none absolute -right-8 -top-10 font-display text-[12rem] font-bold leading-none text-foreground/[0.025] sm:text-[17rem]">{String(index + 1).padStart(2, "0")}</div>

                        <div className="relative flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Project visual</span>
                        </div>

                        <div className="relative">
                          <p className="font-mono text-xs text-accent">{project.category}</p>
                          <p className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</p>
                          <p className="mt-4 max-w-md text-sm leading-7 text-muted">Tambahkan screenshot proyek ke folder public agar tampilan visual proyek muncul di sini.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Selected work / A continuous process</p>
          <p className="text-xs text-muted">Designed to solve problems, built to make a difference.</p>
        </div>
      </div>
    </section>
  );
}
