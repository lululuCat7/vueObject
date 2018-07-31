<template>
  <div class="">
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotu" :key="item.url">
      <!-- src会把其中的内容当做字符串,所以要加上b-bind为其绑定数据 -->
      <img :src="item.img" alt="">
    </mt-swipe-item>

  </mt-swipe>
  <icon9></icon9>
  </div>
</template>

<script>
//引入组件
import icon9 from "../icon9"

export default {
  data(){
    return {
      lunbotu: []
    }
  },
  components: {
    "icon9" : icon9
  },
  created() {
    this.getlunbotu()
  },
  methods: {
    //获取轮播图数据的方法
    getlunbotu() {
      this.$http.get('http://localhost:5000/api/getlunbo').then(result => {
        // console.log(result.body)
        if(result.body.status === 0){
          this.lunbotu = result.body.message;
          // Toast('加载成功')
        }else {
          // Toast('加载失败')
          console.log('shibai')
        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
    .mint-swipe {
      height: 200px;
      // mt-swipe-item {
      //   &:nth-child(1) {
      //   background-color: red;
      //   }
      //   &:nth-child(2) {
      //     background-color: blue;
      //   }
      //   &:nth-child(3) {
      //     background-color: salmon;
      //   }
      // }
      .mint-swipe-item {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
</style>