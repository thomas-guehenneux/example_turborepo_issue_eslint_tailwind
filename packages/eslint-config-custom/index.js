module.exports = {
  extends: ["next", "turbo", "prettier","plugin:tailwindcss/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
