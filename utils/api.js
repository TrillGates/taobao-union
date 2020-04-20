import request from './http';

export const baseUrl = "https://api.sunofbeach.net/shop/api/";

const SUCCESS_CODE = 10000;

export default {
  SUCCESS_CODE,

  getCategories() {
    return request.requestGet(baseUrl + "discovery/categories");
  },
  getCategoryContent(materialId, page) {
    return request.requestGet(baseUrl + "discovery/" + materialId + "/" + page);
  },

  getCategoryContentByProxy(materialId, page) {
    return request.requestGet("/union/discovery/" + materialId + "/" + page);
  },

  getRecommendCategories() {
    return request.requestGet(baseUrl + "recommend/categories")
  },

  getRecommendContent(categoryId) {
    return request.requestGet(baseUrl + "/recommend/" + categoryId)
  },
  getRecommendContentByProxy(categoryId) {
    return request.requestGet("/union/recommend/" + categoryId)
  }
}
