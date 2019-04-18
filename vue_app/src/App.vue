<template>
  <div id="app">
<!--3-5 原生修改颜色-->
    <!--<c-header :bgColor="bgColor"></c-header>-->
    <!--<div id="content">-->
        <!--<router-view></router-view>-->
    <!--</div>-->
    <!--<c-footer :menu="menu" @changeHBg="fn"></c-footer>-->

<!--3-5 vuex修改颜色-->
    <c-header ></c-header>
    <div id="content">
      <router-view></router-view>
    </div>
    <c-footer :menu="menu"></c-footer>
  </div>
</template>
<script>
  import CHeader from '@/components/CHeader';
  import CFooter from '@/components/CFooter';
  export default {
    components:{
      CHeader,
      CFooter
    },
    created(){
      // console.log(this.$route.path+111);
      var path = this.$route.path;
      var m = this.menu.filter(elem => {
        return elem.path == path;
      });
      // console.log(m);
      this.$store.dispatch('changeBg',m[0]);
    },
    data(){
      return {
        menu:[
          {
            path:'/movie',
            name:'movie',
            bgColor:'pink',
            title:'movie'
          },
          {
            path:'/music',
            name:'music',
            bgColor:'brown',
            title:'music'
          },
          {
            path:'/book',
            name:'book',
            bgColor:'cornflowerblue',
            title:'book'
          },
          {
            path:'/photo',
            name:'photo',
            bgColor:'lightgray',
            title:'photo'
          }
        ],
        // bgColor:'pink',//3-5 原生修改颜色
      }
    },
    methods:{
//3-5 原生修改颜色
    //   fn(bgColor){
    //     this.bgColor = bgColor;
    //   }
    },
  }
</script>
<style>
  #content{
    margin:1rem 0;
  }
</style>
