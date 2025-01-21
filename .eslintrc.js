module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        switchCase: 1
      }
    ]
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  }
}
