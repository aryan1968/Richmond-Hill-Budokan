import type { NextConfig } from "next";

// Static export config for GitHub Pages demo hosting.
// Set GITHUB_PAGES=true (done automatically by the deploy workflow) to
// prefix all paths with the repo name, matching the project-pages URL
// (https://<user>.github.io/<repo>/). Remove this basePath logic once the
// site moves to its own domain.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "Richmond-Hill-Budokan";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
