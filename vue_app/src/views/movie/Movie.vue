<template>
  <div class="movie">
    <ul>
      <!--<li v-for="movie in movieList">-->
        <!--<div class="movie-img">-->
          <!--<img :src="'https://images.weserv.nl/?url='+movie.images.small" alt="">-->
        <!--</div>-->
        <!--<div class="movie-desc">-->
          <!--<h4>{{movie.title}}</h4>-->
          <!--<p>观众评分： <span class="cast">{{movie.rating.average}}</span></p>-->
          <!--主演：<span v-for="cast in movie.casts">{{cast.name}} </span>-->
        <!--</div>-->
      <!--</li>-->
<!--Day3: 将li封装组件 -->
      <MovieList v-for="movie in MovieList" :movie="movie"></MovieList>
    </ul>
    <div class="loading" v-show="isShow">
      <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div v-show="isEnd">
      到底了...
    </div>
  </div>
</template>
<script>
//Day2: 电影页面start
  import Axios from 'axios';
  import MovieList from '@/views/movie/MovieList.vue';
  export default{
//Day2: 解决刷新问题：
//     created(){
//       this.$store.dispatch('changeBg',{
//         bgColor:'pink',
//         title:'movie'
//       })
//     }
//Day2：电影列表
    data(){
      return{
        MovieList:[],
        isShow:false,
        isEnd:false,
      }
    },
    created(){
      // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start="+this.MovieList.length+"&&count=5")//返回的是一个promise对象，jqurey返回的是json对象
      //   .then((res) =>{
      //     // console.log(res.data.subjects);
      //     this.MovieList = res.data.subjects;
      //   })
      // .catch();
      // Axios.get("/movie.json")
      //   .then((res) =>{
      //     console.log(res.data.subjects);
      //     this.MovieList = res.data.subjects;
      //   });
      this.getMovie();
 //  Day3:触底刷新
      window.onscroll =  ()=>{
        var scrollTop = document.documentElement.scrollTop;//滚动条距顶高度
        var scrollHeight = document.documentElement.scrollHeight;//滚动条长度
        var clientHeight = document.documentElement.clientHeight;//屏幕高度
        // console.log(scrollTop,scrollHeight,clientHeight);

        // if(scrollTop + clientHeight == scrollHeight ){
//如果 scrollTop 到底的时候取到的是小数
        if(Math.abs(document.documentElement.scrollTop +document.documentElement.clientHeight - document.documentElement.scrollHeight) < 1 && !this.isEnd){

          // console.log(scrollTop,scrollHeight,clientHeight);
          // this.isShow = true;
          // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start="+this.MovieList.length+"&&count=5")//返回的是一个promise对象，jqurey返回的是json对象
          //   .then((res) =>{
          //     // console.log(res.data.subjects);
          //     this.MovieList = [...this.MovieList,...res.data.subjects];
          //     this.isShow = false;
          //     console.log(this.MovieList);
          //   });
          this.getMovie();
        }
      }
    },
    components:{
      MovieList,
    },
    methods:{
      getMovie(){
        this.isShow = true;
        Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start="+this.MovieList.length+"&&count=5")//返回的是一个promise对象，jqurey返回的是json对象
        .then((res) =>{
            // console.log(res.data.subjects);
            this.MovieList = [...this.MovieList,...res.data.subjects];
            this.isShow = false;
            console.log(this.MovieList);
            if(res.data.subjects.length < 5){
              this.isEnd = true;
              //   并且ajax不再请求
            }
          });
        // Axios.get("/movie.json")
        //   .then((res) =>{
        //     var arr  = res.data.subjects.slice(this.MovieList.length,this.MovieList.length+5)
        //     this.MovieList = [...this.MovieList,...arr];
        //     this.isShow = false;
        //     console.log(this.MovieList);
        //     if(arr.length < 5){
        //       this.isEnd = true;
        //     }
        //   });
      }
    }
  }
</script>
<style>
  .loading{
    text-align: center;
  }


</style>
