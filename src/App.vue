<template>
  <div id="app">

    <mt-header fixed title="vue项目"></mt-header>
    <!-- <img src="./assets/logo.png"> -->
    <!-- 7.0 渲染路由 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 渲染组件 -->

  
    <!-- <v-header></v-header> -->
    <mt-tabble></mt-tabble>
  </div>
</template>

<script>


// 1. 引入定义好的组件   
import muitabble from './MuiComponents/MuiTabble'
// import header from './components/Header'
export default {
  name: 'App',
  // 2. 注册组件   
  components: {
    // 'mt-header': header
    'mt-tabble': muitabble
  }
}
</script>
  
<style  lang="less" scoped>
  body {
    background-color: #fff;
  }
  #app {
      padding-bottom: 50px;
      padding-top:  40px;
      overflow-x: hidden;
    }

   .v-enter {
    opacity: 0;
    transform: translateX(100%)
   }
   .v-leave-to{
     opacity: 0;
    position: absolute;
     transform: translateX(-100%);
   }
   .v-enter-active,
   .v-leave-active{
     transition: all 0.4s ease;
   }
</style>
