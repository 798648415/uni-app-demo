// 自定义组件
<template>
  <image class="circle-img" :src="src" @click="handleClick()"></image>
</template>

<script>
export default {
  props: {
    src: String
  },
  data: () => ({}),
  computed: {},
  methods: {
    handleClick() {
      this.$emit("imgClick", this.src);
    }
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
};
</script>

<style>
.circle-img {
  border-radius: 50%;
}
</style>
