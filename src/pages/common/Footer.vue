<template>
  <div class="footer b-t f-12 p-20">
    <div class="list">
      <ul class="m-10 w-p-10 a-c" v-for="item in 14" :key="item">
        <h3>推荐网址</h3>
        <li>网站链接</li>
        <li>网站链接</li>
        <li>网站链接</li>
        <li>网站链接</li>
      </ul>
    </div>
    <p class="p-10 a-r">本网站设计内容为毕业设计所用。All Rights Reserved www.draymond.cn</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: #fafafa;
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
