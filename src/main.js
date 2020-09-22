import Vue from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import App from './App.vue';
import router from './router';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
