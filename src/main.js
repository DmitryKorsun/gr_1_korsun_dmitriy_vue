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
  router,store,
  render: h => h(App)
}).$mount('#app')
