import Vue from "vue";
import Vuex from 'vuex'
import FilmsNew from './moviesHomePage/FilmsNew'
import filmList from "@/store/moviesHomePage/filmList";
import addFavorite from "@/store/addFavorite/addFavorite";
import user from "@/store/user/index";

Vue.use(Vuex);

export default new Vuex.Store({
    namespased:true,
modules: {
FilmsNew,filmList,addFavorite, user
}
})