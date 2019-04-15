<template>
    <div>
<!--1. 使用vuex的值 方法1：-->
      <!--<h1>我是{{$store.state.count}}组件</h1>-->
<!--1. 使用vuex的值 方法2：-->
      <!--<h1>我是{{count}}组件</h1>-->
<!--2. 更改store中的值-->
      <!--不提倡-->
      <!--<button @click="$store.state.count++">+</button>-->
      <!--<button @click="$store.commit('add')">+</button>-->
      <!--<button @click="$store.commit('sub')">-</button>-->
<!--2. 更改store中的值，带参数-->
      <!--<button @click="$store.commit('add',2)">+</button>-->
      <!--<button @click="$store.commit('sub',3)">-</button>-->
<!--3. mapState-->
      <!--<h1>我是{{count1}}组件</h1>-->
      <!--<h1>我是{{msg}}组件</h1>-->
<!--3. mapState 方法2：-->
      <h1>我是{{count}}组件</h1>
      <h1>我是{{msg}}组件</h1>
<!--3. mapState 方法3：-->
      <h1>str长度：{{len}}</h1>
      更改字符串：<input type="text" v-model="str">
<!--4. mutations直接调用方法-->
      <button @click="add(2)">-</button>
      <button @click="sub(2)">-</button>
<!--5. getters-->
      <!--<h1>count+100:{{$store.getters.count100}}</h1>-->
      <h1>count+100:{{count100}}</h1>
<!--6. actions 通过dispatch调用action，通过commit调用mutation-->
      <!--<button @click="$store.dispatch('addNum',3)">调用actions</button>-->
      <button @click="addNum(3)">调用actions</button>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default{
      data(){
        return {
          str:'sss'
        }
      },
//1. 使用vuex的值 方法2：加入计算属性
//         computed:{
//           count(){
//             return this.$store.state.count;
//           }
//         }
//3. mapstate:辅助生成计算属性，对象，可以自己写逻辑，再加1；
//         computed:mapState({
//           count1: state => {
//             return state.count++;
//           },
//           msg: state => state.msg,
//         })
//3. mapState 方法2：数组。不能自己写逻辑
//       computed:mapState([
//         'count',
//         'msg',
//       ])
//3. mapState和局部计算属性混合使用：...对象展开运算符
      computed:{
          len(){
            return this.str.length
          },
          ...mapState([
          'count',
          'msg',
          ]),
//5.getters
        ...mapGetters([
          'count100'
        ]),
      },
//4. Mutations直接调用函数
      methods:{
        ...mapMutations(['sub','add']),
        ...mapActions(['addNum'])
      },
    }
</script>
<style>

</style>
