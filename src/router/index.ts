import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'

import DemoPage from '@/pages/demo/demo.vue'

import IndexPage from '@/pages/home/home.vue'
const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/demo',
    component: DemoPage,
    meta: {
      title: 'Demo title',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export { router };

export function setupRouter(app: App<Element>) {
  app.use(router);
}