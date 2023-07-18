import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue';
import ListPage from '@/pages/ListPage.vue';
import GalleryPage from '@/pages/GalleryPage.vue';
import { data, type GalleryData, type ListData } from './structure';

const routes = data.reduce<RouteRecordRaw[]>((acc, row) => {

  function listToRoute(d: ListData | GalleryData): RouteRecordRaw[] {

    const children = d.type === 'gallery' ? d.lists.flatMap((m) => listToRoute(m)) : []

    return [{
      path: `/${d.id}`,
      component: d.type === "list" ? ListPage : GalleryPage,
      name: d.id,
      props: d,
    }, ...children]
  }

  return [...acc, ...listToRoute(row)];
}, [])

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: IndexPage,
      name: "Index",
    },
    ...routes,
  ]
})

export default router
