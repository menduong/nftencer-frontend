const path = require('path');
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        process: "process",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
      },
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        os: require.resolve("os-browserify/browser"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        util: require.resolve("util/"),
        path: require.resolve("path-browserify"),
        electron: false,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process",
        Buffer: ["buffer", "Buffer"],
      }),
      new webpack.DefinePlugin({
        "process.env.NFT_CONTRACT_ADDRESS": JSON.stringify(
          "0xda7a5df3178ec51aca2d36c5837d1c6fa8c82acb"
        ),
        "process.env.NFT_CONTRACT_ADDRESS_1155": JSON.stringify(
          "0x06A57a809fC90f225E587f8a024961Ef32fa9c1f"
        ),
        "process.env.SIMPLE_EXCHANGE_ADDRESS": JSON.stringify(
          "0xe0C336280CfCc278259b52b681Ce2efb90b648Eb"
        ),
        "process.env.BUSD_CONTRACT_ADDRESS": JSON.stringify(
          "0x07db360b8a092ef4005cdba63780b597765a9435"
        ),
        "process.env.CONT_CONTRACT_ADDRESS": JSON.stringify(
          "0xfa3ced40208b1fc44478ce507d9fca30770dc0fd"
        ),
        "process.env.NFT_STORAGE_ADDRESS": JSON.stringify(
          "0x7faab5927aca36996406f536284987f127f9f2a5"
        ),
        "process.env.NFT_BINANCE_SMART_CHAIN": JSON.stringify(
          "0xBFaC05454a89557be313274a9C6388024b21E803"
        ),
        "process.env.NFT_NFTC": JSON.stringify(
          "0xfa3ced40208b1fc44478ce507d9fca30770dc0fd"
        ),
        "process.env.NFT_BUSD": JSON.stringify(
          "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee"
        ),
        "process.env.NFT_BNB": JSON.stringify(
          "0x0000000000000000000000000000000000000000"
        ),
        "process.env.NFT_CONTRACT_ADDRESS_721": JSON.stringify(
          "0xe8bb5b310c7f7b15af4a752fd35c3d5728fd61f1"
        ),
        "process.env.NFT_BUY_ADDRESS_1155": JSON.stringify(
          "0xa7c3BFA0c9a049050Df226C1247eB765b0B6dce8"
        ),
        "process.env.GAS_LIMIT": 500000,
        "process.env.SERVICE_FEE": "2.5",
        // 'process.env.ADDRESS_API': JSON.stringify("https://api.coconut.global"),
        "process.env.ADDRESS_API": JSON.stringify("https://api.nftencer.com"),
        // 'process.env.chainID': "38", //mainet
        "process.env.chainID": "61", //testnet
      }),
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
