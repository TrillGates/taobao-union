<template>
  <div>
    <!--顶部-->
    <div id="header">
      <div class="center-box clear-fix">
        <div class="header-logo float-left">
          <span>阳光沙滩-券场</span>
        </div>
        <div class="header-menu float-left">
          <ul>
            <li class="menu-active">券场</li>
            <li>发现</li>
            <li>特惠</li>
          </ul>
        </div>
        <div class="header-search-box float-left">
          <el-input v-model="input" placeholder="复制（淘宝的标题或者关键字）找优惠券!" size="small"></el-input>
        </div>
        <div class="header-search-btn float-left">
          <el-button type="danger" size="small">搜索</el-button>
        </div>
      </div>
    </div>
    <nuxt/>
    <!--底部-->
    <div>底部</div>
  </div>
</template>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .menu-active {
    background: #0000000a;
  }

  .header-search-btn {
    margin-left: 20px;
  }

  .header-search-box {
    margin-left: 20px;
  }

  .header-search-box .el-input {
    width: 300px;
  }

  .header-search-btn .el-button--danger {
    width: 100px;
  }

  .header-search-box, .header-search-btn {
    line-height: 70px;
  }

  #header {
    box-shadow: 0px 5px 10px #d4d4d4;
    background: #fff;
    height: 70px;
  }

  .float-left {
    float: left;
  }

  .clear-fix {
    zoom: 1;
    overflow: auto;
  }


  .header-menu li:hover {
    background: #0000000a;
  }

  .header-menu li {
    cursor: pointer;
    float: left;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 70px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .header-menu ul {
    list-style: none;
  }

  .header-logo {
    font-size: 24px;
    line-height: 70px;
    font-weight: 600;
    color: #c9302c;
  }

  .center-box {
    width: 1140px;
    margin: 0 auto;
  }
</style>

