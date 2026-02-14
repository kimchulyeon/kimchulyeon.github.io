import { motion } from "motion/react";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex items-center gap-4"
    >
      <span className="font-pixel text-[10px] text-accent-dim">[{number}]</span>
      <h2 className="font-pixel text-sm text-text-primary drop-shadow-[0_0_6px_rgba(74,222,128,0.3)]">
        {title}
      </h2>
      <div className="h-px flex-1 border-t border-dashed border-border" />
    </motion.div>
  );
}
