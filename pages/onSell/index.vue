<template>
  <div class="center-box">
    <div class="onSell-content-box clear-fix">
      <div class="onSell-content-item float-left" v-for="(item,index) in contentList" :key="index">
        <div class="onSell-item-cover">
          <el-image
            style="width: 263px; height: 263px"
            :src="item.pict_url+'_270x270xzq90.jpg_.webp'"
            fit="cover"></el-image>
          <div class="onSell-off-prise">
            {{item.coupon_amount}}
          </div>
        </div>
        <div class="onSell-item-prise">
          <span v-text="'￥'+item.zk_final_price"></span>
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
  .onSell-content-item {
    width: 263px;
    margin: 5px;
    padding: 5px;
    border: #dfdfdf 1px solid;
  }

  .onSell-off-prise {
    position: absolute;
    top: 0;
    right: 0;
  }

  .onSell-item-cover {
    position: relative;
  }
</style>
