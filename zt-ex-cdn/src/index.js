import Vue from 'vue'
// import Router from 'vue-router'
import Home from './pages/home.vue.js'
const NotFound = new Vue({ template: '<p>Page not found</p>' })

// Vue.use(Router)

// new Router({
//   routes: [
//     // {
//     //   path: '/',
//     //   name: 'HelloWorld',
//     //   component: HelloWorld
//     {
//       path: '/',
//       redirect: { name: 'Home' }
//     }, {
//       path: '/home',
//       name: 'Home',
//       component: Home
//     }, {
//       path: ':path',
//       name: '404',
//       component: NotFound
//     }
//   ]
// })

new Vue({
  el: '#app',
  // router,
  // template: '<router-view/>',
  template: '<p>HOLA!</p>',
  components: { Home }
})
