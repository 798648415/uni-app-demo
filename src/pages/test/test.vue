<template>
  <view>
    <circle-img :src="path" @imgClick="onImgClick()"></circle-img>
    <view>点击上面图片获取路径：{{ src }}</view>
    <!-- 测试插槽slot -->
    <my-form>
      <input placeholder="请写点什么" />
      <radio />
      <checkbox />
    </my-form>
  </view>
</template>

<script>
import CircleImg from "@/components/circle-img";
import MyForm from "@/components/my-form";

export default {
  components: {
    CircleImg,
    MyForm,
  },
  data: () => ({
    path: "/static/logo.png",
    src: "",
  }),
  computed: {},
  methods: {
    onImgClick(e) {
      this.src = e;
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {
    // TODO todo测试
  },
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh() {
    uni.stopPullDownRefresh();
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
};
</script>

<style></style>
