import Ajax from "./axios.config.js";
import { BaseUrl } from "./baseUrl.js";

const axios = new Ajax(BaseUrl);
export const ToSwiperPic = () =>
  axios.request({
    method: "get",
    url: "/swiper"
  });
export const ToActivityPic = () =>
  axios.request({
    method: "get",
    url: "/activity"
  });
export const ToSeconds = () =>
  axios.request({
    method: "get",
    url: "/seconds "
  });
let a = {
  stata: 0,
  data: {
    list: [
      {
        id: 1,
        icon: "http://imooc.res.lgdsunday.club/swiper-1.jpg"
      },
      {
        id: 2,
        icon: "http://imooc.res.lgdsunday.club/swiper-2.jpg"
      },
      {
        id: 3,
        icon: "http://imooc.res.lgdsunday.club/swiper-3.jpg"
      },
      {
        id: 4,
        icon: "http://imooc.res.lgdsunday.club/swiper-4.jpg"
      },
      {
        id: 5,
        icon: "http://imooc.res.lgdsunday.club/swiper-5.jpg"
      },
      {
        id: 6,
        icon: "http://imooc.res.lgdsunday.club/swiper-6.jpg"
      },
      {
        id: 7,
        icon: "http://imooc.res.lgdsunday.club/swiper-7.jpg"
      },
      {
        id: 8,
        icon: "http://imooc.res.lgdsunday.club/swiper-8.jpg"
      },
      {
        id: 9,
        icon: "http://imooc.res.lgdsunday.club/swiper-9.jpg"
      }
    ]
  }
};

let b = {
  stata: 0,
  data: {
    list: [
      {
        id: 1,
        icon: "http://imooc.res.lgdsunday.club/520-1.gif"
      },
      {
        id: 2,
        icon: "http://imooc.res.lgdsunday.club/520-2.gif"
      },
      {
        id: 3,
        icon: "http://imooc.res.lgdsunday.club/520-3.gif"
      }
    ]
  }
};
