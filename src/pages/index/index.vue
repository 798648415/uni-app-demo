<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <button hover-class="button-hover" @click="startUser()">登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello World",
    };
  },
  onLoad() {},

  methods: {
    /**
     * 跳转“我的”页面
     */
    startUser() {
      uni.redirectTo({ url: "/pages/user/user" });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
