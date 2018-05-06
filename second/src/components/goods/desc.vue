<template>
  <div class="page">
      <detail :article="goodsInfo"></detail>
  </div>
</template>
<script>
import detail from "../common/detail"

import axios from "axios"

export default {
  data(){
    return {
      goodsInfo:{}

    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/goods/getdesc/"+this.$route.params.id
    }).then(res=>{
      if(res.data.status==0){
        // console.log(res.data.message)
        this.goodsInfo=res.data.message[0]
      }
    })
  },

  components:{
    detail
  }
};
</script>

<style>

</style>
