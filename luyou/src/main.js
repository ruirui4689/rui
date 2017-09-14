import Vue from "vue";
import Router from "vue-router";
import Index from "./components/index.vue";
import Listen from "./components/pages/listen.vue";
import Finds from "./components/pages/finds.vue";
import Login from "./components/pages/login.vue";
import Hotdoor from "./components/pages/hotdoor.vue";
import Fenlei from "./components/pages/fenlei.vue";
import Jingpin from "./components/pages/jingpin.vue";
import Zhibo from "./components/pages/zhibo.vue";
import Guangbo from "./components/pages/guangbo.vue";
let router = new Router({
    linkActiveClass: "active",
    routes: [{
        name: "index",
        path: "/",
        component: Index,
        children: [{
            name: "hotdoor",
            path: "hotdoor",
            component: Hotdoor
        }, {
            name: "fenlei",
            path: "fenlei",
            component: Fenlei
        }, {
            name: "jingpin",
            path: "jingpin",
            component: Jingpin
        }, {
            name: "zhibo",
            path: "zhibo",
            component: Zhibo
        }, {
            name: "guangbo",
            path: "guangbo",
            component: Guangbo
        }],
    }, {
        name: "listen",
        path: "/listen",
        component: Listen
    }, {
        name: "finds",
        path: "/finds",
        component: Finds
    }, {
        name: "login",
        path: "/login",
        component: Login
    }]
})
Vue.use(Router);
new Vue({
    el: "#app",
    router,
})