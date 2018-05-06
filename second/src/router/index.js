import Vue from 'vue'
import Router from 'vue-router'


// 引入tabbar部分
import Home from "@/components/tabbar/home"
import Member from "@/components/tabbar/member"
import Cart from "@/components/tabbar/cart"
import Search from "@/components/tabbar/search"

// // 引入商品部分
import GoodsList from "@/components/goods/list"
import GoodsDetail from "@/components/goods/detail"
import GoodsDesc from "@/components/goods/desc"
import GoodsComment from "@/components/goods/comment"

// 引入新闻部分

import NewsList from "@/components/news/list"
import NewsDetail from "@/components/news/detail"


// 引入图片部分

import PicList  from "@/components/pictures/list"
import PicDetail from "@/components/pictures/detail"
Vue.use(Router)

export default new Router({

  routes:[
    {
      path: "/",
      redirect: "/home"
    },
    // tabbar中的路由
      {
        path: "/home",
        component: Home
      },
      {
        path: "/member",
        component: Member
      },
      {
        path: "/cart",
        component: Cart
      },
      {
        path: "/search",
        component: Search
      },

    // 商品中的路由

      {
        path: "/goods",
        component: GoodsList

      },
      {
        path: "/goods/detail/:id",
        component: GoodsDetail

      },
      {
        path: "/goods/desc/:id",
        component: GoodsDesc

      },
      {
        path: "/goods/comment/:id",
        component:GoodsComment
      },

    // 新闻相关的路由
      {
          path: "/news",
          component: NewsList
      },
      {
        path: "/news/detail/:id",
        component: NewsDetail

      },
    // 图片
      {
        path: "/pics/:id",
        component: PicList

      },
      {
        path: "/pics/detail/:id",
        component: PicDetail

      }
  ],
  linkActiveClass:"mui-active"
})
