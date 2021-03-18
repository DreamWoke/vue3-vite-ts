<template>
    <el-menu
        default-active="2"
        class="yb-nav-menu"
        background-color="#001529"
        text-color="#909399"
        active-text-color="#ffffff"
    >
        <el-menu-item
            v-for="item in MENU_DATA"
            :key="item.id"
            :index="item.id"
            @click="skipMenu(item.route)"
        >
            <svg-icon class="menu-icon" :name="item.icon" />
            {{ item.itemName }}
        </el-menu-item>
    </el-menu>
</template>
<script lang="ts">
import { MENU_DATA } from "./constants"
import { defineComponent, ref } from "vue"
import { onBeforeRouteUpdate, useRouter } from "vue-router"

export default defineComponent({
    setup() {
        let activeMenu = ref(MENU_DATA[0].id)
        const router = useRouter()
        onBeforeRouteUpdate((to) => {
            const activeUrl = MENU_DATA.filter(
                (item) => item.route === to.path
            )[0]
            activeMenu.value = activeUrl.id
        })

        function skipMenu(route: string) {
            router.push(route)
        }
        return {
            MENU_DATA,
            activeMenu,
            skipMenu,
        }
    },
})
</script>
<style lang="less" src="./index.scss" />
