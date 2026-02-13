/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/yogesh-portfolio',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/yogesh-portfolio',
  },
}

module.exports = nextConfig
