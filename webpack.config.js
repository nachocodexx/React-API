const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig=new HtmlWebpackPlugin({
//   filename:path.join(__dirname,'public','index.html'),
//   inject:"body"
// });


module.exports={
  entry:{
    app:path.join(__dirname,'src','index.jsx'),
    style:path.join(__dirname,'src','styles','styles.js')
  },
  output:{
    path:path.join(__dirname,'public','js'),
    filename:'[name].bundle.js'
  },
  watch:true,
  module:{
    loaders:[
      {
        test:/\.jsx$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        query:{
          presets:['es2015','react']
        }
      },
      {
        test:/\.scss$/,
        loader:'style-loader!css-loader!sass-loader',
        exclude:/node_modules/,
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx']
  }
  ,
  plugins:[
    // HtmlWebpackPluginConfig,
  ]

}
