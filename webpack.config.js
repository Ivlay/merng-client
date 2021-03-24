const path                      = require('path');
const webpack                   = require('webpack');
const HTMLWebpackPlugin         = require('html-webpack-plugin');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');
const TerserWebpackPlugin       = require('terser-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const CopyWebpackPlugin      = require('copy-webpack-plugin');
// TODO: copy favicons ??

const isDev = process.env.NODE_ENV === 'development';

const splitChunksConfigs = {
    dev: {
        cacheGroups: {
            default : false,
            vendors : false,
        }
    },
    prod: {
        chunks      : 'all',
        cacheGroups : {
            framework: {
                chunks   : 'all',
                name     : 'framework',
                test     : /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
                priority : 40,
                enforce  : true,
            },
            apollo: {
                name : 'apollo',
                test : /[\\/]node_modules[\\/](@apollo)[\\/]/
            },
            graphql: {
                name : 'graphql',
                test : /[\\/]node_modules[\\/](graphql)[\\/]/
            },
            styled: {
                name : 'styledvendor',
                test : /[\\/]node_modules[\\/](styled-components)[\\/]/,
            }
        },
        maxInitialRequests : 25,
        minSize            : 20000
    }
};

const optimization = () => {
    const config = {
        minimize        : !isDev,
        realContentHash : false,
        runtimeChunk    : isDev ? { name: 'webpack' } : 'single',
        moduleIds       : 'deterministic',
        splitChunks     : isDev ? splitChunksConfigs.dev : splitChunksConfigs.prod
    };

    if (!isDev) {
        config.minimizer = [
            new TerserWebpackPlugin({
                terserOptions: {
                    sourceMap : true,
                    compress  : true
                }
            })
        ];
    }

    return config;
};

module.exports = {
    context : path.resolve(__dirname, 'src'),
    mode    : 'development',

    devtool: 'source-map',

    entry: [
        path.resolve(__dirname, './src/index.tsx')
    ],

    output: {
        path       : path.resolve(__dirname, 'dist'),
        filename   : '[name].[contenthash].js',
        publicPath : '/',
    },

    stats: { chunks: true, chunkRelations: true },

    resolve: {
        extensions : ['.ts', '.tsx', '.js', '.json'],
        alias      : {
            '@'           : path.resolve(__dirname, 'src'),
            '@i18n'       : path.resolve(__dirname, 'i18n'),
            '@assets'     : path.resolve(__dirname, 'public/static/assets'),
            '@hooks'      : path.resolve(__dirname, 'src/hooks'),
            '@graphql'    : path.resolve(__dirname, 'src/graphql'),
            '@styled'     : path.resolve(__dirname, 'src/styled'),
            '@pages'      : path.resolve(__dirname, 'src/pages'),
            '@constants'  : path.resolve(__dirname, 'src/constants'),
            '@context'    : path.resolve(__dirname, 'src/context'),
            '@components' : path.resolve(__dirname, 'src/components'),
            '@stores'     : path.resolve(__dirname, 'src/stores'),
            '@layouts'    : path.resolve(__dirname, 'src/layouts')
        }
    },

    optimization: optimization(),

    devServer: {
        historyApiFallback : true,
        contentBase        : './dist',
        publicPath         : '/',
        compress           : true,
        hot                : true,
        port               : 3000,
        quiet              : false,
        noInfo             : isDev,
        stats              : { colors: true }
    },

    performance: false,

    plugins: [
        new HTMLWebpackPlugin({
            template : path.resolve(__dirname, './public/index.html'),
            filename : 'index.html',
            minify   : {
                collapseWhitespace : !isDev,
                removeComments     : !isDev,
            }
        }),
        // new CopyWebpackPlugin({

        // }),
        new CleanWebpackPlugin(),
        isDev && new webpack.HotModuleReplacementPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),

    module: {
        rules: [
            {
                test    : /\.(ts|tsx)$/,
                exclude : /node_modules/,
                use     : [
                    {
                        loader  : 'babel-loader',
                        options : {
                            babelrc : false,
                            presets : [
                                '@babel/preset-env',
                                '@babel/preset-typescript',
                                ['@babel/preset-react', {
                                    'runtime': 'automatic'
                                }],
                            ],
                            plugins: [
                                ['babel-plugin-styled-components', {
                                    'pure'                      : true,
                                    'displayName'               : isDev,
                                    'fileName'                  : isDev,
                                    'minify'                    : !isDev,
                                    'transpileTemplateLiterals' : !isDev
                                }],
                                // eslint-disable-next-line global-require
                                isDev && require('react-refresh/babel'),
                            ].filter(Boolean),
                        }
                    }
                ]
            },
            {
                test    : /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                exclude : /node_modules/,
                type    : 'asset/resource',
            },
        ]
    }
};
