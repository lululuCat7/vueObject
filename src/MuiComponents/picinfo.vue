<template>
  <div class="">
    <div>
      <h1>123</h1>
      发表时间<span>{{ infomsg.add_time }}</span>点击次数<span>{{ infomsg.click }}</span>
      <hr>
      <!-- 这是缩略图 -->

      <img :src="item" v-for="(item,index) in picurl" :key="index" @click="getbig(index)">

      <hr>
      <p>{{ infomsg.content }}</p>
    </div>

    <hr>
    <comment-box :id="this.infoid"> </comment-box> 

  </div>
</template>

<script>
//引入评论模块
import comment from "./comment"
import { ImagePreview } from 'vant';


export default {
  data(){
    return {
      infoid: this.$route.params.id,
      infomsg: [],
      picurl: []
    }
  },
  created(){ 
    this.getpic()
    this.getpicinfo()
  },
  methods:{
    getpicinfo() {
      this.$http.get("http://localhost:5000/api/getimageInfo/"+this.infoid).then(result=>{
        // console.log(result)
        this.infomsg = result.body.message
      })
    },
    getpic() {
      this.$http.get("http://localhost:5000/api/getthumimages/"+this.infoid).then(result=>{
        // console.log(result)
        result.body.message.forEach((item,index)=>{
          this.picurl[index] = item.src
        })
          console.log(this.picurl)
      })
    },
    getbig(id) {
      ImagePreview(this.picurl, id);
    }
  },
  components: {
    "comment-box": comment
  }
}
</script>

<style lang="less" scoped>
  img {
    display: inline-block;
    width: 60px;
    height: 60px;
  }
</style>