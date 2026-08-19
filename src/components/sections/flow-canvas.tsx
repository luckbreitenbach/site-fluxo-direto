"use client";

import { motion, useReducedMotion } from "framer-motion";

const paths = [
  "M-20 210 C 140 210, 190 90, 340 90 S 540 200, 700 140",
  "M-20 300 C 160 300, 220 220, 380 220 S 560 300, 720 250",
  "M-20 120 C 120 120, 180 40, 320 40 S 520 110, 700 60",
];

const nodes = [
  { cx: 340, cy: 90 },
  { cx: 380, cy: 220 },
  { cx: 320, cy: 40 },
  { cx: 700, cy: 140 },
  { cx: 720, cy: 250 },
];

export function FlowCanvas() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[62%] opacity-70 lg:block"
    >
      <svg
        viewBox="0 0 720 380"
        fill="none"
        className="size-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="flow-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--brand)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--brand-soft)" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="flow-glow">
            <stop offset="0%" stopColor="var(--brand-soft)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {paths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            stroke="url(#flow-line)"
            strokeWidth={1.5}
            fill="none"
            initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: index * 0.2, ease: "easeOut" }}
          />
        ))}

        {nodes.map((node, index) => (
          <g key={`${node.cx}-${node.cy}`}>
            <circle cx={node.cx} cy={node.cy} r={26} fill="url(#flow-glow)" opacity={0.35} />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={4}
              fill="var(--brand-soft)"
              initial={reduceMotion ? undefined : { scale: 0.6, opacity: 0.4 }}
              animate={reduceMotion ? undefined : { scale: [0.9, 1.25, 0.9], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 3.5,
                delay: index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
