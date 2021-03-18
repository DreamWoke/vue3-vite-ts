import { createApp } from "vue"
import App from "./App.vue"
import SvgIcon from "@/component/SvgIcon/index.vue"
import Router from "./route"
import ElementPlus from "element-plus"
import "./style/basic.scss"
import "./style/element-variables.scss"

const app = createApp(App)
app.component("SvgIcon", SvgIcon)
app.use(ElementPlus, { size: "small", zIndex: 3000 })
app.use(Router)
app.mount("#app")
