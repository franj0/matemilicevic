import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Homepage.vue'
import Contact from '../views/Contact.vue'
import Videos from '../views/Videos.vue'
import Gallery from '../views/Gallery.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/videos',
    name: 'Videos',
    component: Videos
  }, {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
