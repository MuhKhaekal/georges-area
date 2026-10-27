"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Award, ExternalLink, X } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  const reduceMotion = useReducedMotion();
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [brokenImages, setBrokenImages] = useState<string[]>([]);

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  const categoryLabel = {
    certification: "Certification",
    recognition: "Recognition",
    contribution: "Contribution",
  };

  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-shell">
        <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1fr_300px] md:items-end">
          <div>
            <p className="eyebrow mb-4">Selected milestones</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Proof of
              <br />
              <span className="text-accent">progress.</span>
            </h2>
          </div>
          <div className="md:justify-self-end">
            <div className="mb-3 flex items-center gap-3 text-accent">
              <Award size={20} strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-[0.15em]">Archive / 001—∞</span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted">Certification, recognition, and contributions that mark my competency development process.</p>
          </div>
        </div>

        <div className="border-t border-border">
          {achievements.map((item, index) => {
            const hasImage = Boolean(item.image) && !brokenImages.includes(item.id);

            return (
              <motion.article
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="group grid gap-5 border-b border-border py-8 md:grid-cols-[84px_minmax(0,1fr)_minmax(200px,0.55fr)] md:gap-8 md:py-9"
              >
                <div className="flex items-center justify-between md:block">
                  <span className="font-display text-4xl font-semibold tracking-[-0.07em] text-accent/80 sm:text-5xl">{item.number}</span>
                  <span className="font-mono text-xs text-muted md:mt-3 md:block">{item.year}</span>
                </div>

                <div className="min-w-0">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-accent-secondary">{categoryLabel[item.category]}</p>

                  <h3 className="max-w-2xl font-display text-2xl font-medium leading-tight tracking-tight transition-colors group-hover:text-accent sm:text-3xl">{item.title}</h3>

                  <p className="mt-2 text-sm text-foreground/75">{item.issuer}</p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{item.description}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                    {hasImage && item.image && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveImage({
                            src: item.image!,
                            title: item.title,
                          })
                        }
                        className="inline-flex items-center gap-2 text-xs font-medium text-foreground transition-colors hover:text-accent"
                      >
                        View document <ArrowUpRight size={14} />
                      </button>
                    )}

                    {item.credentialUrl && (
                      <a href={item.credentialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-foreground transition-colors hover:text-accent">
                        Verify credential <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="hidden md:block">
                  {hasImage && item.image ? (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImage({
                          src: item.image!,
                          title: item.title,
                        })
                      }
                      aria-label={`Preview ${item.title}`}
                      className="group/image relative block aspect-[16/10] w-full overflow-hidden border border-border bg-surface text-left"
                    >
                      <img
                        src={item.image}
                        alt={`Preview ${item.title}`}
                        loading="lazy"
                        className="h-full w-full object-cover opacity-75 transition duration-500 group-hover/image:scale-[1.04] group-hover/image:opacity-100"
                        onError={() => setBrokenImages((current) => (current.includes(item.id) ? current : [...current, item.id]))}
                      />
                      <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/90 px-3 py-2 font-mono text-[10px] uppercase tracking-wider">
                        Document preview <ArrowUpRight size={13} />
                      </span>
                    </button>
                  ) : (
                    <div className="flex aspect-[16/10] w-full items-end justify-between border-b border-border py-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Record / {String(index + 1).padStart(2, "0")}</span>
                      <Award size={19} strokeWidth={1.2} className="text-border" />
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${activeImage.title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent sm:right-8 sm:top-8"
          >
            <X size={20} />
          </button>

          <div className="flex max-h-full w-full max-w-5xl flex-col items-center gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Document / {activeImage.title}</p>
            <img src={activeImage.src} alt={activeImage.title} className="max-h-[78vh] max-w-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
