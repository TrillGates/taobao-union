<template>
  <div class="center-box clear-fix">
    <div class="discovery-content-box">
      <div class="discovery-left-part float-left">
        <ul>
          <li :class="currentCategoryId===item.id?'discovery-category-active':''" v-for="(item,index) in categoriesList"
              :key="index">
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
      <div class="discovery-center-part float-left">
        <div class="discovery-content-item clear-fix" v-for="(item,index) in contentList" :key="index">
          <div class="item-left-cover float-left">
            <el-image
              style="width: 180px; height: 180px"
              :src="item.pict_url"
              :fit="fit"></el-image>
          </div>
          <div class="float-left item-right-info">
            <div class="item-title">
              <span v-text="item.title">

              </span>
            </div>
            <div class="prise-info">
              <span v-text="'原价:'+item.zk_final_price"></span>
              <span>券后价:</span>
              <span v-text="item.zk_final_price-item.coupon_amount"></span>
            </div>
            <div class="sell-info">
              <span v-text="item.volume"></span>
              <span>·</span>
              <span>已购买</span>
            </div>
          </div>
          <el-button type="danger" size="small">领券购买</el-button>
        </div>
      </div>
      <div class="discovery-right-part float-left">
        这个右边部分
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../../utils/api';

  export default {
    async asyncData() {
      let categoriesResult = await api.getCategories();
      console.log(categoriesResult);
      if (categoriesResult.code === api.SUCCESS_CODE) {
        let categoriesList = categoriesResult.data;
        //拿推荐里的内容
        let recommendItem = categoriesList[0];
        let currentCategoryId = recommendItem.id;
        let contentResult = await api.getCategoryContent(currentCategoryId, 1);
        if (contentResult.code === api.SUCCESS_CODE) {
          //console.log(contentResult.data);
          return {
            currentCategoryId,
            categoriesList,
            contentList: contentResult.data,
          }
        }
      }
    }
  }
</script>
<style>

  .discovery-category-active {
    color: #fff;
    background: #ff4500;
  }

  .discovery-content-box {
    margin-top: 20px;
  }


  .discovery-left-part li:hover {
    background: #ff4500;
    color: #fff;
  }

  .discovery-left-part span {
    line-height: 40px;
  }

  .discovery-left-part li {
    width: 105px;
    height: 40px;
    cursor: pointer;
    text-align: center;
  }

  /*1140,分三份，左：120*/
  .discovery-left-part {
    margin-right: 10px;
    width: 105px;
    margin-left: 5px;
    background: #fff;
    box-shadow: 0px 5px 10px #d4d4d4;
  }

  .discovery-center-part {
    width: 710px;
    margin-left: 10px;
    margin-right: 10px;
    background: antiquewhite;
  }

  .discovery-right-part {
    width: 280px;
    margin-left: 10px;
    background: #89ffaa;
    height: 500px;
  }

</style>
