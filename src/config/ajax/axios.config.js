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
  deleteQueue(url) {
    delete this.queue[url];
    if (Object.keys(this.queue).length === 0) {
      this.loading ? this.loading.hide() : void 0;
      // noinspection SpellCheckingInspection,JSUnresolvedVariable
      loading
        ? loading.length
          ? Array.from(loading).forEach((item, index, arr) =>
              document.body.removeChild(arr[index])
            )
          : document.body.removeChild(loading)
        : void 0;
    }
  }
  setInterceptor(instance, url) {
    instance.interceptors.request.use(config => {
      if (Object.keys(this.queue).length === 0) {
        this.loading = app.$toast.loading();
      }
      this.queue[url] = url;
      return config;
    });
    // 响应拦截

    // noinspection JSCheckFunctionSignatures
    instance.interceptors.response.use(
      res => {
        this.deleteQueue(url);
        return res && res.data;
      },
      error => {
        this.deleteQueue(url);
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
