import path from "path"
import { defineConfig, UserConfigExport, ConfigEnv, loadEnv } from "vite"
import { formatEnv } from "./config/utils"
import createProxy from "./config/proxy"
import { createVitePlugins } from "./config/plugins"
import vue from "@vitejs/plugin-vue"

const { resolve } = path
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
    const root: string = process.cwd()
    const env = loadEnv(mode, root)
    const isBuild = command === "build"
    const viteEnv = formatEnv(env)
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv
    return defineConfig({
        base: VITE_PUBLIC_PATH,
        alias: {
            "@": resolve(__dirname, "./src"),
            Components: resolve(__dirname, "./src/components"),
        },
        build: {
            assetsDir: "static",
        },
        plugins: [...createVitePlugins(viteEnv, isBuild), vue()],
        server: {
            port: VITE_PORT,
            proxy: createProxy(VITE_PROXY),
            hmr: {
                overlay: true,
            },
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
        json: {
            namedExports: true,
            stringify: true,
        },
    })
}
