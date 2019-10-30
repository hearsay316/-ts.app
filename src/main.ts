import Vue from "vue";
import App from "./App.vue";
//import "./registerServiceWorker";
import router from "@/router/index.ts";
import store from "@/store/index.ts";
//import "@config/nutui/index.ts";
//import "@config/vue-rx/index.ts";
import "@config/js/htmlFontSize.js";
import "@config/js/filter.js";

//import "@css/style.styl";
Vue.config.productionTip = false;
export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
