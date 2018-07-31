import Vue from 'vue'
// 1. 引入路由包  
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//@ ../src   


// 2. 注册路由
Vue.use(Router)

// 3. 把定义好的组件引入   

//引入监听路由组件
import Search from '../MuiComponents/tabbles/Search'
import Cart from '../MuiComponents/tabbles/Cart'
import Home from '../MuiComponents/tabbles/Home'
import Email from '../MuiComponents/tabbles/Email'
import Newslist from "../MuiComponents/Newslist"
import newspage from "../MuiComponents/News"
import sharepic from "../MuiComponents/sharepic"

// 4. 实例化路由并配置路由规则  
export default new Router({
  routes: [
    { path: '/',redirect: "/Home"},
    { path: '/Search',component:Search},
    { path: '/Cart',component:Cart},
    { path: '/Home',component:Home},
    { path: '/Email',component:Email},
    { path: '/Home/Newslist',component:Newslist},
    { path: '/Home/Newslist/News/:id',component:newspage},
    { path: '/Home/sharepic',component:sharepic}
  ],
  linkActiveClass: ' mui-active'
})
