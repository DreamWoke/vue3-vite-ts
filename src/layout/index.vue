<template>
    <Layout>
        <template #header>
            <div class="header">
                <div class="header-left">优飞管理平台</div>
                <div class="header-right">right</div>
            </div>
        </template>
        <template #sider>
            <Sider />
        </template>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Sider from "./navMenu/index.vue"
import Layout from "@/component/Layout/index.vue"
export default defineComponent({
    components: { Layout, Sider },
})
</script>
<style lang="less" src="./index.scss"></style>
