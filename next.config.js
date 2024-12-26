/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['postcss-loader'],
    });
    return config;
  },
}

module.exports = nextConfig

