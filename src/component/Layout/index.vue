<template>
    <div class="yb-layout">
        <el-row class="yb-layout-header">
            <el-col :span="24">
                <!--头部-->
                <slot name="header" />
            </el-col>
        </el-row>
        <el-row class="yb-layout-body">
            <el-col :span="2">
                <slot name="sider" />
            </el-col>
            <el-col :span="22">
                <router-view />
                <div class="grid-content bg-purple-light" />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({})
</script>

<style lang="less" src="./index.scss" />
