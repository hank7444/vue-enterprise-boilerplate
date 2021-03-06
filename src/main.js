import Vue from 'vue'
import App from './app'
import router from '@router'
import store from '@state/store'
import '@components/_globals'

// eslint-disable-next-line no-use-before-define
console.log('__SERVER_URL__', __SERVER_URL__);

// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.NODE_ENV === 'production'

/*
  Difference between .$mount() and el [Vue JS]
  https://stackoverflow.com/questions/46831452/difference-between-mount-and-el-vue-js
*/
const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// If running inside Cypress
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`
  window.__app__ = app
}
