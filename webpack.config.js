const path = require('path')

module.exports = {
    mode: "none",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 7000
    },
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     options:{
            //         presets: ['@babel/preset-env']
            //     } 
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif|gzip)$/i,
                type: 'asset/resource'
            }
        ]
    }
}