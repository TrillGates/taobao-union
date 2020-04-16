<template>
  <div class="center-box clear-fix">
    <div class="discovery-content-box">
      <div class="discovery-left-part float-left">
        <ul>
          <li v-for="(item,index) in categoriesList" :key="index">
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
      <div class="discovery-center-part float-left">
        这个中间部分
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
        return {
          categoriesList: categoriesResult.data
        }
      }
    }
  }
</script>
<style>


  .discovery-content-box {
    margin-top: 20px;
  }

  /*1140,分三份，左：120*/
  .discovery-left-part {
    height: 300px;
    margin-right: 10px;
    width: 110px;
    background: #7f828b;
  }

  .discovery-center-part {
    width: 710px;
    margin-left: 10px;
    margin-right: 10px;
    background: antiquewhite;
    height: 1000px;
  }

  .discovery-right-part {
    width: 280px;
    margin-left: 10px;
    background: #89ffaa;
    height: 500px;
  }

</style>
