import { ViteEnv } from "./@types/env"

export const formatEnv = (envConf: any): ViteEnv => {
    const envObj: any = {}

    for (const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, "\n")
        realName =
            realName === "true" ? true : realName === "false" ? false : realName
        if (envName === "VITE_PORT") {
            realName = Number(realName)
        }
        if (envName === "VITE_PROXY") {
            try {
                realName = JSON.parse(realName)
            } catch (error) {}
        }
        envObj[envName] = realName
        process.env[envName] = realName
    }
    return envObj
}
