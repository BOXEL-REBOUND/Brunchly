import { execSync } from "node:child_process";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
    output: "hybrid",
    adapter: node({
        mode: "middleware",
    }),
    integrations: [tailwind({ applyBaseStyles: false })],
    prefetch: {
        defaultStrategy: "viewport",
        prefetchAll: false,
    },
    vite: {
        define: {
            __COMITT_DATE__: JSON.stringify(execSync("git show --no-patch --format=%ci").toString().trim(),),
        },
    },
});