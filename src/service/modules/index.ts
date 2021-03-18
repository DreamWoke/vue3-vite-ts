import authApiMap from "./auth"
export interface RequestDefine<P, R> {
    params: P
    response: R
}

export type RequestList = authApiMap
