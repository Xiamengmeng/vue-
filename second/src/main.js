// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 在main.js中引入mint-ui的内容
import MintUI from "mint-ui"

import "mint-ui/lib/style.css"

Vue.use(MintUI)

// 引入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 引入vuex的仓库
import store from "./store"

// 引入mui 的样式

import "./assets/mui/css/mui.css"

import "./assets/mui/css/icons-extra.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  store
})
