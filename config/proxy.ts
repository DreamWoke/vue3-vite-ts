import type { ServerOptions } from "http-proxy"

type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type ProxyTargetList = Record<string, ServerOptions>

const httpsRE = /^https:\/\//

/**
 * Generate proxy
 * @param list
 */
export default function createProxy(list: ProxyList = []): ProxyTargetList {
    const ret: ProxyTargetList = {}
    for (const [prefix, target] of list) {
        const isHttps = httpsRE.test(target)
        ret[prefix] = {
            target: target,
            changeOrigin: true,
            ws: true,
            // https is require secure=false
            ...(isHttps ? { secure: false } : {}),
        }
    }
    return ret
}
