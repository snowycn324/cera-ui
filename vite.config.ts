import vue from '@vitejs/plugin-vue2';
import { defineConfig } from "vite";
import { resolve } from 'path';
// import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue(),
    // viteCompression()
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'cera-ui',
    },
    outDir: "dist",
    minify: false,
    rollupOptions: {
      external: ["vue"],
      input: "./lib/index.ts",
      output: {
        globals: {
          vue: "Vue"
        },
        exports: 'named',
      },
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // alias: [{ find: /^vue$/, replacement: 'vue/dist/vue.runtime.common.js' }],
  },
});