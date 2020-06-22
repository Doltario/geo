import Vue from 'vue';
import App from './App.vue';
import { router } from './router/router';
import store from '@store';
import './global.scss';

Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
