/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/GPT_OSS_Chat", // <-- your repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
