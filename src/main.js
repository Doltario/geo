import Vue from 'vue';
import App from './App.vue';
import { router } from './router/router';
import store from '@store';
import './global.scss';

const moment = require('moment');
require('moment/locale/fr');

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faLink, faThumbsUp, faBookmark, faFont, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faLink, faThumbsUp, faBookmark, faFont, faSearch, faUserCircle);

library.add(fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(require('vue-moment'), {
  moment,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
