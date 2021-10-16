import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuesax);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
