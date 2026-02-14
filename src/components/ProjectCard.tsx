import { motion } from "motion/react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="pixel-border group overflow-hidden bg-bg-card"
    >
      <div className="relative aspect-video overflow-hidden bg-bg-secondary">
        {project.screenshot ? (
          <>
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-accent/5 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-bg-secondary">
            <pre className="select-none font-mono text-[10px] leading-tight text-accent/60 sm:text-xs">
{`
  ╔══════════════════════════════╗
  ║                              ║
  ║    ██  COMING SOON  ██       ║
  ║                              ║
  ║    > Loading assets...       ║
  ║    > Build in progress_      ║
  ║    > ETA: ??????             ║
  ║                              ║
  ╚══════════════════════════════╝
`}
            </pre>
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="mb-1 font-pixel text-[8px] text-accent-dim">
          PROJECT_{String(index).padStart(2, "0")}
        </p>
        <h3 className="mb-3 font-pixel text-xs text-text-primary drop-shadow-[0_0_6px_rgba(74,222,128,0.3)]">
          {project.title}
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="border border-border bg-bg-secondary px-2 py-1 font-pixel text-[8px] text-accent-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-dashed border-border pt-4">
          {project.serviceUrl ? (
            <a
              href={project.serviceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-btn group/btn relative inline-flex items-center gap-2 overflow-hidden px-6 py-3 font-pixel text-[9px] transition-all duration-300"
            >
              <span className="cosmic-border absolute inset-0 rounded-sm" />
              <span className="cosmic-bg absolute inset-0 rounded-sm" />
              <span className="cosmic-sparkle absolute -top-3 left-4 text-[14px]">✦</span>
              <span className="cosmic-sparkle-delay absolute -top-2 right-5 text-[10px]">✧</span>
              <span className="cosmic-sparkle-slow absolute -bottom-2 left-[40%] text-[12px]">★</span>
              <span className="cosmic-sparkle absolute -bottom-1 right-8 text-[8px]">⬥</span>
              <span className="relative z-10 flex items-center gap-3">
                <span className="cosmic-star inline-block text-[11px]">◆</span>
                <span className="cosmic-text tracking-wider">LAUNCH SERVICE</span>
                <span className="cosmic-arrows inline-block text-[10px]">▸▸</span>
              </span>
              <span className="cosmic-sweep absolute inset-0" />
            </a>
          ) : project.downloadUrls?.length ? (
            <>
              {project.downloadUrls.map((dl) => (
                <a
                  key={dl.platform}
                  href={dl.url}
                  download
                  className="download-btn group/dl relative inline-flex items-center gap-2 overflow-hidden px-5 py-3 font-pixel text-[9px] transition-all duration-300"
                >
                  <span className="download-border absolute inset-0 rounded-sm" />
                  <span className="download-bg absolute inset-0 rounded-sm" />
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="download-icon inline-block text-[11px]">⬇</span>
                    <span className="download-badge inline-block text-[7px]">{dl.platform}</span>
                  </span>
                  <span className="download-sweep absolute inset-0" />
                </a>
              ))}
            </>
          ) : project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="stellar-btn group/stellar relative inline-flex items-center gap-2 overflow-hidden px-6 py-3 font-pixel text-[9px] transition-all duration-300"
            >
              <span className="stellar-border absolute inset-0 rounded-sm" />
              <span className="stellar-bg absolute inset-0 rounded-sm" />
              <span className="stellar-sparkle absolute -top-3 left-4 text-[13px]">⊹</span>
              <span className="stellar-sparkle-delay absolute -top-2 right-5 text-[10px]">✧</span>
              <span className="stellar-sparkle-slow absolute -bottom-2 left-[42%] text-[11px]">◈</span>
              <span className="stellar-sparkle absolute -bottom-1 right-7 text-[9px]">✦</span>
              <span className="relative z-10 flex items-center gap-3">
                <span className="stellar-star inline-block text-[11px]">✦</span>
                <span className="stellar-text tracking-wider">DEEP SCAN</span>
                <span className="stellar-arrows inline-block text-[10px]">▸▸</span>
              </span>
              <span className="stellar-sweep absolute inset-0" />
            </a>
          ) : (
            <div className="wreck-btn group/wreck relative inline-flex items-center gap-2 overflow-hidden px-6 py-3 font-pixel text-[9px] cursor-default">
              <span className="wreck-border absolute inset-0 rounded-sm" />
              <span className="wreck-bg absolute inset-0 rounded-sm" />
              <span className="wreck-spark absolute top-0 left-[20%] text-[10px]">⚡</span>
              <span className="wreck-spark-delay absolute bottom-0 right-[25%] text-[8px]">⚡</span>
              <span className="wreck-smoke absolute -top-2 left-[60%] text-[12px]">░</span>
              <span className="wreck-smoke-delay absolute -top-1 right-[15%] text-[10px]">▓</span>
              <span className="relative z-10 flex items-center gap-3">
                <span className="wreck-icon inline-block text-[11px]">✧</span>
                <span className="wreck-text tracking-wider">
                  {"SIGNAL"}<span className="wreck-glitch">_</span>{"LOST"}
                </span>
                <span className="wreck-static inline-block text-[10px]">░░</span>
              </span>
              <span className="wreck-scanline absolute inset-0" />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
