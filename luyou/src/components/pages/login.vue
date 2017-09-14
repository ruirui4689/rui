<template>
    <div>
        <header>{{content}}</header>
    </div>
</template>
<script>
export default {
    name:"listen",
    data(){
        return{
            content:"未登录"
        }
    }
}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
    header{
        width:100%;
        height: 0.8rem;
        background: blue;
    }
</style>
