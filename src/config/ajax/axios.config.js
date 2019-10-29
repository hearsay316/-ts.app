import axios from "axios";
import { app } from "../../main.ts";
// 封装axios请求
class AjaxRequest {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
    this.timeout = 3000;
    this.queue = {};
  }

  merge(options) {
    return { ...options, baseURL: this.baseURL, timeout: this.timeout };
  }

  setInterceptor(instance, url) {
    instance.interceptors.request.use(config => {
      if (Object.keys(this.queue).length === 0) {
        //   store.commit("ShowLoading");
        let loading = document.getElementById("loading");

        loading
          ? (loading.style.display = "block")
          : (this.loading = app.$toast.loading());
      }
      this.queue[url] = url;
      // eslint-disable-next-line no-console
      console.log(config.headers);
      return config;
    });
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        delete this.queue[url];
        if (Object.keys(this.queue).length === 0) {
          // eslint-disable-next-line no-console
          console.log(this.loading, 111111);
          this.loading ? this.loading.hide() : void 0;
          loading
            ? [...loading].forEach(item => (item.style.display = "none"))
            : void 0;
        }
        return res;
      },
      error => {
        delete this.queue[url];
        if (Object.keys(this.queue).length === 0) {
          // eslint-disable-next-line no-console
          console.log(this.loading, 222222);
          this.loading ? this.loading.hide() : void 0;
          loading
            ? [...loading].forEach(item => (item.style.display = "none"))
            : void 0;
          //store.commit("HideLoading");
        }
        throw error;
      }
    );
  }

  request(options) {
    let instance = axios.create();
    this.setInterceptor(instance, options.url);
    let config = this.merge(options);
    return instance(config);
  }
}

export default AjaxRequest;
