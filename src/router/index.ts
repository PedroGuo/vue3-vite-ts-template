import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import DemoPage from '@/pages/demo/demo.vue';
import IndexPage from '@/pages/home/home.vue';
import NotFound from '@/pages/NotFound.vue';
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
  {
    path: `/404`,
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'NotFound',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: '',
    meta: {},
    redirect: `/404`,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
  strict: true,
});

export { router };

export function setupRouter(app: App<Element>) {
  app.use(router);
}
