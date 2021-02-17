const webpack                 = require('webpack');
const path                    = require('path');
const HTMLWebpackPlugin       = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const TerserWebpackPlugin     = require('terser-webpack-plugin');
// const CopyWebpackPlugin      = require('copy-webpack-plugin');
//TODO: copy favicons ??

const isDev = process.env.NODE_ENV === 'development';

const optimization = () => {
    const config = {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
        moduleIds: 'deterministic',
        runtimeChunk: 'single'
    };

    if (!isDev) {
        config.minimizer = [
            new TerserWebpackPlugin()
        ]
    };

    return config;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',

    devtool: 'source-map',

    entry: [
        path.resolve(__dirname, './src/index.tsx')
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].build.js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@': path.resolve(__dirname, 'src'),
            '@i18n': path.resolve(__dirname, 'i18n'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@stores': path.resolve(__dirname, 'src/stores'),
            '@layouts': path.resolve(__dirname, 'src/layouts')
        }
    },

    optimization: optimization(),

    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        publicPath: '/',
        compress: true,
        hot: true,
        port: 3000,
        quiet: true,
        stats: 'errors-only'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        // new CopyWebpackPlugin({

        // }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript',
                                ["@babel/preset-react", {
                                    "runtime": "automatic"
                                }],
                            ],
                            plugins: [
                                'react-hot-loader/babel',
                                ["babel-plugin-styled-components", {
                                    "pure": true,
                                    "displayName": isDev,
                                    "fileName": isDev,
                                    "minify": isDev,
                                    "transpileTemplateLiterals": isDev
                                }]
                            ],
                        }
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
        ]
    }
};
