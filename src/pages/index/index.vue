<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <button hover-class="button-hover" @click="startUser()">登录</button>
      <!-- v-bind -->
      <view v-bind:style="style">{{ msg }}</view>
      <view :style="style">{{ msg }}省略用法</view>
      <!-- v-text -->
      <view v-text="text"></view>
      <view v-text="text">==============</view>
      <!-- v-html -->
      <view>{{ html }}</view>
      <view v-html="html"></view>
      <!-- v-for -->
      <view v-for="(item, index) in list" :key="index">
        <view>{{ item.id }} -- {{ item.text }} -- {{ index }}</view>
      </view>
      <!-- v-if和v-show -->
      <view v-if="isShow">v-if</view>
      <view v-show="isShow">v-show</view>
      <!-- 计算属性computed -->
      <view>{{ cnMoney }}</view>
      <view v-for="item in filterList" :key="item.id">
        <view>{{ item.id }} -- {{ item.text }}</view>
      </view>
      <!-- 事件 -->
      <view @click="handleClick($event)" data-index="11">===点击我===</view>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      title: "Hello World",
      msg: "测试v-bind指令",
      style: "color:red;",
      text: "测试v-text",
      html: "<view>测试v-html</view>",
      list: [
        {
          id: 10,
          text: "苹果",
        },
        {
          id: 11,
          text: "香蕉",
        },
        {
          id: 12,
          text: "梨子",
        },
      ],
      isShow: false,
      money: 10000,
    };
  },

  computed: {
    cnMoney() {
      return "￥" + this.money;
    },
    filterList() {
      return this.list.filter((v) => v.id <= 10);
    },
  },

  onLoad() {
    console.log("Vue.prototype.baseUrl", this.baseUrl);
    console.log("globalData测试", getApp().globalData.text);
  },

  methods: {
    /**
     * 跳转“我的”页面
     */
    startUser() {
      console.log('页面跳转');
      uni.navigateTo({ url: "/pages/user/user" });
    },

    handleClick(event) {
      console.log('handleClick', event);
      console.log('index', event.currentTarget.dataset.index);
      console.log('index', event.target.dataset.index);
      uni.navigateTo({ url: "/pages/test/test" });
    }
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