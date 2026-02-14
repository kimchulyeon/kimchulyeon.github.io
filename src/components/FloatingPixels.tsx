import { motion } from "motion/react";

const items = [
  { char: "♥", x: 5, y: 10, size: 18, dur: 12 },
  { char: "★", x: 15, y: 60, size: 14, dur: 15 },
  { char: "▲", x: 85, y: 18, size: 12, dur: 13 },
  { char: "◆", x: 90, y: 65, size: 16, dur: 16 },
  { char: "☆", x: 75, y: 82, size: 14, dur: 11 },
  { char: "■", x: 25, y: 35, size: 10, dur: 14 },
  { char: "♠", x: 80, y: 42, size: 18, dur: 17 },
  { char: "►", x: 45, y: 88, size: 10, dur: 12 },
  { char: "●", x: 60, y: 12, size: 12, dur: 13 },
  { char: "♥", x: 35, y: 50, size: 10, dur: 18 },
  { char: "★", x: 50, y: 38, size: 20, dur: 14 },
  { char: "▲", x: 8, y: 78, size: 12, dur: 15 },
  { char: "■", x: 92, y: 48, size: 10, dur: 16 },
  { char: "◆", x: 40, y: 72, size: 14, dur: 11 },
];

export default function FloatingPixels() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {items.map((el, i) => (
        <motion.span
          key={i}
          className="absolute font-pixel select-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: el.size,
            color: "#4ade80",
          }}
          animate={{
            y: [0, -60, -20, -80, 0],
            x: [0, 20, -15, 10, 0],
            opacity: [0.08, 0.25, 0.1, 0.3, 0.08],
          }}
          transition={{
            duration: el.dur,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.char}
        </motion.span>
      ))}
    </div>
  );
}
