// Import code from other modules
import Vue from 'vue'              // Import vue class      (to use vue object)
import App from './App.vue'        // Import App component  (centralizes all components)         [used by vue object]
import store from './store'        // Import router         (links relative paths to components) [used by App component]
import router from './router'      // Import store          (container for application state)    [used by vue object]

// Prevents the production tip on Vue startup
Vue.config.productionTip = false

// Instantiate new vue Object
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

