import type { Plugin } from "vite"
import html from "vite-plugin-html"
import { ViteEnv } from "../@types/env"

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean): Plugin[] {
    const { VITE_APP_TITLE, VITE_PROXY } = env

    const htmlPlugin: Plugin[] = html({
        minify: isBuild,
        inject: {
            injectData: {
                title: VITE_PROXY,
            },
        },
    })
    return htmlPlugin
}
