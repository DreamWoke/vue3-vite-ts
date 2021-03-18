import { createRouter, createWebHistory } from "vue-router"
import BusinessRouter from "./businessRoute"

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [...BusinessRouter],
    strict: true,
})

export default router
