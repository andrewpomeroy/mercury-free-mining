module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    // "quotes": "double",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "tabWidth": 2,
        "singleQuote": true,
        // "printWidth": 140,
      }
    ],
  },
};
