import Vue from 'vue';
import App from './App.vue';
import { router } from './router/router';
import store from '@store';
import './global.scss';

const moment = require('moment');
require('moment/locale/fr');

Vue.use(require('vue-moment'), {
  moment,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
