import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

const FloatingHearts = ({ count = 6, className = "" }: FloatingHeartsProps) => {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 10,
        size: 8 + Math.random() * 14,
        opacity: 0.06 + Math.random() * 0.1,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden z-0 ${className}`}>
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ y: "110vh", x: `${h.x}vw`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, h.opacity, h.opacity, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{ fontSize: h.size }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-love"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
