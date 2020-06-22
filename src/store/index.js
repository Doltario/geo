import Vue from 'vue';
import Vuex from 'vuex';
import geo from './modules/geo';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    geo,
  },
  strict: debug,
});
