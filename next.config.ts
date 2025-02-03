import nextra from "nextra";

const withNextra = nextra({ contentDirBasePath: "/docs" });

export default withNextra({
  output: "export",
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ["tsx", "mdx"],
});
