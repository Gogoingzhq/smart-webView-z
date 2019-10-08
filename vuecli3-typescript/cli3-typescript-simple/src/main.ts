import Vue from 'vue';
import App from './App.vue';
import App2 from './App2';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App2),
}).$mount('#app');