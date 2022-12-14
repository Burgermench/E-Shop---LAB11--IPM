/*

  ==================================================================================================
  * Vue E-Commerce App (IPM-2022)
  ==================================================================================================

  * Author:  João Cardoso
  * Date:    2022-12-07
 
  * URL: http://daw.deei.fct.ualg.pt/~a61149/LAB11/dist
  * GIT: https://github.com/Burgermench/LAB11

*/

// Import modules
import Vue    from 'vue'              // Import vue class      (to use vue object)
import App    from './App.vue'        // Import App component  (centralizes all components)         [used by vue object]
import router from './router'         // Import store          (container for application state)    [used by vue object]
import store  from './store'          // Import router         (links relative paths to components) [used by App component]
import bootstrapvue from 'bootstrap-vue' // Import bootstrap-vue
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

// Prevents the production tip on Vue startup
Vue.config.productionTip = false

new Vue({
  router,
  store,
  bootstrapvue,
  bootstrap,
  jquery,
  bjs,
  render: h => h(App)
}).$mount('#app')


import jquery from 'jquery/src/jquery.js';
import bjs from 'bootstrap/dist/js/bootstrap.min.js';