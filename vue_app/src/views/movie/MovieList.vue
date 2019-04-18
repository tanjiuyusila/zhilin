<template>
  <li>
    <div class="movie-img">
      <img :src="'https://images.weserv.nl/?url='+movie.images.small" alt="">
    </div>
    <div class="movie-desc">
      <h4>{{movie.title}}</h4>
      <p>观众评分： <span class="cast">{{movie.rating.average}}</span></p>
      主演：<span v-for="cast in movie.casts">{{cast.name}} </span>
    </div>
  </li>
</template>
<script>
  export default{
    props:['movie']
  }
</script>
<style>
  .movie li{
    display:flex;
    padding: 0.2rem;
  }
  .movie li .movie-img {
    flex-grow:1;
    /*padding: 0.2rem;*/
    width: 0;
  }
  .movie li .movie-desc {
    flex-grow:3;
    width: 0;
    margin-left: 0.4rem;
  }
  .movie li .movie-desc .cast{
    color:red;
  }
</style>
