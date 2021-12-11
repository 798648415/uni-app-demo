import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 通过Vue.prototype定义全部变量
Vue.prototype.baseUrl = "www.baidul.com"

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
