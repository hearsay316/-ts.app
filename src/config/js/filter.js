import Vue from "vue";
/**
 *金额处理
 * @param value 锅炉的文本
 */
Vue.filter("priceValue", function(value) {
  if (!value) return "";
  let result = parseFloat(value);
  if (Number.isInteger(result)) {
    return result;
  }
  return result.toFixed(2);
});
