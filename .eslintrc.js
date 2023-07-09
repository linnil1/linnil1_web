module.exports = {
  extends: ["plugin:vue/vue3-recommended"],
  rules: {
    "vue/multi-word-component-names": ["error", { ignores: ["index"] }],
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
