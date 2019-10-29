import Ajax from "./axios.config.js";
import { BaseUrl } from "./baseUrl.js";

const axios = new Ajax(BaseUrl);
export const GetSwiper = () =>
  axios.request({
    method: "get",
    url: "/swiper"
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
