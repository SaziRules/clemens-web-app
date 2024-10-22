/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    domains: ['via.placeholder.com'], // Add this line for placeholder images
  },
}

module.exports = nextConfig