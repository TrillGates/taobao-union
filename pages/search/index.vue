<template>
  <div>
    <div class="item" v-for="(item,index) in searchResult"
         :key="index">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  import api from '../../utils/api';

  export default {
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


</style>
