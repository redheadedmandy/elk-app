// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
import { VueHammer } from 'vue2-hammer'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Tabs from 'vue-tabs-component'
import './../node_modules/jquery/dist/jquery.min.js'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './assets/mainstyle.css'
import './assets/fontello.css'

Vue.use(Tabs);
 
Vue.use(Vuetify)

Vue.use(VueHammer)
Vue.use(vueEventCalendar, {locale: 'en'})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
