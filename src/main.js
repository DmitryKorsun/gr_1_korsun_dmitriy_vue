import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import VueCarousel from 'vue-carousel';
import router from './router'
import UniqueInput from "@/components/UI_components/UniqueInput";
import UniqueGender from "@/components/UI_components/UniqueGender";
import UniqueSelect from "@/components/UI_components/UniqueSelect";
import ModalKabinet from "@/components/ModalKabinet";
import UniqueCheckbox from "@/components/UI_components/UniqueCheckbox";

Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.component('UniqueInput', UniqueInput);
Vue.component('UniqueGender', UniqueGender);
Vue.component('UniqueSelect', UniqueSelect);
Vue.component('ModalKabinet', ModalKabinet);
Vue.component('UniqueCheckbox', UniqueCheckbox);
new Vue({
    router, store,
    render: h => h(App)
}).$mount('#app')


// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCoKy77SYQDrcq54tL3EgDKqSknKF_oJco",
    authDomain: "gitauth-6a0c7.firebaseapp.com",
    projectId: "gitauth-6a0c7",
    storageBucket: "gitauth-6a0c7.appspot.com",
    messagingSenderId: "219878918564",
    appId: "1:219878918564:web:85690a715349f875185931",
    measurementId: "G-YT657566VW"
};

// Initialize Firebase
initializeApp(firebaseConfig);
