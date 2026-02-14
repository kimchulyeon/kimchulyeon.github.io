import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const techStack = [
  "React",
  "React Native",
  "Swift",
  "TypeScript",
  "Electron",
  "Tauri",
  "Rust",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Nest.js",
  "Tailwind CSS",
  "Supabase",
  "SQLite",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="01" title="ABOUT" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="pixel-border mb-12 bg-bg-secondary p-6"
        >
          <p className="mb-2 font-pixel text-[10px] text-accent-dim">
            {">"} cat about.txt
          </p>
          <p className="max-w-2xl text-xl leading-relaxed text-text-secondary">
            개선점을 끊임없이 고민하고 가끔 프로덕트로 만들어
            해결합니다.
            <br />
            최신 트렌드보다는 레트로와 픽셀에 끌리고, 심플하지만 독특하고
            재미있는 것들을 좋아합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mb-4 font-pixel text-[10px] text-accent-dim">
            {">"} ls ./skills/
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="pixel-border bg-bg-secondary px-3 py-2 font-pixel text-[9px] text-text-secondary transition-colors hover:text-accent"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
