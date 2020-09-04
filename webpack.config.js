module.exports = {
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue"
      },
      {
        test: /\.s[a|c]ss$/,
        loader: "style!css!sass"
      }
    ]
  },
  vue: {
    loaders: {
      scss: "style!css!sass"
    },
  },
};
