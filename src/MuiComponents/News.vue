<template>
  <div class="">
      <h3>{{ newifo.title }}</h3>
      <hr>
        <span>时间{{ newifo.add_time }}</span>
        <span>点击数{{ newifo.click }}</span>
        <hr>
      <p>{{ newifo.content }}</p>

      <hr>
      <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//引入评论模块
import comments from "./comment"

export default {
  data(){
    return{
    id: this.$route.params.id,
    newifo: {}
    }
  },
  created() {
    this.getnewspage()
  },
  methods:{
    getnewspage(){
      this.$http.get('http://localhost:5000/api/getnew/'+ this.id).then(result=>{
        // console.log(result.body.message)
        if(result.body.status === 0) {
          this.newifo = result.body.message
          // console.log(this.new.title)
        }else {
          console.log("数据错误")
        }
      })
    }
  },
  components: {
    "comment-box" : comments
  }
}
</script>

<style lang="" scoped>
  
</style>