import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "index.ts",
    preview: "preview.ts", // Entry point that includes CSS for previews
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "react-router-dom", "react-feather"],
  loader: {
    ".css": "css", // Bundle CSS instead of just copying
  },
  async onSuccess() {
    // Copy CSS files to dist
    const fs = await import("fs");
    const path = await import("path");

    const copyRecursiveSync = (src, dest) => {
      const exists = fs.existsSync(src);
      const stats = exists && fs.statSync(src);
      const isDirectory = exists && stats.isDirectory();

      if (isDirectory) {
        fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach((childItemName) => {
          copyRecursiveSync(
            path.join(src, childItemName),
            path.join(dest, childItemName)
          );
        });
      } else {
        fs.copyFileSync(src, dest);
      }
    };

    copyRecursiveSync("./styles", "./dist/styles");
  },
});
