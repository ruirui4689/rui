var vm = new Vue({
    el:"#app",
    data:{
        data:""
    },
    methods:{

    },
    created:function(){
        var _me = this;
        $.ajax({
            method:"get",
            url:"http://127.0.0.1:8899/me",
            success:function(data){
                console.log(data)
                _me.data = data;
            }
        })
    }
})