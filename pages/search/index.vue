<template>
  <div>
    搜索页面
  </div>
</template>

<script>
  export default {
    asyncData(context) {
      console.log(context.route.query);
      let keyword = context.route.query.keyword;
      console.log(keyword);
    }
  }
</script>
<style>


</style>
