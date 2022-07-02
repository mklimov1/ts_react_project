module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [`react`],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [`.js`, `.jsx`, `.ts`, `.tsx`] },
    ],
  },
};
