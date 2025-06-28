module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    // "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": 0,
      "react/react-in-jsx-scope": 0,
      "no-unused-vars": "error",
      "no-console": 2, // Means warning
      // "prettier/prettier": 2, // Means error
      quotes: ["warn", "single"],
      // "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      // "import/extensions": "off",
      // "react/jsx-filename-extension": [
      //   1,
      //   { extensions: [".js", ".jsx", ".tsx", ".ts"] },
      // ],
    },
  },
};
