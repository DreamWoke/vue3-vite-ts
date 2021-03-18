import { ViteEnv } from "./@types/env"

export const formatEnv = (envConf: Record<string, string>): ViteEnv => {
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_APP_TITLE } = envConf
    return {
        VITE_PORT: Number(VITE_PORT),
        VITE_PUBLIC_PATH,
        VITE_PROXY: JSON.parse(VITE_PROXY.replace(/\\n/g, "\n")),
        VITE_APP_TITLE,
    }
}
