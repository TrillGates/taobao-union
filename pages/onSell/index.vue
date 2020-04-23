<template>
  <div>
    <div v-for="(item,index) in contentList" :key="index">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  import api from '../../utils/api';

  export default {
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

</style>
