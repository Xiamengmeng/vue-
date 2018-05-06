<template>
  <div class="page">
      <!-- <h1>这是新闻列表页</h1> -->
      <ul class="mui-table-view mui-table-view-chevron">
				<li v-for="(v,i) in newsList" :key="i" class="mui-table-view-cell mui-media">
					<router-link  :to="'/news/detail/'+v.id" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src="v.img_url">
						<div class="mui-media-body mui-ellipsis">
							{{v.title}}
							<p class="mui-ellipsis" v-text="v.zhaiyao"></p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return {
      newsList:[]
    }
  },
   created(){
      axios({
         url:"http://www.escook.cn:3000/api/getnewslist"

    }).then(res => {
      // console.log(this.res.message)
      if(res.data.status == 0){
        this.newsList = res.data.message;
      }
    })
  }
  
}
</script>
<style>

</style>
