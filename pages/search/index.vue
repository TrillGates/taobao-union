<template>
  <div class="center-box">
    <div class="search-content-box clear-fix">
      <div class="search-content-item float-left"
           v-for="(item,index) in searchResult" :key="index">
        <div class="search-content-cover">
          <el-image :src="item.pict_url"></el-image>
        </div>
        <div class="search-content-prise-info">
          <span v-text="'￥'+item.zk_final_price"></span>
          <span>券后价: <span v-text="to2Bit(item.zk_final_price-item.coupon_amount)"></span>
          </span>
        </div>
        <div class="search-content-volume">
          <span v-text="item.volume+'·已购买'"></span>
        </div>
        <div class="search-content-title">
          <p v-text="item.title"></p>
        </div>
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
      },
    },
    asyncData(context) {
      console.log('isClient == > ' + process.server);
      //console.log(context.route.query);
      let keyword = context.query.keyword;
      console.log(keyword);
      if (process.server) {
        return api.doSearch(encodeURI(keyword), 1).then(result => {
          console.log(result);
          if (result.code === api.SUCCESS_CODE) {
            console.log(result.data);
            return {
              searchResult: result.data.tbk_dg_material_optional_response.result_list.map_data
            };
          }
        });
      } else {
        return api.doSearchByProxy(encodeURI(keyword), 1).then(result => {
          if (result.code === api.SUCCESS_CODE) {
            return {
              searchResult: result.data.tbk_dg_material_optional_response.result_list.map_data
            };
          }
        })
      }

    }
  }
</script>
<style>

  .search-content-item {
    width: 275px;
  }

  .search-content-cover .el-image {
    width: 263px;
    height: 263px;
  }

</style>
