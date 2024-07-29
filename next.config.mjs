/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 's3.amazonaws.com',
    //       port: '',
    //       pathname: '/my-bucket/**',
    //     },
    //   ],
  },
};

export default nextConfig;

// src="https://s3.amazonaws.com/my-bucket/profile.png"
