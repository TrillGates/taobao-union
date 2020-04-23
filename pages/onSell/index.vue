<template>
  <div class="center-box">
    <div class="onSell-content-box clear-fix">
      <div class="onSell-content-item float-left" v-for="(item,index) in contentList" :key="index">
        <a :href="item.coupon_click_url" target="_blank">
          <div class="onSell-item-cover">
            <el-image
              style="width: 263px; height: 263px"
              :src="item.pict_url+'_270x270xzq90.jpg_.webp'"
              fit="cover"></el-image>
            <div class="onSell-off-prise">
              省{{item.coupon_amount}}元
            </div>
          </div>
          <div class="onSell-item-prise">
            <span class="onSell-item-final-prise" v-text="'￥'+item.zk_final_price"></span>
            <span>
            券后价:
            <span v-text="to2Bit(item.zk_final_price-item.coupon_amount)"></span>
          </span>
          </div>
          <div class="onSell-item-volume">
            <span v-text="item.volume"></span>
            ·人已购买
          </div>
          <div class="onSell-item-title">
            <p v-text="item.title">

            </p>
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
    asyncData() {
      return api.getOnSellContent(1).then(result => {
        console.log(result);
        if (result.code === api.SUCCESS_CODE) {
          let data = result.data.tbk_dg_optimus_material_response.result_list.map_data;
          return {contentList: data};
        }
      });
    },
    mounted() {
      this.$store.commit('setCurrentActive', 'onSell');
    }
  }
</script>

<style>

  .onSell-item-title {
    font-weight: 600;
    min-height: 43px;
    font-size: 16px;
    color: #000;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .onSell-item-volume {
    font-size: 14px;
    color: #7f828b;
    margin-bottom: 5px;
  }

  .onSell-item-prise {
    color: #F40;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .onSell-item-final-prise {
    text-decoration: line-through;
  }

  .onSell-content-box {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .onSell-content-item:hover {
    border: #c9302c solid 1px;
  }

  .onSell-content-item > a {
    text-decoration: none;
  }

  .onSell-content-item {
    width: 275px;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    border: #dfdfdf 1px solid;
  }

  .onSell-off-prise {
    background: #c9302c;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 4px 18px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .onSell-item-cover {
    margin-bottom: 10px;
    position: relative;
  }
</style>
