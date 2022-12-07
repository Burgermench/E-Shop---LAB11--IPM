/*

  ==================================================================================================
  * Vue E-Commerce App (IPM-2022)
  ==================================================================================================

  * Author:  João Miguel Cardoso
  * Date:    2022-12-07
 
  * URL:
  * GIT:

*/

// Import modules
import Vue    from 'vue'              // Import vue class      (to use vue object)
import App    from './App.vue'        // Import App component  (centralizes all components)         [used by vue object]
import router from './router'         // Import store          (container for application state)    [used by vue object]
import store  from './store'          // Import router         (links relative paths to components) [used by App component]

// Prevents the production tip on Vue startup
Vue.config.productionTip = false

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Instantiate new vue Object
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Import bootstrap js
import "bootstrap/dist/js/bootstrap.js";