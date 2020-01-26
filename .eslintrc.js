module.exports = {
  extends: ['eslint:recommended'],
  env: { browser: true },
  rules: {
    curly: 'off',
    'no-var': 'warn',
    'require-jsdoc': 'off',
    'object-curly-spacing': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'no-inner-declarations': 'off',
  },
  parserOptions: {
    sourceType: 'module',
  },
};
