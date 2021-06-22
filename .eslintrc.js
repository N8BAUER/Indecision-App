module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': 0,
    'max-classes-per-file': ['error', 10],
    'max-len': 'off',
  },
};
