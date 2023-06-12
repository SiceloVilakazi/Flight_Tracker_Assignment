const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: 
  {
    home: path.resolve(__dirname,'src/index.ts'),
  },
  mode: "development",
  devtool:'inline-source-map',
  devServer: {
    watchFiles: ["src/**/*"],
    static:{
      directory:path.resolve(__dirname,'dist')
    },
    open:true,
    hot:true,
    compress:true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test:/\.scss$/,
        use:[
            'style-loader',
            'css-loader',
            'sass-loader'
        ],
    },
    {
        test:/\.(png|svg|jpg|gif)$/i,
        type:'asset/resource'
    },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index.html", to: "index.html" }],
    }),
  ],
  output: {
    chunkFilename: '[name].js',
    filename: "bundle.js",
    clean: true,
  },
};