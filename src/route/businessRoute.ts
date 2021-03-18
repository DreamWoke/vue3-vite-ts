import { RouteRecordRaw } from "vue-router"
import Layout from "@/layout/index.vue"
const businessRouter: RouteRecordRaw[] = [
    /**
     * 代理机构管理
     */
    {
        path: "/",
        name: "layout",
        redirect: "/agencyOrg",
        component: Layout,
        children: [
            {
                path: "agencyOrg",
                name: "agencyOrg",
                component: () =>
                    import(
                        /* webpackChunkName: "agencyOrg" */ "@/view/agencyOrg/index.vue"
                    ),
            },
            {
                path: "insuranceOrg",
                name: "insuranceOrg",
                component: () =>
                    import(
                        /* webpackChunkName: "insuranceOrg" */ "@/view/insuranceOrg/index.vue"
                    ),
            },
        ],
    },
]

export default businessRouter
