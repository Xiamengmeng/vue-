<template>
  <div class="page">
      <!-- <h1>pictureList</h1> -->
      <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <router-link to="/pics/0" class="mui-control-item-cms mui-active">
                    全部
                </router-link>
                <router-link :to="'/pics/'+v.id" v-for="(v,i) in categoryList" :key='i' class="mui-control-item-cms">
                    {{v.title}}
                </router-link>
            </div>
        </div>

        <ul>
        <li v-for="(v, i) in picList" :key="i" @click="$router.push('/pics/detail/' + v.id)">
            <img v-lazy="v.img_url" alt="">

            <div class="info">
                <h4>{{v.title}}</h4>
                {{v.zhaiyao}}
            </div>
        </li>
    </ul>
  </div>
</template>
<script>
import mui from "../../assets/mui/js/mui"
import axios from "axios";

export default {
  data() {
    return {
      categoryList: [],
      picList: []
    };
  },
  created() {
    this.getPicList();

    axios({
      url: "http://www.escook.cn:3000/api/getimgcategory"
    }).then(res => {
      if (res.data.status == 0) {
        this.categoryList = res.data.message;
        // console.log(res.data.message);
      }
    });
  },
  watch:{
    "$route":function(nv,ov){
        this.getPicList();


    }
  },
  methods: {
    getPicList() {
        console.log(this.$route.params.id)
      axios({
        url: "http://www.escook.cn:3000/api/getimages/"+this.$route.params.id 
      }).then(res => {
        if (res.data.status == 0) {
            this.picList = res.data.message;
            console.log(this.picList);
        }
      });
    }
  },

// 用来解决scroll页面刷新时才能滑动问题
mounted(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration:0.0005
    });
}
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 10px;
}

ul li {
  margin: 10px 0;
  box-shadow: 0 0 15px #999;
  position: relative;
  background-color: #ccc;
}

ul li img {
  width: 100%;
  display: block;
}

ul li .info {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 84px;
}

ul li .info h4 {
  font-size: 13px;
}


.mui-segmented-control.mui-segmented-control-inverted .mui-control-item-cms {
    color: inherit;
    border: 0;
}

.mui-segmented-control.mui-scroll-wrapper .mui-control-item-cms {
    display: inline-block;
    width: auto;
    padding: 0 20px;
    border: 0;
}

.mui-segmented-control .mui-control-item-cms {
    line-height: 38px;
    display: table-cell;
    overflow: hidden;
    width: 1%;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #007aff;
    border-color: #007aff;
    border-left: 1px solid #007aff;
}

.mui-segmented-control.mui-segmented-control-inverted .mui-control-item-cms.mui-active {
    color: #007aff;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
