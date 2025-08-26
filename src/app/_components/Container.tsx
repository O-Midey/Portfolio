"use client";
import React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ContainerProps = { heading?: string; children: ReactNode };
export default function Container({ heading, children }: ContainerProps) {
  return (
    <section className=" p-2 my-15 md:px-8 md:py-10 max-w-5xl mx-auto ">
      {heading && (
        <>
          <motion.h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {heading}
          </motion.h1>
          <br />
          <br />
        </>
      )}
      {children}
    </section>
  );
}
