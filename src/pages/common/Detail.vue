<template>
  <div>
    <div flex="box:first">
      <div>
        <div class="w-400 h-400 m-r-50 b-o">
          <bs-picture :url="require('../../assets/logo.png')" :highUrl="require('../../assets/logo.png')" width="100%" height="100%" :outShow="true"></bs-picture>
        </div>
      </div>
      <div>
        <h3 class="m-v-30">良品铺子高端零食酥脆薄饼 饼干办公室零食小吃300g*1</h3>
        <div class="content f-14 p-v-10 p-l-20 w-500">
          <div>价 格<span class="price m-l-10 f-24">￥20.90</span></div>
          <div>库 存<span class="m-l-10">有货</span></div>
          <div>重 量<span class="m-l-10">0.4kg</span></div>
        </div>
        <div class="p-v-30">
          <el-input-number v-model="count" :min="1" :max="10"></el-input-number>
          <el-button type="danger" @click="addCar">加入购物车</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  methods: {
    addCar () {
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  color: #999;
  background: url('../../assets/images/price-bg.png');
  .price {
    color: #E4393C;
  }
}
</style>
