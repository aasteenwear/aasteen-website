"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sizeGuide = [
  { size: "S", chest: "38-40 in", length: "27 in" },
  { size: "M", chest: "40-42 in", length: "28 in" },
  { size: "L", chest: "42-44 in", length: "29 in" },
  { size: "XL", chest: "44-46 in", length: "30 in" },
  { size: "XXL", chest: "46-48 in", length: "31 in" }
];

export default function SizeSelector({ sizes, productName }: { sizes: string[]; productName: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [guideOpen, setGuideOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  function handleAddToCart() {
    if (!selected) {
      setError(true);
      return;
    }
    setError(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest2 text-ink-300">Size</span>
        <button
          onClick={() => setGuideOpen(true)}
          className="text-xs uppercase tracking-widest2 text-ink-300 underline underline-offset-4 hover:text-white"
        >
          Size guide
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => {
              setSelected(size);
              setError(false);
            }}
            className={`min-w-[48px] border px-3 py-2 text-xs uppercase tracking-widest2 transition-colors duration-300 ease-luxury ${
              selected === size
                ? "border-white bg-white text-black"
                : "border-ink-500 text-ink-100 hover:border-white"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {error && <p className="mt-2 text-xs text-red-400">Select a size to continue.</p>}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleAddToCart}
          className="flex-1 border border-white bg-white px-6 py-3 text-xs uppercase tracking-widest2 text-black transition-colors duration-300 ease-luxury hover:bg-transparent hover:text-white"
        >
          {added ? "Added to bag" : "Add to cart"}
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 border border-ink-500 px-6 py-3 text-xs uppercase tracking-widest2 text-ink-100 transition-colors duration-300 ease-luxury hover:border-white"
        >
          Buy now
        </button>
        <button
          onClick={() => setWishlisted((w) => !w)}
          aria-label="Toggle wishlist"
          className={`border px-4 py-3 text-xs uppercase tracking-widest2 transition-colors duration-300 ease-luxury ${
            wishlisted ? "border-white text-white" : "border-ink-500 text-ink-300 hover:border-white"
          }`}
        >
          {wishlisted ? "Saved" : "Save"}
        </button>
      </div>

      <AnimatePresence>
        {guideOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
            onClick={() => setGuideOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.16, 0.84, 0.28, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md border border-ink-700 bg-black p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-sm uppercase tracking-widest2 text-ink-100">
                  Size guide — {productName}
                </h2>
                <button onClick={() => setGuideOpen(false)} aria-label="Close" className="text-ink-300 hover:text-white">
                  ✕
                </button>
              </div>
              <table className="w-full text-left text-xs text-ink-300">
                <thead>
                  <tr className="border-b border-ink-700 text-ink-100">
                    <th className="py-2">Size</th>
                    <th className="py-2">Chest</th>
                    <th className="py-2">Length</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeGuide.map((row) => (
                    <tr key={row.size} className="border-b border-ink-800">
                      <td className="py-2">{row.size}</td>
                      <td className="py-2">{row.chest}</td>
                      <td className="py-2">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-ink-500">Measurements are body measurements, not garment measurements.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
