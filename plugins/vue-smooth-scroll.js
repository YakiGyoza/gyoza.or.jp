import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll, {
  duration: 500,
  container: '#container',
  offset: 0,
})
