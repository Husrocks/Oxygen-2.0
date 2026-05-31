/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/Oxygen-2.0' : '',
  images: {
    domains: [
      'images.unsplash.com',
      'www.optimumnutrition.com',
      'jackednutrition.pk',
      'international.muscletech.com',
      'www.gobsn.com',
      'www.protinex.com',
      'wallpapercave.com',
    ],
    unoptimized: true, // For external images
  },
}

module.exports = nextConfig


