<template>
  <div class="movie">
    <ul>
  <!--方法2：点击事件跳转-->
      <li v-for="obj in movieList" @click="detail(obj.id)">
  <!--方法1：标签跳转-->
        <!--<router-link :to="'/movieDetail/'+obj.id">-->
          {{obj.name}}{{obj.avg}}
        <!--</router-link>-->

      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){//在这里写成函数形式，不写对象形式
        return {
          movieList:[
            {
              id:1,
              name:'西红柿',
              avg:8.7
            },
            {
              id:2,
              name:'西红柿1',
              avg:8.5
            },
            {
              id:3,
              name:'西红柿2',
              avg:8.9
            }
          ]
        }
    },
    methods:{
      detail(id){
      //  编程式导航
        this.$router.push('/movieDetail/'+id);
      }
    }
  }
</script>
<style>

</style>
