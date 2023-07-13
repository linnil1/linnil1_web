module.exports = {
  extends: ["plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
  rules: {
    "vue/multi-word-component-names": ["error", { ignores: ["index"] }],
    "prettier/prettier": "error",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
};
