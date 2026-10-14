/** Static export → `out/` (deploy to GitHub Pages / any static host) */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
