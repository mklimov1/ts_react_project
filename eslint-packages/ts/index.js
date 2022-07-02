module.exports = {
  extends: [
    `airbnb-typescript`,
    // `airbnb-typescript/base`,
    `plugin:@typescript-eslint/recommended`,
  ],
  parser: `@typescript-eslint/parser`,
  plugins: [`@typescript-eslint`],
  parserOptions: {
    project: [`./tsconfig.json`],
  },
  rules: {
    "import/no-extraneous-dependencies": [`error`, { devDependencies: true }],
    "@typescript-eslint/quotes": [`error`, `backtick`],
    "@typescript-eslint/lines-between-class-members": [`off`],
  },
};
