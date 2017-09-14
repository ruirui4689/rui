<template>
  <div class="top_box">
     <ul class="top">
         <li><router-link :to="{name:'hotdoor'}">热门</router-link></li> 
         <li><router-link :to="{name:'fenlei'}">分类</router-link></li> 
         <li><router-link :to="{name:'jingpin'}">精品</router-link></li> 
         <li><router-link :to="{name:'zhibo'}">直播</router-link></li> 
         <li><router-link :to="{name:'guangbo'}">广播</router-link></li> 
    </ul> 

    <router-view></router-view>      
 
                                       
  </div>
</template>
<script>
// import Tab from "./tab.vue";
  export default {
      name:"index",
      data(){
            return {
                name:"zhangsan"
            }
      },
      components:{
         
      }
  }
  </script>
  <style scoped>
  *{
      margin:0;
      padding:0;
      list-style: none;
  }
    .top_box{
        font-size: 15px;
    }
    .top{
        widows: 100%;
        height: .8rem;
        background:#ccc; 
        display:flex;
    }
    .top li{
        width: 20%;
        height: .8rem;
        text-align: center;
        line-height: 1rem;
    }
  </style>
  
            