/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
     images: {
    unoptimized: true, // ➜ WAJIB untuk export statis
  },

};

export default nextConfig;
