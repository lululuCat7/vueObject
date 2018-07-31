import Vue from 'vue'
import App from './App'
// 5.0 引入路由模块
import router from './router'

// 全局引入的mint-ui   
import MintUI from 'mint-ui'
// 注册mint-ui
Vue.use(MintUI)
// 引入mint-ui的样式   如果文件在node-model中 在引入的url中可以省略node-model
import 'mint-ui/lib/style.css'

//引入mui的样式
import './lib/mui/css/mui.min.css'

//引入font文件 实现底部图标
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui.ttf'
import './lib/mui/fonts/mui-icons-extra.ttf'
Vue.config.productionTip = false

//引入resource 
import vueresouce from 'vue-resource'
Vue.use(vueresouce)


new Vue({
  el: '#app',
  // 6.0 注册路由
  router,
  // 这连句话类似于  render: c => c(App)
  // components: { App },
  // template: '<App/>'

  render: c => c(App)
})
