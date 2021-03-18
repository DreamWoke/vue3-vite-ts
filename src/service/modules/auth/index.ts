import { RequestDefine } from "../index"
import {
    grantAuthUrlParam,
    grantAuthStatusParam,
    describeUserBaseInfosParam,
    describeOrgInsurersParam,
} from "./param"
import {
    grantAuthUrlResponse,
    grantAuthStatusResponse,
    describeUserBaseInfosResponse,
    describeOrgInsurersResponse,
} from "./response"

export default interface authApiMap {
    describeInstallAuthUrl: RequestDefine<
        grantAuthUrlParam,
        grantAuthUrlResponse
    >
    describeInstallAuthStatus: RequestDefine<
        grantAuthStatusParam,
        grantAuthStatusResponse
    >
    describeUserBaseInfos: RequestDefine<
        describeUserBaseInfosParam,
        describeUserBaseInfosResponse
    >
    describeOrgInsurers: RequestDefine<
        describeOrgInsurersParam,
        describeOrgInsurersResponse
    >
}
