/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emotioncores.com',
      },
    ],
  },
};

export default nextConfig;
