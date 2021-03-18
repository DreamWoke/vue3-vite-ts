import { CommonResponse } from "../common"

export type grantAuthUrlResponse = CommonResponse<{
    installAuthUrl: string
    expiresIn: number
}>

export type grantAuthStatusResponse = CommonResponse<{
    status: number
}>

export interface describeUserBaseInfosResponse {
    id: string
    name: string
    cellphone: string
    parentName: string
    levelName: string
    departmentName: string
}
export interface describeOrgInsurersResponse {
    insurers: string[]
    totalCount: number
}
