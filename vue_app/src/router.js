import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Book from './views/book/Book.vue'
import Photo from './views/photo/Photo.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import PhotoDetail from './views/photo/PhotoDetail.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/movie'
    },
    {
      path:'/movie',
      name:'movie',
      component:Movie,
    },
    {
      path:'/music',
      component:Music,
    },
    {
      path:'/book',
      component:Book,
    },
    {
      path:'/photo',
      component:Photo,
    },
    {
      path:'/photo-detail/:index',
      component:PhotoDetail,
    },
    {
      path:'/movie-detail/:id',
      name:'moviedetail',
      component:MovieDetail
    },
  ],
});
