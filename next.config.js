/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Required so Railway picks up the standalone output for smaller images
  output: 'standalone',
};

module.exports = nextConfig;
