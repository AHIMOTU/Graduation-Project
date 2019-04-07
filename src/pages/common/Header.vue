<template>
  <div>
    <div class="bar h-80 p-lv-100" flex="cross:center main:justify">
      <div><bs-icon name="shopcard"></bs-icon></div>
      <div flex="">
        <el-autocomplete class="m-lv-60 w-400">
          <i class="el-icon-search el-input__icon" slot="suffix"></i>
        </el-autocomplete>
        <div class="car-user" :class="{fixed: isFixed}" flex="cross:center">
          <bs-icon name="head" class="m-lv-20"></bs-icon>
          <el-badge :value="12" class="item">
            <bs-icon name="shopcard" class="m-lv-20"></bs-icon>
          </el-badge>
        </div>
      </div>
    </div>
    <div class="h-60 nav w-p-100" :class="{fixed: isFixed}" flex="cross:center">
        <ul flex="">
          <li class="m-lv-20">食品饮料</li>
          <li class="m-lv-20">粮油副食</li>
          <li class="m-lv-20">个人护理</li>
          <li class="m-lv-20">护肤美妆</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed: false
    }
  },
  methods: {
    navFixed () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop >= 100
    }
  },
  mounted () {
    window.addEventListener('scroll', this.navFixed)
  }
}
</script>

<style lang="scss" scoped>
  .bar {
    background: #000;
  }
  .nav {
    background: #f7f7f7;
    z-index: 20;
    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 21;
      background-image: linear-gradient(#fff, #f1f1f1);
      border-bottom: 1px solid #dadada;
    }
  }
  .car-user {
    &.fixed {
      position: fixed;
      top: 0;
      right: 100px;
      z-index: 22;
      transform: translate3d(0, 19px, 0);
      transition: transform .3s cubic-bezier(.165, .84, .44, 1);
    }
  }
</style>
