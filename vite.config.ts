import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

const { resolve } = path

export default defineConfig({
    // root:path.resolve(__dirname,"./index.html"),
    base: "https://vue3-vite-ts-1300990907.cos.ap-shanghai.myqcloud.com/",
    alias: {
        "@": resolve(__dirname, "./src"),
        Components: resolve(__dirname, "./src/components"),
    },
    publicDir: "public",
    plugins: [vue()],
    server: {
        hmr: { overlay: false },
    },
    esbuild: {
        jsxInject: `import { h } from 'vue'`,
        jsxFactory: "h",
        jsxFragment: "Fragment",
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    // json:{
    //     namedExports:true,
    //     stringify:true
    // }
})
