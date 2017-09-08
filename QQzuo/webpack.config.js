const webpack = require("webpack");
const data = [
    {
        "name":"石睿",
        "message":"阿是高考放假告诉大家咖啡开始",
        "time":"12:08",
        "img":"./img/1.jpg"
    },
    {
        "name":"石睿1",
        "message":"锁哥的恢复",
        "time":"12:08",
        "img":"./img/3.jpg"        
    },
    {
        "name":"石睿2",
        "message":"发收到货了尽快发货上档键案来看",
        "time":"12:08",
        "img":"./img/4.jpg"        
    },
    
];
module.exports = {
    entry:__dirname + "/main.js",
    output:{
        path:__dirname+"/finished",
        filename:"data.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                options:{
                    "presets":[
                        "es2015"
                    ]
                }
            }
        ]
    },
    devServer:{
        port:8899,
        host:"127.0.0.1",
        hot:true,
        setup(app){
            app.get("/me",function(req,res){
                res.setHeader("Access-Control-Allow-Origin","*");
                res.setHeader("content-type","application/json;charset=utf-8");
                res.end(JSON.stringify(data));
            })
        }
    }/* ,
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:"./index.html"
        })
    ] */
}