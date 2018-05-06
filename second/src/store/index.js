import Vue from "vue"

import Vuex from "vuex";
Vue.use(Vuex);


// 把购物车信息存储到localstorage中

function writeCartsToStorage(carts){
    localStorage.setItem("carts-info",JSON.stringify(carts));
}

// 从localstorage中读取购物车信息
function readCartsFromStorage(){
    var cartsStr=localStorage.getItem("carts-info");
    if(cartsStr == null || cartsStr.trim() == ""){
        return []
    }else{
        return JSON.parse(cartsStr);
    }
}

// 默认导出Vuex.Store

export default new Vuex.Store({
    state:{
        carts:readCartsFromStorage()
    },
    getters:{
        // 商品总数：通过遍历购物车中的数量求和
        totalCount:state=>{
            var result=0;
            state.carts.forEach(v=>{
                result+=v.count;
            })
            return result
        },
        getIds:state=>{
            // 购物车中可能会有许多种商品，将所有的商品id拼接成字符串在数组中存储

            return state.carts.map(v=>v.id).join(",");
        },
        // 根据id获取数量
        getCountById:state=>id=>{
            var temp=state.carts.find(v=>v.id==id);
            return temp.count;
        }
    },
    mutations:{
        addToCarts(state,cart){
            let temp=state.carts.find(v=>{
                return v.id==cart.id;
            })
            if(temp){
                temp.count+=cart.count;
            }else{
                state.carts.push(cart);
          
            }

            // 当数组中的购物信息更新之后，需要将其更新到localstorage
            writeCartsToStorage(state.carts);

        },

        updateCarts(state,cartsList){
            console.log(cartsList);
            cartsList.forEach(v=>{
                let cart =state.carts.find(e=>{
                    return e.id == v.id;
                })
                cart.count = v.count
            })

            // 更新到localstorage中
            writeCartsToStorage(state.carts)
        }
    }
})