import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: './', //打包路径
  // resolve: {
  //   alias: {
  //   },
  // },
  // server: {
  //   port: 4000, //启动端口
  //   open: true,
  //   proxy: {
  //     '/api': 'http://123.56.85.24:5000', //代理网址
  //   },
  //   cors: true,
  // },
});
