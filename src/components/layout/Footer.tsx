"use client";

import { ArrowUpRight, Code2, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import CurrentYear from "@/components/layout/CurrentYear";

export default function Footer() {
  const contactLinks = [
    {
      label: "Email",
      href: siteConfig.links.email ? `mailto:${siteConfig.links.email}` : "",
      icon: Mail,
    },
    {
      label: "GitHub",
      href: siteConfig.links.github,
      icon: Code2,
    },
    {
      label: "LinkedIn",
      href: siteConfig.links.linkedin,
      icon: Code2,
    },
  ].filter((item) => item.href.trim().length > 0);

  return (
    <footer className="border-t border-border">
      <div className="container-shell py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <a href="#home" className="inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight">
              {siteConfig.brand}
              <span className="size-2 rounded-full bg-accent" />
            </a>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted">{siteConfig.role}. Building digital solutions with a focus on software development and data management.</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">FIND ME ONLINE</p>

            {contactLinks.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "Email" ? undefined : "_blank"}
                      rel={item.label === "Email" ? undefined : "noreferrer"}
                      className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      <Icon aria-hidden="true" size={15} />
                      {item.label}
                      {item.label !== "Email" && <ArrowUpRight aria-hidden="true" size={13} />}
                    </a>
                  );
                })}
              </div>
            ) : (
              <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
                Tautan profil dan kontak dapat ditambahkan di
                <code className="mx-1 text-accent">src/data/site.ts</code>.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted sm:text-xs">
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>

          <a href="#home" className="inline-flex w-fit items-center gap-2 text-xs text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            Back to top
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
