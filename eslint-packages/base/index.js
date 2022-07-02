module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    // `airbnb-base`,
    `airbnb`,
    `prettier`,
  ],
  parserOptions: {
    ecmaVersion: `latest`,
    sourceType: `module`,
  },
  plugins: [`import`, `prettier`],
  rules: {
    quotes: [`error`, `backtick`],
    "prettier/prettier": [`error`],
    "import/extensions": [
      `error`,
      `ignorePackages`,
      {
        js: `never`,
        jsx: `never`,
        ts: `never`,
        tsx: `never`,
      },
    ],
    "lines-between-class-members": `off`,
  },
};
