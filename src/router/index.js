import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import RestrauntsView from '../views/RestrauntsView.vue'
import AboutUsView from '../views/AboutUsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/contactus',
    name: 'Contact Us',
    component: ContactUsView
  },

   {
    path: '/restraunts',
    name: 'Restraunts',
    component: RestrauntsView
  },


  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUsView
  },

  {
  path: '/search',
  name: 'Search',
  component: () => import('../views/SearchPage.vue')
  }
  // Add more routes here as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
