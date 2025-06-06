/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Serve per creare un sito statico
  distDir: 'out',   // Dove verrà generato il sito statico
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Necessario per GitHub Pages
  basePath: '/personalWebsite', // <--- cambia con il nome della repo
};

module.exports = nextConfig;
