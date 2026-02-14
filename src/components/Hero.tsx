import { motion } from "motion/react";
import WireframeGlobe from "./WireframeGlobe";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <WireframeGlobe size={500} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 font-pixel text-[10px] tracking-widest text-accent-dim uppercase"
        >
          {">"} system.identify()
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-6 font-pixel text-xl leading-relaxed text-text-primary md:text-3xl"
        >
          I build to{" "}
          <span className="text-accent drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
            fix what bugs me
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-text-secondary"
        >
          불편함을 찾아 직접 만들어 해결하고,
          <br /> 머릿속에 떠오른 재미있는 아이디어를 기획부터 개발까지 실현하는
          개발자입니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="pixel-border bg-accent/10 px-6 py-3 font-pixel text-[10px] text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
          >
            [See my work]
          </a>
          <a
            href="https://github.com/kimchulyeon"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border px-6 py-3 font-pixel text-[10px] text-text-secondary transition-all hover:text-accent hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
          >
            [GitHub]
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="cursor-blink mt-16 text-sm text-accent-dim"
        >
          {">"} ready_
        </motion.p>
      </div>
    </section>
  );
}
