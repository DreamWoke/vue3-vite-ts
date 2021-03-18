import axios, { AxiosPromise, AxiosRequestConfig } from "axios"
import { ElMessage, ElNotification } from "element-plus"
// import { getToken } from "@/utils/token"
// import Router from "@/router"
// import store from "@/store"
import { RequestList } from "@/service/modules"

interface ServiceParams<T extends keyof RequestList>
    extends AxiosRequestConfig {
    url: T
    data?: RequestList[T]["params"]
}

type RequestFunc = <T extends keyof RequestList>(
    params: ServiceParams<T>
) => AxiosPromise<RequestList[T]["response"]>

const AxiosInstance = axios.create({
    method: "POST",
    timeout: 10000,
    withCredentials: true,
    baseURL: "/iam/admin",
})
const processError = async (error: any) => {
    // 这边处理http的错误状态 而不处理返回中的如  respCode 的错误信息
    if (error && error.response) {
        const status = error.response.status
        switch (status) {
            case 400:
                error.message = "请求错误"
                break
            case 401:
                // await store.dispatch("user/resetToken")
                error.message = "未授权，请登录"
                // store.dispatch("user/resetToken")
                error.message = "登录信息已过期"
                // Router.push({ path: "/login" })
                break
                break
            case 403:
                error.message = "拒绝访问"
                break
            case 404:
                error.message = `请求地址出错: ${error.response.config.url}`
                break
            case 408:
                error.message = "请求超时"
                break
            case 500:
                error.message = "服务器内部错误"
                break
            case 501:
                error.message = "服务未实现"
                break
            case 502:
                error.message = "网关错误"
                break
            case 503:
                error.message = "服务不可用"
                break
            case 504:
                error.message = "网关超时"
                break
            case 505:
                error.message = "HTTP版本不受支持"
                break
            default:
                break
        }
    }
    ;(ElNotification as any).closeAll()
    ElNotification({
        title: "系统错误",
        dangerouslyUseHTMLString: true,
        message: error.message,
        type: "error",
        duration: 5 * 1000,
    })

    return Promise.reject(error)
}
AxiosInstance.interceptors.request.use((config) => {
    // config.baseURL = Domain + config.baseURL
    config.headers["Authorization"] =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTU4MDIyOTAsImlhdCI6MTYxNTc5NTA5MCwiaXNzIjoieXVuYmFvIiwidXNlcl9pZCI6MTMyMTAyMTY2ODM5ODMwNTI4MCwicm9sZSI6MSwib3JnX2lkIjowfQ.duzfdECjQHcPD_b-4LE562KZDzdzOLoDZlxNSa-NEQVWjGutMQDP5T0qRE5OIyZDcgBPKMxxDbuMiwGHiim3rOXiRI5qpuYeJJjAP_ibaW24a7E-U0nd7tNS5yiiGivH9oFbf_NPdxLD2du7XzOfgqRaDwRLHtQ1pzQfOgpG2Rk"
    // config.headers["Content-Type"] = ["application/json"] // 为mock增加，联调时考虑删除
    return config
})

AxiosInstance.interceptors.response.use((response) => {
    const res = response.data
    if (res.code !== 0) {
        ElMessage({
            message: res.message || "Error",
            type: "error",
            duration: 3 * 1000,
        })
        return Promise.reject(res)
    }
    return response
}, processError)

const Service: RequestFunc = AxiosInstance.request

export default Service
