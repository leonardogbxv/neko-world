import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import anime from 'animejs/lib/anime.es.js'

Vue.prototype.$axios = axios
Vue.prototype.$anime = anime

new Vue({
  render: h => h(App),
}).$mount('#app')
