import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)（项目当前版本并没有出现）
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const myApp = () => {
  const app = createApp(App);

  app
    .use(ElementPlus, {
      // locale: zhCn,
    })
    .mount('#app');
};

myApp();
