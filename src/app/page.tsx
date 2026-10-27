import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/layout/AmbientBackground";

export default function HomePage() {
  return (
    <main>
      <AmbientBackground />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Achievements />
      <Projects />

      <section id="contact" aria-labelledby="contact-heading" className="section-padding border-t border-border">
        <div className="container-shell">
          <div className="mb-10 flex items-center gap-3">
            <span className="eyebrow">GET IN TOUCH</span>
            <span aria-hidden="true" className="h-px w-12 bg-accent-secondary" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-10 lg:p-14">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full border border-accent-secondary/20" />

            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 size-52 rounded-full border border-accent/20" />

            <div className="relative max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">HAVE AN IDEA?</p>

              <h2 id="contact-heading" className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Let&apos;s make
                <br />
                something
                <span className="text-accent"> meaningful.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">Have an idea or collaboration opportunity? Contact me through the contact channels provided in the footer.</p>

              <a
                href="#contact"
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/40 px-5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Start a conversation
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
      <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
