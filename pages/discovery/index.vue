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
    height: 1000px;
  }

  .discovery-right-part {
    width: 280px;
    margin-left: 10px;
    background: #89ffaa;
    height: 500px;
  }

</style>
