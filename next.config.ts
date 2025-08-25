import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "my-site";

const nextConfig: NextConfig = {
  output: "export", // generate static HTML into `out/`
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
