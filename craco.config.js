const path = require("path")

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === "production") {
        webpackConfig.output.publicPath = "/CampusMap/"
      }

      webpackConfig.module.rules[1].oneOf.unshift(
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        { test: /\.svg$/, loader: "svg-inline-loader" }
      )

      webpackConfig.resolve.alias = {
        "@svgedit/svgcanvas": path.resolve(__dirname, "src/svgedit/canvas"),
      }

      webpackConfig.ignoreWarnings = [
        { message: /source-map-loader/ },
        { message: /Critical dependency/ },
      ]

      return webpackConfig
    },
  },
}
