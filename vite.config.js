import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import vue from '@vitejs/plugin-vue'

const path = require('path')

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
