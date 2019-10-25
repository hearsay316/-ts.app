import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//import "@config/nutui/index.ts";
import "@config/vue-rx/index.ts";
import "@config/js/htmlFontSize.js";
import "swiper/css/swiper.min.css";

//import "@css/style.styl";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
