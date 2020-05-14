module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    gtag: 'readonly',
    it: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'class-methods-use-this': 0,
    'no-use-before-define': ['error', { functions: false }],
    'no-param-reassign': 0,
    'no-unused-vars': 'warn',
    'prettier/prettier': ['error']
  },
};
