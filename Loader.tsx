"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 0.84, 0.28, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.span
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="font-display text-xs tracking-widest3 text-ink-500"
            style={{ textIndent: "0.4em" }}
          >
            AASTEEN
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
