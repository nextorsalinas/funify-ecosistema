/** @type {import('next').NextConfig} */
const nextConfig = {
  // tu configuración actual (output ya está sin standalone)
  optimizeFonts: false,

  // <-- NUEVO: permite imágenes de Unsplash
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
