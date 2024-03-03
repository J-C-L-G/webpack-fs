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
        },
        client: {
            overlay: true,
        },
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
            },
            {
                test: /\.html$/,
                use: [
                    // tells wp which file you want to create (Run 3rd)
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].html'
                        }
                    },
                    // treat is a separate file and bundle it separately (Run 2nd)
                    {
                        loader: 'extract-loader',
                    },
                    // performs the html linting (Run 1st)
                    {
                        loader: 'html-loader',
                        options: {
                            esModule: false,
                            sources: {
                                list: [
                                    {
                                        tag: "img",
                                        attribute: "src",
                                        type: "src",
                                    },
                                ]
                            }
                        },
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: "images/[name]-[hash:8].[ext]"
                }
            }
        ]
    }
};