module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "eqeqeq": "off",
    "no-unused-vars": "error",
    "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
  },
};
