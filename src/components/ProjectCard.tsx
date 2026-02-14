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

        <div className="flex gap-4 border-t border-dashed border-border pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-[9px] text-text-muted transition-colors hover:text-accent"
          >
            {"["} GitHub {"]"}
          </a>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-[9px] text-text-muted transition-colors hover:text-accent"
            >
              {"["} Website {"]"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
