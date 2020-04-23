<template>
  <div>
    这是特惠界面
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('setCurrentActive', 'onSell');
    }
  }
</script>
<style>

</style>
