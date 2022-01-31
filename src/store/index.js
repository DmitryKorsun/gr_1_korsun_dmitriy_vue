import Vue from "vue";
import Vuex from 'vuex'
import FilmsNew from './moviesHomePage/FilmsNew'
import filmList from "@/store/moviesHomePage/filmList";

Vue.use(Vuex);

export default new Vuex.Store({
modules: {
FilmsNew,filmList

}
})