import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@forms": path.resolve(__dirname, "./src/forms"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@assetsProvider": path.resolve(__dirname, "./src/config/index")
    }
  }
});
