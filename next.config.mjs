/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Sem 3840: a maior fonte do site tem 1920px, então essa variante seria
    // um re-encode dos mesmos pixels — custo de CPU sem ganho de nitidez.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

export default nextConfig;
