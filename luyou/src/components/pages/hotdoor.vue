<template>
 <div>
     <ol class="ols">
        <li v-for="item in datas">
                <p></p>
              <p>{{item.content}}</p> 
         </li>
     </ol>
        

      
 </div>
</template>
<script>
export default {
        name:"hotdoor",
        data(){
            return {
                datas:[
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"历史"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    },
                    {
                        "img":"",
                        "content":"音乐"
                    }
                ]
            }
        },
}
</script>
<style scoped>
    .ols{
        width:100%;
        display: flex;
        flex-wrap: wrap;

    }
    .ols{
        list-style: none;
    }
    .ols li{
        width:24.7%;
        height: 2rem;
        border-right: 1px solid #ccc;
        float: left;
        border-bottom: 1px solid #ccc;
    }
    .ols li:nth-child(4n){
        border-right: none;
    }
</style>


