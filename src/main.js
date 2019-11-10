import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

// Setup libraries
import './libraries.js';

// Setup icons
import './icons.js';

// Import custom css
import '@/assets/scss/main.style.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
