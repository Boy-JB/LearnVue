import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

import toast from 'components/common/toast/index'

Vue.config.productionTip = false;

//安装toast插件
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body)

// 使用懒加载的图片
Vue.use(VueLazyLoad)

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
