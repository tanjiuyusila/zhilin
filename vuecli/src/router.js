import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';
import Movie from './views/Movie.vue';
import MovieDetail from './views/MovieDetail.vue';
import VuexA from './views/VuexA.vue';
import Vuex from './views/Vuex.vue';


Vue.use(Router);
let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
//例5：别名 虽然跳到about中，url显示别名
      alias:'/yzl',
//例8：钩子函数（路由独享钩子）
//       beforeEnter:(to,from,next) => {
//         if(from.name == 'mine'){
//           next(false);
//         }else{
//           next(true);
//         }
//       }
    },
//例1:添加链接
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      //例2：子路由
      children:[
        {
          path: 'test1',
          name: 'test1',
          component: Test1,
        },
        {
          //例3：参数传递
          path: 'test2/:name/:age',
          name: 'test2',
          component: Test2,
        },
      ]
    },
//例4：重定向
    {
      path: '/home',
      redirect:'/',
    },
  //带参数
    {
      path:'/home/:name/:age',
      redirect:'/mine/test2/:name/:age',
    },
//例7：404
    {
      path:'*',
      component:Error,
    },
//例9：编程式导航
    {
      path:'/movie',
      component:Movie,
    },
    {
      path:'/movieDetail/:movieId',
      component:MovieDetail,
    },
//例10：VueX
    {
      path:'/vuexa',
      component:VuexA,
    },
    {
      path:'/vuex',
      component:Vuex,
    }
  ],
});
//例8：钩子函数
// router.beforeEach((to,from,next) => {
// // 全局守卫
//   console.log(to);//跳转到的路由
//   console.log(from);//从那个路由开始跳
//   if(from.name == 'mine'){
//     next(false)
//   }else{
//     next(true);//代表允不允许往下走；
//   }
//     next();
// });
// router.afterEach((to,from) => {
// //全局后置钩子
//   console.log(1)
// });
export default router
