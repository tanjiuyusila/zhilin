<template>
  <!--<div class="photo-detail" :style="{'background-image':'url('+photoList[$route.params.index].src+')'}">-->
  <!--</div>-->
  <!--左右滑-->
  <router-link to="/photo">
  <vue-touch class="photo-detail" :style="{'background-image':'url('+photoList[index].src+')'}"
   @swipeleft="left" @swiperight="right"
  >
  </vue-touch>
  </router-link>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    data(){
      return{
        index:this.$route.params.index
      }
    },
    created(){
      console.log(this.$route.params.index);//对象

    },
    computed:mapState(['photoList']),
    methods:{
      left(){
        console.log('left');
        this.index ++;
      },
      right(){
        console.log('right');
        this.index --;
      }
    }
  }
</script>

<style scoped>
  .photo-detail{
    /*background-image:url('/img/1.jpg');*/
    background-size: contain;
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
  }
</style>
