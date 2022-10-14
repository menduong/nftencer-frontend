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
        'process.env.SIMPLE_EXCHANGE_ADDRESS': JSON.stringify("0xe0C336280CfCc278259b52b681Ce2efb90b648Eb"),
        'process.env.BUSD_CONTRACT_ADDRESS': JSON.stringify("0x07db360b8a092ef4005cdba63780b597765a9435"),
        'process.env.CONT_CONTRACT_ADDRESS': JSON.stringify("0xfa3ced40208b1fc44478ce507d9fca30770dc0fd"),
        'process.env.GAS_LIMIT': 500000,
        'process.env.SERVICE_FEE': "2.5",
        // 'process.env.ADDRESS_API': JSON.stringify("https://api.coconut.global"),
        'process.env.ADDRESS_API': JSON.stringify("https://api.nftencer.com"),
        // 'process.env.chainID': "38", //mainet
        'process.env.chainID': "61",  //testnet
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
