import { createRouter, createWebHashHistory } from 'vue-router'  // import hash history
import HomeView from '../views/HomeView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import RestrauntsView from '../views/RestrauntsView.vue'
import AboutUsView from '../views/AboutUsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/contactus', name: 'Contact Us', component: ContactUsView },
  { path: '/restraunts', name: 'Restraunts', component: RestrauntsView },
  { path: '/aboutus', name: 'AboutUs', component: AboutUsView },
  { path: '/search', name: 'Search', component: () => import('../views/SearchPage.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),  // use the correct imported function here
  routes,
})

export default router
