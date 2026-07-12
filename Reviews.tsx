const mockReviews = [
  { name: "Aarav S.", rating: 5, text: "Fit is exactly as described — oversized without looking sloppy. Fabric feels genuinely premium." },
  { name: "Kavya R.", rating: 5, text: "Best hoodie I own. The silver print hasn't cracked after multiple washes." },
  { name: "Devansh P.", rating: 4, text: "Runs slightly large, sized down and it's perfect now." }
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-ink-100" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < Math.round(rating) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Reviews({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <section className="mt-16 border-t border-ink-800 pt-10">
      <div className="mb-6 flex items-center gap-3">
        <Stars rating={rating} />
        <span className="text-sm text-ink-100">{rating.toFixed(1)}</span>
        <span className="text-sm text-ink-300">({reviewCount} reviews)</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {mockReviews.map((r) => (
          <div key={r.name} className="border border-ink-800 p-4">
            <Stars rating={r.rating} />
            <p className="mt-2 text-sm text-ink-300">{r.text}</p>
            <p className="mt-3 text-xs uppercase tracking-widest2 text-ink-500">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
