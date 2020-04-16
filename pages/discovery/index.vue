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
              <a :href="item.coupon_click_url" target="_blank">
                 <span v-text="item.title">

              </span>
              </a>
            </div>
            <div class="prise-info">
              <span class="original-prise" v-text="'原价:'+item.zk_final_price"></span>
              <span class="off-prise">券后价: <span v-text="to2Bit(item.zk_final_price-item.coupon_amount)"></span></span>

            </div>
            <div class="sell-info">
              <span v-text="item.volume"></span>
              <span>·</span>
              <span>人已购买</span>
            </div>
          </div>
          <a target="_blank" :href="item.coupon_click_url" class="discovery-buy-btn" type="danger" size="small">领券购买</a>
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
    methods: {
      to2Bit(num) {
        return num.toFixed(2);
      }
    },
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


  .original-prise {
    color: #999999;
    text-decoration: line-through;
  }

  .off-prise {
    color: orangered;
  }

  .discovery-buy-btn:hover {
    background-color: orangered;
    border-color: orangered;
  }

  .discovery-buy-btn {
    text-decoration: none;
    padding: 8px 20px;
    border-radius: 5px;
    position: absolute;
    bottom: 20px;
    background-color: #F56C6C;
    border-color: #F56C6C;
    color: white;
    right: 20px;
  }

  .discovery-category-active {
    color: #fff;
    background: #ff4500;
  }

  .discovery-content-box {
    margin-top: 20px;
  }

  .sell-info {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #47494e;
    font-size: 16px;
  }


  .prise-info {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 600;
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


  .item-left-cover img {
    border-radius: 5px;
  }

  .item-title a {
    font-size: 22px;
    color: #47494e;
    text-decoration: none;
  }

  .item-title {
    cursor: pointer;
    max-width: 500px;
    font-weight: 600;
  }

  .item-right-info {
    margin-left: 10px;
  }

  .discovery-content-item {
    margin-bottom: 10px;
    position: relative;
    padding: 10px;
    background: #fff;
    box-shadow: 0px 5px 10px #d4d4d4;
  }

  .discovery-center-part {
    width: 710px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .discovery-right-part {
    width: 280px;
    margin-left: 10px;
    background: #89ffaa;
    height: 500px;
  }

</style>
