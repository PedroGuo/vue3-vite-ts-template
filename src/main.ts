import { createApp } from 'vue';

import { setupRouter } from '@/router';
import { setupStore } from '@/stores';

import App from './App.vue';

import '@/styles/index.less';

function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupStore(app);
  app.mount('#app');
}

bootstrap();
