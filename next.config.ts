/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors during build
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'], // ✅ Allow images from these domains
  },
};

export default nextConfig;
