import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue';
import ListPage from '@/pages/ListPage.vue';
import GalleryPage from '@/pages/GalleryPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path: '/list',
      component: ListPage
    },
    {
      path: '/gallery',
      component: GalleryPage
    }
  ]
})

export default router
