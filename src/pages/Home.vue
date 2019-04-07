<template>
  <div>
    <div flex="box:first">
      <div class="menu p-r">
        <div class="menu-item w-200" v-for="i in 8" :key="i">
          <div class="menu-item-head" flex="main:justify cross:center">
            <span>食品饮料</span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div class="menu-item-body p-a">
            <div class="w-300">吃了吗</div>
          </div>
        </div>
      </div>
      <div>
        <el-carousel height="450px">
          <el-carousel-item v-for="(img, index) in srcLists" :key="index">
            <img width="900" height="450" :src="img.url" alt="">
          </el-carousel-item>
        </el-carousel>
        </div>
    </div>
    <div class="a-c f-24 p-v-20"><h3>今日特惠</h3></div>
    <div class="list1">
      <div class="w-p-14" v-for="item in 7" :key="item"><bs-product></bs-product></div>
    </div>
    <div class="a-c f-24 p-v-20"><h3>热卖商品</h3></div>
    <div class="list1">
      <div class="w-p-14" v-for="item in 7" :key="item"><bs-product></bs-product></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      srcLists: [
        { url: require('../assets/images/carousel1.jpg') },
        { url: require('../assets/images/carousel2.jpg') },
        { url: require('../assets/images/carousel3.jpg') }
      ]
    }
  }
}
</script>

<style lang="scss">
.menu {
  .menu-item {
    &:hover {
      .menu-item-head {
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        border-left: 1px solid #999;
        border-right: 1px solid #fff;
      }
      .menu-item-body {
        display: block;
      }
      .el-icon-arrow-right {
        display: none;
      }
    }
    .menu-item-head {
      height: 50px;
    }
    .menu-item-body {
      width: 800px;
      height: 400px;
      border-left: 1px solid #999;
      box-shadow: 4px 0px 10px #999;
      background: #fff;
      opacity: 0.8;
      z-index: 999;
      display: none;
      top: 0;
      left: 200px;
    }
  }
}
.el-carousel {
  width: 900px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.list1 {
  display: flex;
  flex-wrap: wrap;
}
</style>
