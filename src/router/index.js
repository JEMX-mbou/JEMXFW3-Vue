import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FeatureView from '../views/FeatureView.vue'
import ComponentView from '../views/ComponentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/feature',
      name: 'Features',
      children: [
        {
          path: '',
          name: 'Features',
          component: FeatureView
        },
        {
          path: '/feature/base',
          name: 'Base',
          component: () => import('../views/feature/BaseView.vue')
        },
        {
          path: '/feature/conf',
          name: 'Conf',
          component: () => import('../views/feature/ConfView.vue')
        },
        {
          path: '/feature/extend',
          name: 'Extend',
          component: () => import('../views/feature/ExtendView.vue')
        },
        {
          path: '/feature/layout',
          name: 'Layout',
          component: () => import('../views/feature/LayoutView.vue')
        },
        {
          path: '/feature/theme',
          name: 'Theme',
          component: () => import('../views/feature/ThemeView.vue')
        },
        {
          path: '/feature/utils',
          name: 'Utils',
          component: () => import('../views/feature/UtilsView.vue')
        }
      ]
    },
    {
      path: '/components',
      name: 'Components',
      component: ComponentView,
      children: [
        {
          path: '/component/masthead',
          name: 'Masthead',
          component: () => import('../views/component/MastheadView.vue')
        },
        {
          path: '/component/navbar',
          name: 'Navbar',
          component: () => import('../views/component/NavbarView.vue')
        }
      ]
    }
  ]
})

export default router
