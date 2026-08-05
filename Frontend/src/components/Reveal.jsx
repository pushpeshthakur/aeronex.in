import { motion } from "framer-motion";

/**
 * Small wrapper that fades + slides content up into view once,
 * driven by Framer Motion's whileInView (used throughout the page
 * in place of manual IntersectionObserver reveals).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 28,
  className = "",
  scale,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  const initial = scale ? { opacity: 0, scale } : { opacity: 0, y };
  const animate = scale ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 };

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
