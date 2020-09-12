//entry point -> output

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log(env);
  const isProduction = env === "production";

  return {
    resolve: {
      extensions: [".js", ".scss", ".css"],
    },
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },

            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
