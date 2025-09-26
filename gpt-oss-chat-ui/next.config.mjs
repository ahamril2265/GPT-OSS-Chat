/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // Enable static export
  basePath: "/gpt-oss-chat", // GitHub repo name (without .git)
  images: {
    unoptimized: true,     // Required for static export
  },
};

module.exports = nextConfig;
