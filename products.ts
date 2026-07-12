export type Category =
  | "Oversized Tees"
  | "Premium Basics"
  | "Hoodies"
  | "Cargo Pants"
  | "Accessories";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  description: string;
  sizes: string[];
  images: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
};

export const categories: Category[] = [
  "Oversized Tees",
  "Premium Basics",
  "Hoodies",
  "Cargo Pants",
  "Accessories"
];

export const products: Product[] = [
  {
    slug: "obsidian-oversized-tee",
    name: "Obsidian Oversized Tee",
    category: "Oversized Tees",
    price: 2499,
    compareAtPrice: 2999,
    description:
      "Heavyweight 260 GSM cotton, dropped shoulders, boxy silhouette. Garment-dyed for a lived-in, matte-black finish.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/products/obsidian-tee-1.jpg", "/products/obsidian-tee-2.jpg", "/products/obsidian-tee-3.jpg"],
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 142
  },
  {
    slug: "silver-line-hoodie",
    name: "Silver Line Hoodie",
    category: "Hoodies",
    price: 4299,
    description:
      "Brushed fleece interior, oversized hood, silver-foil AASTEEN wordmark across the chest.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/products/silver-hoodie-1.jpg", "/products/silver-hoodie-2.jpg"],
    isNewArrival: true,
    rating: 4.9,
    reviewCount: 87
  },
  {
    slug: "charcoal-utility-cargo",
    name: "Charcoal Utility Cargo",
    category: "Cargo Pants",
    price: 3799,
    description:
      "Six-pocket utility cargo in a tapered oversized fit. Ripstop cotton with adjustable ankle straps.",
    sizes: ["28", "30", "32", "34", "36"],
    images: ["/products/cargo-1.jpg", "/products/cargo-2.jpg"],
    isBestSeller: true,
    rating: 4.7,
    reviewCount: 203
  },
  {
    slug: "essential-basics-tee",
    name: "Essential Basics Tee",
    category: "Premium Basics",
    price: 1899,
    description: "The everyday layer — 220 GSM combed cotton, tag-free comfort collar.",
    sizes: ["S", "M", "L", "XL"],
    images: ["/products/basics-1.jpg", "/products/basics-2.jpg"],
    rating: 4.6,
    reviewCount: 311
  },
  {
    slug: "monogram-dog-tag",
    name: "Monogram Dog Tag",
    category: "Accessories",
    price: 1299,
    description: "Stainless steel dog tag stamped with the AASTEEN monogram, on a 24-inch ball chain.",
    sizes: ["One Size"],
    images: ["/products/tag-1.jpg"],
    isNewArrival: true,
    rating: 4.9,
    reviewCount: 54
  }
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, limit);
}
