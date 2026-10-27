"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav aria-label="Navigasi utama" className="container-shell flex min-h-20 items-center justify-between gap-6">
        <a href="#home" onClick={closeMenu} aria-label="AFTERDARK, kembali ke awal halaman" className="group inline-flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight">GEORGE&apos;S AREA</span>

          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-125" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} className="group relative py-2 text-sm text-muted transition-colors hover:text-foreground">
              {item.label}

              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#d5ff7b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Let&apos;s talk
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
          aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="container-shell flex flex-col gap-1 py-4">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center justify-between rounded-lg px-3 text-base text-foreground transition-colors hover:bg-surface hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-accent-secondary">0{index + 1}</span>
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 font-semibold text-background transition-colors hover:bg-[#d5ff7b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Let&apos;s talk
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
