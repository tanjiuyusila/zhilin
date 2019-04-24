<template>
  <div class="book">
    <swipe class="my-swipe">
      <swipe-item class="item1"></swipe-item>
      <swipe-item class="item2"></swipe-item>
      <swipe-item class="item3"></swipe-item>
    </swipe>
  </div>
</template>
<script>
  import {Swipe,SwipeItem} from 'vue-swipe';
  export default{
    data(){
      return {

      }
    },
    components:{
      'swipe':Swipe,
      'swipe-item':SwipeItem
    }
  }
</script>
<style scoped>

  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .item1 {
    /*路径要写成*/
    background: url('http://localhost:8081/img/01.jpg') no-repeat center;
    background-size: contain;
    color: #fff;
  }

  .item2 {
    background: url('http://localhost:8081/img/02.jpg') no-repeat center;
    background-size: contain;
    color: #000;
  }

  .item3 {
    background: url('http://localhost:8081/img/03.jpg') no-repeat center;
    background-size: contain;
    color: #fff;
  }
</style>
