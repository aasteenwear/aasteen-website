import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            aria-hidden
            className="object-cover opacity-0 transition-opacity duration-500 ease-luxury group-hover:opacity-100"
          />
        )}

        <div className="absolute left-3 top-3 flex gap-2">
          {product.isNewArrival && (
            <span className="bg-white px-2 py-1 text-[10px] uppercase tracking-widest2 text-black">
              New
            </span>
          )}
          {onSale && (
            <span className="bg-ink-100 px-2 py-1 text-[10px] uppercase tracking-widest2 text-black">
              Sale
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-sm text-ink-100">{product.name}</p>
          <p className="text-xs text-ink-300">{product.category}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-ink-100">₹{product.price.toLocaleString("en-IN")}</p>
          {onSale && (
            <p className="text-xs text-ink-500 line-through">
              ₹{product.compareAtPrice!.toLocaleString("en-IN")}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
