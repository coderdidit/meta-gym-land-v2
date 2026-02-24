const webpack = require("webpack");
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    url: require.resolve("url"),
    fs: require.resolve("fs"),
    assert: require.resolve("assert"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  );

  // Ignore broken third-party sourcemap references (do not affect runtime code).
  config.ignoreWarnings = [
    ...(config.ignoreWarnings || []),
    (warning) => {
      const message = warning?.message || "";
      const moduleResource = warning?.module?.resource || "";

      if (!message.includes("Failed to parse source map")) {
        return false;
      }

      // @ion-phaser/react ships sourcemap links to non-published src files.
      if (moduleResource.includes("/node_modules/@ion-phaser/react/")) {
        return true;
      }

      // antd css sourcemaps reference webpack:// URLs source-map-loader cannot resolve.
      if (
        moduleResource.includes("/node_modules/antd/dist/antd.css") &&
        message.includes("webpack://antd/")
      ) {
        return true;
      }

      return false;
    },
  ];

  return alias({
    "@games": "src/games",
    "@services": "src/services",
  })(config);
};
