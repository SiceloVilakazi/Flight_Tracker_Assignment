const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
        home: path.resolve(__dirname,'src/index.ts'),
    },
    output:{
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
  devtool:'inline-source-map',
  devServer:{
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
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins:[
    new HtmlWebpackPlugin({
        title: 'Landing Page',
        filename: 'index.html',
        template: './index.html',
        chunks:['home']
    }),
   
]
};