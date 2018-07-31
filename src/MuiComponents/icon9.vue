<template>
  <div class="">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Home/Newslist">
		                    <img src="../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Home/sharepic">
		                    <img src="../images/menu2.png" alt="">
		                    <div class="mui-media-body">图文分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		            
		        </ul> 
  </div>
</template>

<script>

export default {
  data: ()=>({
    
  })
}
</script>

<style lang="less" scoped>
  .mui-table-view-cell {
    img {
      width: 66px;
      height: 66px;
    }
    
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 14px;
  }
</style>