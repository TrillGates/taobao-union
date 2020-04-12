<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        我是标题
      </h1>
      <h2 class="subtitle">
        我是子标题
      </h2>
      <div>
        <button>按钮</button>
        <el-button type="primary">测试ElementUI</el-button>
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import api from '../utils/api';

  export default {
    components: {
      AppLogo
    },
    asyncData() {
      console.log("test load data....");
      // api.getCategories().then(result => {
      //   console.log(result.code);
      //   console.log(result.message);
      //   console.log(result.data);
      // });
      api.getCategoryContent('9660', 1).then(result => {
        console.log(result.data);
      });
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

