import Vue from 'vue'
import VueRouter from 'vue-router'
import Home_page from "@/page/Home_page";
import Details_movie from "@/page/Details_movie";
import Serials from "@/page/Serials";
import Films from "@/page/Films";
import Movies from "@/page/Movies";
import Favorit from "@/page/Favorit";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home_page',
    component: Home_page
  },
  {
    path: '/serials',
    name: 'Serials',
    component: Serials
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/favorit',
    name: 'Favorit',
    component: Favorit
  },
  {
    path: '/details_movie',
    name: 'Details_movie',
    component: Details_movie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
