module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "standard-with-typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["vitest"],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
  },
};
