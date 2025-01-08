import vue from '@vitejs/plugin-vue';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

const path = require('path');

module.exports = {
  outDir: 'dist',
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VueBeatifulChat'
    },
    rollupOptions: {
      plugins: [dynamicImportVars()],
      external: ['vue'],
      output: [
        {
          assetFileNames: 'vue-beatiful-chat.css',
          format: 'umd',
          name: 'VueBeatifulChat',
          globals: {
            vue: 'Vue'
          }
        },
        {
          format: 'esm',
          globals: {
            vue: 'Vue'
          }
        }
      ]
    }
  }
}

