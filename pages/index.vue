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
    asyncData() {
      console.log("test load data....");
      return api.getRecommendCategories().then(result => {
        if (result.code === 10000) {
          return {categories: result.data};
        } else {
          //TODO:处理错误
        }
      });
    }
  }
</script>

<style>

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

