import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="03" title="CONTACT" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="pixel-border bg-bg-secondary p-8 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:guinness987@gmail.com"
              className="pixel-border bg-accent/10 px-6 py-3 font-pixel text-[10px] text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
            >
              [Email]
            </a>
            <a
              href="https://github.com/kimchulyeon"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border px-6 py-3 font-pixel text-[10px] text-text-secondary transition-all hover:text-accent hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
            >
              [GitHub]
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="cursor-blink mt-8 font-pixel text-[9px] text-accent-dim"
          >
            {">"} open_to_collaboration_
          </motion.p>
        </motion.div>
      </div>

      <footer className="mt-32 border-t border-dashed border-border pt-8 text-center">
        <p className="font-pixel text-[8px] leading-relaxed text-text-muted">
          &copy; {new Date().getFullYear()} Kim Chulyeon
          <br />
          Built with Astro & React
        </p>
      </footer>
    </section>
  );
}
