module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "react"],
  rules: {
    // README: this disables prop-types
    "react/prop-types": "warn",
    "prettier/prettier": "warn",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
