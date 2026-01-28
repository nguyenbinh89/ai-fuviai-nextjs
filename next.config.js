/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cms.fuviai.com', 'ai.fuviai.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.fuviai.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Enable static exports for better performance
  output: 'standalone',
}

module.exports = nextConfig
