"use client";
import { motion, MotionProps } from "framer-motion";
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
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
