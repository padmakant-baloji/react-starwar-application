const config = {
    entry: './src/index.js',
    output: {
        filename: './public/index.js',
    },
    mode: "development",
    devServer: {
        contentBase: ['./public/', './src/'],
        inline: true, 
        port: 8083,
        disableHostCheck:true 
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js?$/,
            exclude: /node_module/,
            loader: 'babel-loader',
            query: {
              presets: ['es2016', 'react']
            }
          },{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }]
    },
    devtool: 'source-map'

}

module.exports = config;