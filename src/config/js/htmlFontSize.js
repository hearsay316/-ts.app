// 定义最大的 fontSize
const MAX_FONT_SIZE = 42;
// 监听html 文档被解析的完成事件
document.addEventListener("DOMContentLoaded", () => {
  // 获取 html 标签
  const html = document.querySelector("html");
  //  获取根元素的 fontSize 标准
  let fontSize = window.innerWidth / 10;
  //获取的fontsize 不允许超过我们最大的值
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
  html.style.fontSize = `${fontSize}px`;
});
