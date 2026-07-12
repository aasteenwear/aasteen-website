/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" }
    ]
  },
  experimental: {
    optimizePackageImports: ["@react-three/drei", "@react-three/fiber"]
  }
};

export default nextConfig;
