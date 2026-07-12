"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.16, 0.84, 0.28, 1], delay }
  })
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Hero3D />

      <motion.p
        variants={rise}
        initial="hidden"
        animate="show"
        custom={1.4}
        className="absolute left-1/2 top-[6vh] z-10 -translate-x-1/2 text-[11px] uppercase tracking-widest2 text-ink-300"
      >
        Move your cursor to rotate
      </motion.p>

      <div className="absolute inset-x-0 bottom-[8vh] z-10 flex flex-col items-center px-6 text-center">
        <motion.h1
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="font-display text-3xl font-extrabold tracking-widest2 text-ink-100 sm:text-5xl"
          style={{ textIndent: "0.28em" }}
        >
          WEAR YOUR CONFIDENCE
        </motion.h1>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0.85}
          className="mt-4 max-w-md text-sm text-ink-300 sm:text-base"
        >
          Premium oversized streetwear engineered for the next generation.
        </motion.p>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={1.15}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/shop"
            className="rounded-none border border-white bg-white px-8 py-3 text-xs uppercase tracking-widest2 text-black transition-colors duration-300 ease-luxury hover:bg-transparent hover:text-white"
          >
            Shop Collection
          </a>
          <a
            href="/about"
            className="rounded-none border border-ink-500 px-8 py-3 text-xs uppercase tracking-widest2 text-ink-100 transition-colors duration-300 ease-luxury hover:border-white"
          >
            Explore The House
          </a>
        </motion.div>
      </div>
    </section>
  );
}
