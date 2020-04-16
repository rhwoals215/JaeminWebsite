import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
