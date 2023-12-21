import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FeatureView from '../views/FeatureView.vue'

import BaseView from '../views/BaseView.vue'
import ConfView from '../views/ConfView.vue'
import ExtendView from '../views/ExtendView.vue'
import LayoutView from '../views/LayoutView.vue'
import ThemeView from '../views/ThemeView.vue'
import UtilsView from '../views/UtilsView.vue'

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
      // component: () => import('../views/AboutView.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/features',
      name: 'features',
      component: FeatureView
    },
    {
      path: '/feature/base',
      name: 'feature-base',
      component: BaseView
    },
    {
      path: '/feature/conf',
      name: 'feature-conf',
      component: ConfView
    },
    {
      path: '/feature/extend',
      name: 'feature-extend',
      component: ExtendView
    },
    {
      path: '/feature/layout',
      name: 'feature-layout',
      component: LayoutView
    },
    {
      path: '/feature/theme',
      name: 'feature-theme',
      component: ThemeView
    },
    {
      path: '/feature/utils',
      name: 'feature-utils',
      component: UtilsView
    }
  ]
})

export default router
