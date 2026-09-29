"use client";
import { motion, MotionProps, useReducedMotion } from "framer-motion";
import { HTMLAttributes } from "react";

type AnimatedDivProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    children: React.ReactNode;
    className?: string;
  };

export default function AnimatedDiv({
  children,
  className,
  ...rest
}: AnimatedDivProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
