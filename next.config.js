/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "webpage";
const basePath = isProd ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: isProd ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

module.exports = nextConfig;
