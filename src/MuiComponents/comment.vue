<template>
  <div class="">
    <h4>评论专区</h4>
    <textarea placeholder="请写入评论,只能120个字" maxlength="120" v-model="texts"></textarea>
    <input type="button" value="提交评论" @click="postmsg">
    <hr>
    <div v-for="(item, i) in commentlist" :key="item.id">
    <p>第{{ i+1 }} 楼---发布时间{{ item.add_time }}</p>
    <p>{{ item.content }}</p>
    </div>
    <input type="button" value="加载更多" @click="wantmore">

  </div>
</template>

<script>
export default {
  data: ()=>({
    pageindex: 1,
    commentlist: [],
    texts: ""
  }),
  created() {
    this.getcomment()
  },
  methods: {
    getcomment() {
      this.$http.get("http://localhost:5000/api/getcomments/"+this.id+"?pageindex="+this.pageindex+"").then(result=>{
        // console.log(result)
        if(result.body.message.length == 0){
          return console.log("别点了")
        }
        if(result.body.status === 0){
          this.commentlist = this.commentlist.concat( result.body.message)
        }else {
          console.log("数据失败喽")
        }
      })
    },
    wantmore(){
      this.pageindex++
      this.getcomment()
    },
    postmsg(){
        this.$http.post("http://localhost:5000/api/postcomment/"+this.$route.params.id,{content:this.texts.trim()}).then(result=>{
          // console.log(result)
          if(result.body.status === 0 ){
            var comt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.texts.trim()
            }
            this.commentlist.unshift(comt)
            this.texts = ""
          }
        })
      
    }
  },
  props:["id"]
}
</script>

<style lang="" scoped>
  
</style>