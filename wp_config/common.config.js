/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const paths = require(`./paths`);

module.exports = {
  entry: { main: `${paths.src}/scripts/index.ts` },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: `ts-loader`,
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          { loader: `style-loader` },
          { loader: `css-loader` },
          {
            loader: `postcss-loader`,
            options: {
              postcssOptions: { config: `wp_config/postcss.config.js` },
            },
          },
          { loader: `sass-loader` },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|fbx|glb|gltf)$/i,
        type: `asset`,
      },
    ],
  },
  resolve: { extensions: [`.tsx`, `.ts`, `.js`, `.jsx`] },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}/template/index.html`,
      filename: `index.html`,
    }),
    new CleanWebpackPlugin(),
  ],
};
