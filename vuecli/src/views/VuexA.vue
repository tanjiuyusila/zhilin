<template>
    <div>
        <h1>VuexA组件</h1>
<!--a.-->
        <!--<vuex-b msg="hello world"></vuex-b>-->
<!--c.-->
        <vuex-b :msg="msg"></vuex-b>
<!--b. 子调用父：点击，跳转值VuexC中的$emit（）处，再调用VueA中的fn方法-->
        <vuex-c @addChange="fn"></vuex-c>
      {{msg}}
    </div>
</template>
<script>
  // @指代src文件夹
    import VuexB from '@/views/VuexB.vue';
    import VuexC from '@/views/VuexC.vue';
    export default{
      data(){
        return {
          msg:0,
        }
      },
      components:{
        VuexB,
        VuexC
      },
      methods:{
        fn(a){
          this.msg += a;
        }
      }
    }
</script>
<style>

</style>
