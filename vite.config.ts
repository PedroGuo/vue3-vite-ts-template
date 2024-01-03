import type { ConfigEnv, UserConfig } from 'vite';
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';

const envPrefix = ['VITE_'];

// https://vitejs.dev/config/
export default async ({ mode }: ConfigEnv): Promise<UserConfig> => {
  const packageRoot = process.cwd();
  const { VITE_PUBLIC_PATH } = loadEnv(mode, packageRoot, envPrefix);
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5177,
      strictPort: true,
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/style/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
    },
    plugins: [vue()],
  }

}
