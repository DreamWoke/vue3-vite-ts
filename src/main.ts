import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/lib/theme-chalk/index.css"
import "./style/basic.less"
import App from "./App.vue"

const app = createApp(App)
app.use(ElementPlus, { size: "small", zIndex: 3000 })
app.mount("#app")
