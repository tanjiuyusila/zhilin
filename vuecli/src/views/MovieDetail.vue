<template>
  <div class="movie">
    <h1>电影详情页</h1>
    {{$route.params.movieId}}
    {{msg}}
  </div>
</template>
<script>
  export default {
    data(){//在这里写成函数形式，不写对象形式
        return {
            msg:this.$route.params.movieId
        }
    }
  }
</script>
<style>

</style>
