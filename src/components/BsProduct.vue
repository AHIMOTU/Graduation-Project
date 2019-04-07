<template>
  <div id="bs-product" class="w-180 h-260 p-5 p-r o-h">
    <div @click="onDetail" class="h-200 w-180 c-p"><img width="100%" height="100%" src="../assets/logo.png" alt=""></div>
    <p class="sub-detail f-12">旺旺 哎呦休闲零食大礼包 儿童节日礼物 298g</p>
    <div class="price">￥9.90</div>
    <div class="add-car c-p p-a a-c w-p-100 h-30">加入购物车</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onDetail () {
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="scss" scoped>
#bs-product {
  transition: all .5s;
  &:hover {
    box-shadow: 1px 1px 20px #999;
    .add-car {
      transition: bottom .25s ease;
      bottom: 0;
    }
    .sub-detail {
      display: none;
    }
  }
  .price {
    color: #ff002f;
  }
  .add-car {
    color: #fff;
    background: orange;
    line-height: 30px;
    bottom: -30px;
    left: 0;
  }
}
</style>
