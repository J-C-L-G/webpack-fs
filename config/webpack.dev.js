const { join } = require('path');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: join(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: join(__dirname, '../dist'),
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        // Injects styles into html
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
};