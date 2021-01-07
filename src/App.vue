<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld ls="234" :msg="we" />
  <Foo />
  <el-button type="primary">默认按钮</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld from "Components/HelloWorld.tsx";
import Foo from "Components/demo";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Foo,
  },
  data() {
    return {
      we: "22",
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
