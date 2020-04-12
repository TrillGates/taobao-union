import request from './http';

export default {

  getCategories() {
    return request.requestGet("https://api.sunofbeach.net/shop/api/discovery/categories");
  },
  getCategoryContent(materialId, page) {
    return request.requestGet("https://api.sunofbeach.net/shop/api/discovery/" + materialId + "/" + page);
  }
}
