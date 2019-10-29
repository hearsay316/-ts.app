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
        this.loading = app.$toast.loading();
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
          this.loading ? this.loading.hide() : void 0;
          loading
            ? loading.length
              ? Array.from(loading).forEach((item, index, arr) =>
                  document.body.removeChild(arr[index])
                )
              : document.body.removeChild(loading)
            : void 0;
        }
        return res && res.data;
      },
      error => {
        delete this.queue[url];
        if (Object.keys(this.queue).length === 0) {
          this.loading ? this.loading.hide() : void 0;
          loading
            ? loading.length
              ? Array.from(loading).forEach((item, index, arr) =>
                  document.body.removeChild(arr[index])
                )
              : document.body.removeChild(loading)
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
