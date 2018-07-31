<template>
  <div class="">
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link  :to="'/Home/Newslist/News/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{ item.title }}
							<p class='mui-ellipsis'>{{ item.zhaiyao }}</p>
						</div>
					</router-link>>
				</li>
			</ul>

  </div>
</template>

<script>
export default {
  data: ()=>({
    newslist : []
  }),
  created() {
    console.log(1)
    this.getlist()
  },
  methods: {
    getlist(){
      this.$http.get('http://localhost:5000/api/getnewslist').then(result=>{
        console.log(result)
        if(result.body.status === 0) {
          this.newslist = result.body.message
        }
      }) 
    }
  }
}
</script>

<style lang="" scoped>
  
</style>