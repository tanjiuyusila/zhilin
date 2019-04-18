<template>
    <div class="footer" :style="{background:bgColor}">
      <ul >
        <li v-for="obj in menu" @click="changeBg(obj)">
          <router-link :to="obj.path">{{obj.name}}</router-link>
        </li>
<!--事件绑定在router-link而非li上-->
        <!--<li v-for="obj in menu" >-->
          <!--<router-link :to="obj.path" @click.native="changeBg(obj)">{{obj.name}}</router-link>-->
        <!--</li>-->
      </ul>
    </div>
</template>
<script>
  import{mapState} from 'vuex';
  export default{
    props:["menu"],
    data(){
      return{
        // bg:'pink',//3-5 原生修改颜色
      }
    },
    methods:{
      changeBg(obj){
        // this.bg = obj.bgColor;//3-5 原生修改颜色
        // this.$emit('changeHBg',this.bg)//3-5 原生修改颜色
        // this.$store.dispatch('changeBg',obj.bgColor) // 3-5 vuex修改颜色
        this.$store.dispatch('changeBg',obj) // vuex修改颜色和标题
      }
    },
    computed:{
      ...mapState([
        'bgColor' // 3-5 vuex修改颜色
      ])
    },
  }
</script>
<style scoped>
  .footer{
    position: fixed;
    bottom:0;
    left:0;
    height: 1rem;
    width: 100%;
    /*background: pink;*/
  }
  .footer ul{
    display:flex;
  }
  li{
    flex-grow:1;
    /*color:gray;*/
    line-height: 1rem;
    text-align:center;
  }
  /* router 解析之后是一个a标签*/
  .footer a{
    color:black;
    /* 去掉点击之后带一个虚线框 */
    outline:none;
  }
  /* router 自带的类 */
  .footer a.router-link-active{
    color:white;
  }

</style>
