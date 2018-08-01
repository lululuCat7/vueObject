<template>
  <div class="">
   <van-tabs @click="getpage">
    <van-tab v-for="item in tabmsg" :title="item.title" :key="item.id" >
      
    </van-tab>
    
 
  </van-tabs>
    <lazy-component>
      <router-link v-for="item in picmsg" :key="item.id" tag="div" :to="'/Home/sharepic/picinfo/'+item.id">
        <img v-lazy="item.img_url" >
        <h4>{{ item.title }}</h4>
        <p>{{ item.zhaiyao }}</p>
      </router-link>
    </lazy-component>
  </div>
</template>

<script>
export default {
  data: () => ({
    tabmsg: [],
    picmsg: []
  }),
  created() {
    this.gettabmsg(),
      this.getpage(0)
  },
  methods: {
    gettabmsg() {
      this.$http
        .get("http://localhost:5000/api/getimgcategory")
        .then(result => {
          // console.log(result.body.message);
          if (result.body.status === 0) {
            this.tabmsg = result.body.message;
            this.tabmsg.unshift({ id: 0, title: "全部" });
          } else {
            console.log("错了,立马改!!!");
          }
        });
    },
    getpage(id) {
      // console.log(id);
      this.$http.get("http://localhost:5000/api/getimages/"+ id).then(result=>{
        // console.log(result)
        if(result.body.status === 0){
          this.picmsg = result.body.message
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.van-tabs--line {
  padding-top: 0;
}
img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>