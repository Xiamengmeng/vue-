<template>
  <div class="page pic-detail">
      <!-- <h1>这是图片详情页</h1> -->
      <detail :article="picInfo">
          <div slot="pics">
            <vue-preview :slides="thumbs"></vue-preview>
          </div>
      </detail>

      <comment :id="$route.params.id"></comment>
     
  </div>
</template>
<script>

// 引入 vue-preview插件
// vue-preview依赖于vue,如果在此页面需要将Vue单独引入。
// 所以可以将vue-preview放在main.js中

import axios from "axios"

import detail from "../common/detail"

import comment from "../common/comment"
export default {
  data(){
    return {
      picInfo:{},
      thumbs:[]
    }
  },
  created(){

    axios({
      url:"http://www.escook.cn:3000/api/getthumimages/" + this.$route.params.id
    }).then(res=>{
      if(res.data.status == 0){
        // 我们在做vue-preview插件时需要的对象必须要有6个属性
        // 但后台返回的数据不完善，所以需要我们自己手动添加

          res.data.message.forEach(v => {
            v.msrc = v.src;
            v.alt = "pic";
            v.title = "缩略图";
            v.w = 600;
            v.h = 400;
        })
        this.thumbs=res.data.message;console.log( this.thumbs)
      }
    });

// 获取轮播图部分
   axios({
    url:"http://www.escook.cn:3000/api/getimageInfo/" + this.$route.params.id
    }).then(res => {
      if(res.data.status==0){
        this.picInfo=res.data.message[0];
      }
  });
  },
  components:{
    detail,
    comment
  }
 
}
</script>
<style>
.pic-detail{
    padding-left: 5px;
    padding-right: 5px;
}

.my-gallery img{
  /* width: 20%; */
  width: 100%;
  margin: 1%;
  box-shadow: 0 0 3px 0px;
}

figure{
    display: inline-block;
    margin: 5px;
    width: 20%;
}
</style>

