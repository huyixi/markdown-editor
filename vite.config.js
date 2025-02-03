import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import MarkdownIt from "markdown-it";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), MarkdownIt()],
});
