import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import store from '@/store/index.js';

import VeeValidate from 'vee-validate';

Vue.config.productionTip = false

Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
