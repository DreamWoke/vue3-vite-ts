import type { Plugin } from "vite"
import { ViteEnv } from "../@types/env"
import { configHtmlPlugin } from "./htmlPlugin"

type vitePluginsType = (Plugin | Plugin[])[]

export function createVitePlugins(
    viteEnv: ViteEnv,
    isBuild: boolean
): vitePluginsType {
    const vitePlugins: vitePluginsType = []

    // vite-plugin-html
    vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))
    return vitePlugins
}
