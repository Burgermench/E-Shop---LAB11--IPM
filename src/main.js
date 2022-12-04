// Import code from other modules
import Vue from 'vue'              // Import vue class      (to use vue object)
import App from './App.vue'        // Import App component  (centralizes all components)         [used by vue object]
import router from './router'      // Import store          (container for application state)    [used by vue object]
import store from './store'        // Import router         (links relative paths to components) [used by App component]

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Import a local font
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

// Prevents the production tip on Vue startup
Vue.config.productionTip = false

// Instantiate new vue Object
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Import bootstrap js
import "bootstrap/dist/js/bootstrap.js";