import request from './http';

export const baseUrl = "https://api.sunofbeach.net/shop/api/";

export default {

  getCategories() {
    return request.requestGet(baseUrl + "discovery/categories");
  },
  getCategoryContent(materialId, page) {
    return request.requestGet(baseUrl + "discovery/" + materialId + "/" + page);
  },

  getRecommendCategories() {
    return request.requestGet(baseUrl + "recommend/categories")
  },

  getRecommendContent(categoryId) {
    return request.requestGet(baseUrl + "/recommend/" + categoryId)
  }
}
