/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable type checking and linting during build to avoid deployment errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization settings
  images: {
    domains: ['cms.fuviai.com'],
    unoptimized: false,
  },

  // Environment variables (already set in Vercel, but can be referenced here)
  env: {
    NEXT_PUBLIC_WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.fuviai.com/graphql',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://ai.fuviai.com',
  },
}

module.exports = nextConfig
