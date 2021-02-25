const { merge } = require('webpack-merge');


const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

const devConfig = merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["tester dev config", "css-loader"],
      },
    ]
  }
});

console.log(devConfig.module.rules);
