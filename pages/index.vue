<template>
  <section class="container">
    <div class="center-box">
      <div class="recommend-category-box">
        <ul class="clear-fix">
          <li :class="index!==0?'float-left':'float-left recommend-menu-active'" v-for="(item,index) in categories"
              :key="index" v-text="item.favorites_title">
          </li>
        </ul>
      </div>
      <div class="recommend-content-list-box">
        <div class="recommend-content-title">
          <span v-html="currentCategory"></span>
        </div>
        <div class="recommend-content-list clear-fix">
          <div class="recommend-content-item float-left"
               v-for="(item,index) in content.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item" :key="index">
            <div class="recommend-item-cover">
              <img :src="item.pict_url">
            </div>
            <div class="recommend-item-title">
              <a v-text="item.title" :href="item.coupon_click_url!==null?item.coupon_click_url:item.click_url"
                 target="_blank"></a>
            </div>
            <div class="recommend-item-info">
              <a v-if="item.coupon_click_url!==null" class="buy-btn" :href="item.coupon_click_url"
                 target="_blank">领券购买</a>
              <span class="recommend-prise" v-text="item.coupon_click_url===null?'晚了，无优惠券':'原价：'+item.zk_final_price">原价：34.00</span>
            </div>
            <span class="recommend-coupon-info" v-if="item.coupon_info!==null" v-text="item.coupon_info">

            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import api from '../utils/api';

  export default {
    components: {
      AppLogo
    },
    async asyncData() {
      console.log("test load data....");
      let categoryResult = await api.getRecommendCategories();
      if (categoryResult.code === 10000) {
        //请求分类成功
        //去获取分类商品列表
        let contentResult = await api.getRecommendContent(categoryResult.data[0].favorites_id);
        //console.log(contentResult.data.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item);
        let titleArray = categoryResult.data[0].favorites_title.split('');
        if (contentResult.code === 10000) {
          return {
            categories: categoryResult.data,
            content: contentResult.data,
            currentCategory: titleArray.join("<em>/</em>")
          };
        }
      } else {
        //TODO:请求分类失败
      }
    }
  }
</script>

<style>

  .recommend-content-title span {
    font-size: 20px;
    font-weight: 600;
    color: #4D555D;
    font-style: normal;
    margin: 0 3px;
  }

  .recommend-content-title em {
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 400;
    font-size: 16px;
  }

  .recommend-content-title {
    text-align: center;
  }

  .recommend-coupon-info {
    position: absolute;
    right: 12px;
    top: 20px;
    padding: 5px 10px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background: #c9302c;
    color: #fff;
  }

  .buy-btn {
    text-decoration: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #FFF;
    background-color: #F56C6C;
    border-color: #F56C6C;
  }

  .recommend-prise {
    margin-left: 10px;
    font-weight: 600;
    color: #ebb563;
  }

  .recommend-item-info {
    margin-top: 10px;
  }

  .recommend-item-title a {
    margin-top: 10px;
    margin-top: 10px;
    text-decoration: none;
    color: #47494e;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .recommend-content-item {
    width: 265px;
    position: relative;
    box-shadow: 0 5px 10px #d4d4d4;
    background: #fff;
    padding: 10px 10px;
    margin: 10px;
    height: 370px;
  }

  .recommend-item-cover img {
    border-radius: 5px;
    width: 243px;
    height: 243px;
  }

  .recommend-menu-active {
    border-bottom: #c9302c 2px solid;
    color: #c9302c !important;
  }

  .recommend-category-box li {
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
    color: #8c8c8c;
    margin-right: 20px;
  }

  .recommend-category-box {
    height: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #fff;
    line-height: 58px;
    box-shadow: 0 5px 10px #d4d4d4;
  }

  .recommend-category-box ul {
    list-style: none;
  }
</style>

