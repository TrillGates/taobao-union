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
          <span>上/班/族/早/餐</span>
        </div>
        <div class="recommend-content-list clear-fix">
          <div class="recommend-content-item float-left"
               v-for="(item,index) in content.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item" :key="index">
            <div class="recommend-item-cover">
              <img :src="item.pict_url">
            </div>
            <div class="recommend-item-title" v-text="item.title">

            </div>
            <div class="recommend-item-info">
              <el-button type="danger">领券购买</el-button>
              <span>原价：34.00</span>
            </div>
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
        console.log(contentResult.data);
        if (contentResult.code === 10000) {
          return {
            categories: categoryResult.data,
            content: contentResult.data
          };
        }
      } else {
        //TODO:请求分类失败
      }
    }
  }
</script>

<style>

  .recommend-content-item {
    width: 285px;
    height: 370px;
  }

  .recommend-item-cover img {
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

