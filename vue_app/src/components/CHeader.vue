<template>
  <div>
    <header :style="{background:bgColor}">
      <span class="goHome">首页</span>
      <span>{{title}}</span>
    </header>
  </div>

</template>
<script>
  import{mapState} from 'vuex';
  export default{

    props:[
      // 'bgColor'// 3-5 原生修改颜色
    ],
    computed:{
      ...mapState([
        'bgColor' ,// 3-5 vuex修改颜色
        'title'
      ])
    },
  }
</script>
<style scoped>
    header{
      height: 1rem;
      /*background: pink;*/
      text-align:center;
      position:fixed;
      top:0;
      left:0;
      width:100%;
      line-height: 1rem;
      color:black;
    }
  .goHome{
    position:absolute;
    left:0.1rem;
    top:50%;
    transform:translateY(-50%);
  }
</style>
