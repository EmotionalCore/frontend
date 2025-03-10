/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< Updated upstream
  reactStrictMode:true,
images: {
 domains: ["emotioncores.comstring", "emotioncores.com"],
  },
=======
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'emotioncores.com',
            },
        ],
    },
>>>>>>> Stashed changes
};

export default nextConfig;
