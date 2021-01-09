const path = require("path")
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const {resolve} = path;

export default defineConfig({
  // root:path.resolve(__dirname,"./index.html"),
  alias: {
    "@": resolve(__dirname,"./src"),
    Components: resolve(__dirname, "./src/components"),
  },
  build:{
    base:"https://vue3-vite-ts-1300990907.cos.ap-shanghai.myqcloud.com/",
  },
  plugins: [vue()],
  server:{
    hmr:{overlay:false}
  },
  esbuild: {
    jsxInject: `import { h } from 'vue'`,
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
//   esbuild: {
//     jsxInject: `import { h } from 'vue'`,
//     jsxFactory: 'h',
//     jsxFragment: 'Fragment'
//   }
// })