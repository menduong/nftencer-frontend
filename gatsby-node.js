const path = require('path');
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        process: 'process',
        stream: 'stream-browserify',
        zlib: 'browserify-zlib'
      },
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        os: require.resolve('os-browserify/browser'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        util: require.resolve('util/'),
        path: require.resolve("path-browserify"),
        electron: false
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process',
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.DefinePlugin({
        'process.env.NFT_CONTRACT_ADDRESS': JSON.stringify("0xda7a5df3178ec51aca2d36c5837d1c6fa8c82acb"),
        'process.env.SIMPLE_EXCHANGE_ADDRESS': JSON.stringify("0xe0c336280cfcc278259b52b681ce2efb90b648eb"),
        'process.env.BUSD_CONTRACT_ADDRESS': JSON.stringify("0xe9e7cea3dedca5984780bafc599bd69add087d56"),
        'process.env.CONT_CONTRACT_ADDRESS': JSON.stringify("0x323249642f3a4519134a0926cb7797077e49de76"),
        'process.env.GAS_LIMIT': 500000,
        'process.env.SERVICE_FEE': "2.5",
        'process.env.ADDRESS_API': JSON.stringify("https://api.coconut.global"),
      })
    ],
  });

  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
          components: path.resolve(__dirname, 'src/components/'),
          assets: path.resolve(__dirname, 'src/assets/'),
          lib: path.resolve(__dirname, 'src/lib/'),
          store: path.resolve(__dirname, 'src/store/'),
        },
      },
    });
  }

  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /multiselect-react-dropdown/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};
