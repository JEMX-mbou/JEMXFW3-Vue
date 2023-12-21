import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FeatureView from '../views/FeatureView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/features',
      name: 'features',
      component: FeatureView
    },
    {
      path: '/feature/base',
      name: 'feature-base',
      component: () => import('../views/BaseView.vue')
    },
    {
      path: '/feature/conf',
      name: 'feature-conf',
      component: () => import('../views/ConfView.vue')
    },
    {
      path: '/feature/extend',
      name: 'feature-extend',
      component: () => import('../views/ExtendView.vue')
    },
    {
      path: '/feature/layout',
      name: 'feature-layout',
      component: () => import('../views/LayoutView.vue')
    },
    {
      path: '/feature/theme',
      name: 'feature-theme',
      component: () => import('../views/ThemeView.vue')
    },
    {
      path: '/feature/utils',
      name: 'feature-utils',
      component: () => import('../views/UtilsView.vue')
    }
  ]
})

export default router
