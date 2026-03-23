
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/portfolio-5923e', // This ensures CSS/JS paths include the repo name
};
export default nextConfig;
