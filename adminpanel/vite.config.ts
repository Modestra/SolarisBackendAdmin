import { Alias, defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue'

const getAliasObject = (findName: string, path: string): Alias => {
  return {
    find: findName,
    replacement: fileURLToPath(new URL(path, import.meta.url)),
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ script: { defineModel: true } })],
  server: {
    port: 8100
  },
  resolve: {
    alias: [
      getAliasObject("@api", "./src/core/api"),
      getAliasObject("@components", "./src/core/components"),
      getAliasObject("@services/core", "./src/core/services"),
      getAliasObject("@services", "./src/services"),
    ]
  }
})
