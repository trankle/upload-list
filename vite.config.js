import { fileURLToPath, URL } from 'node:url'
import { dirname } from "node:path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";

function getCurrnetDir () {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return {__filename , __dirname};
}


export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: path.resolve(getCurrnetDir().__dirname, 'src/packages/index.js'),  // 打包入口文件
      name: 'trankle-upload-list',    // 打包的名字
      fileName: (format) => `vue3-google-facebook-signin.${format}.js`  // 打包生成的文件名
    },
    rollupOptions: {
      // 不需要打包进库的依赖，忽略vue
      external: ['vue'],
      output: {
        // UMD构建模式下为这些外部的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
})
