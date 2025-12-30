import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";
import { copyFileSync, readdirSync, statSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["**/*.ts", "**/*.tsx"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.variants.tsx"],
    }),
    {
      name: "copy-css-files",
      closeBundle() {
        // Copy CSS files to dist
        const copyRecursiveSync = (src: string, dest: string) => {
          const exists = existsSync(src);
          const stats = exists && statSync(src);
          const isDirectory = exists && stats.isDirectory();

          if (isDirectory) {
            mkdirSync(dest, { recursive: true });
            readdirSync(src).forEach((childItemName) => {
              copyRecursiveSync(
                join(src, childItemName),
                join(dest, childItemName)
              );
            });
          } else {
            copyFileSync(src, dest);
          }
        };

        copyRecursiveSync("./styles", "./dist/styles");
      },
    },
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "index.ts"),
        preview: resolve(__dirname, "preview.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        if (format === "es") return `${entryName}.mjs`;
        return `${entryName}.js`;
      },
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-router-dom",
        "react-feather",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    cssCodeSplit: false,
  },
});
