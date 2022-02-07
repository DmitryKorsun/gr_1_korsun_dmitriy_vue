import Vue from 'vue'
import VueRouter from 'vue-router'
import Home_page from "@/page/Home_page";
import Details_movie from "@/page/Details_movie";
import Serials from "@/page/Serials";
import Films from "@/page/Films";
import Movies from "@/page/Movies";
import Favorit from "@/page/Favorit";
import RegistrationForm from "@/components/RegistrationForm";
import LoginForm from "@/components/LoginForm";
import UserCabinet from "@/page/UserCabinet";
import Search from "@/page/Search";

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
    path: '/details_movie/:idMOVIE',
    name: 'Details_movie',
    component: Details_movie
  },
  {
    path: '/registrationForm',
    name: 'RegistrationForm',
    component: RegistrationForm
  },
  {
    path: '/loginForm',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/userCabinet',
    name: 'UserCabinet',
    component: UserCabinet
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
