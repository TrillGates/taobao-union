<template>
  <div class="center-box">
    <div class="search-content-box clear-fix">
      <div class="search-content-item float-left"
           v-for="(item,index) in searchResult" :key="index">
        <a :href="item.coupon_share_url===null?item.url:item.coupon_share_url" target="_blank">
          <div class="search-content-cover">
            <el-image :src="item.pict_url"></el-image>
            <span class="off-prise-tips" v-if="item.coupon_amount!==null" v-text="'省'+item.coupon_amount+'元'"></span>
          </div>
          <div class="search-content-prise-info">
            <span class="original-prise" v-text="'￥'+item.zk_final_price"></span>
            <span>券后价: <span v-text="to2Bit(item.zk_final_price-item.coupon_amount)"></span>
          </span>
          </div>
          <div class="search-content-volume">
            <span v-text="item.volume+'·已购买'"></span>
          </div>
          <div class="search-content-title">
            <p v-text="item.title"></p>
          </div>
        </a>

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

  .search-content-cover {
    position: relative;
  }

  .off-prise-tips {
    position: absolute;
    background: #c9302c;
    color: #fff;
    padding: 5px 18px;
    top: 0;
    right: 0;
  }

  .search-content-title {
    font-size: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #000;
  }

  .search-content-volume {
    margin-bottom: 5px;
    color: #7f828b;
    font-size: 16px;
  }

  .search-content-prise-info .original-prise {
    text-decoration: line-through;
  }

  .search-content-prise-info {
    color: orangered;
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .search-content-box {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .search-content-item a {
    text-decoration: none;
  }

  .search-content-item:hover {
    border: #c63632 1px solid;
  }

  .search-content-item {
    cursor: pointer;
    width: 275px;
    margin: 5px;
    padding: 5px;
    border: #dfdfdf 1px solid;
  }

  .search-content-cover .el-image {
    width: 263px;
    height: 263px;
  }

</style>
