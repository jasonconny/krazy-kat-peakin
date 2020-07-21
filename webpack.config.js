const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const nodeEnv = process.env.NODE_ENV;

module.exports = (env={}) => {
    console.log(`target env: ${env.target}`);
    console.log(`nodeEnv: ${nodeEnv}`);

    const isLocal = env.target === 'local';
    const isProd = env.target === 'prod';

    const htmlWebpackPluginOptions = Object.assign(
        {},
        {
            chunks: ['krazyKatPeekin'],
            inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
        },
        isProd ? {
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        } : undefined
    );

    return {
        mode: nodeEnv,
        entry: {
            krazyKatPeekin: path.join(__dirname, 'src/KrazyKatPeekin.tsx')
        },
        devServer: {
            clientLogLevel: 'none',
            contentBase:  './public',
            watchContentBase: true,
            compress: true,
            historyApiFallback: {
                disableDotRule: true
            },
            hot: true,
            port: 3000,
            publicPath: '/'
        },
        devtool: isLocal ? 'inline-source-map' : 'source-map',
        watch: env.watch,
        watchOptions: {
            aggregateTimeout: 500,
            ignored: [
                'build',
                'node_modules'
            ],
            poll: 1000
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
            chunkFilename: 'static/js/[name].chunk.js',
            publicPath: '/',
        },
        optimization: {
            minimize: isProd,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 8
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2
                        },
                        mangle: false,
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true
                        }
                    },
                    parallel: true,
                    cache: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        parser: safePostCssParser,
                        map: {
                            inline: false,
                            annotation: true
                        }
                    }
                })
            ],
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: 1,
                name: false
            },
            runtimeChunk: {
                name: entrypoint => entrypoint.name
            }
        },
        resolve: {
            extensions: [
                '.mjs',
                '.web.ts',
                '.ts',
                '.web.tsx',
                '.tsx',
                '.web.js',
                '.js',
                '.json',
                '.web.jsx',
                '.jsx',
            ]
        },
        module: {
            strictExportPresence: true,
            rules: [
                {
                    oneOf: [
                        // Transpile TypeScript
                        {
                            test: /\.(ts|tsx)$/,
                            include: path.resolve(__dirname, 'src'),
                            loader: require.resolve('babel-loader')
                        },
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(htmlWebpackPluginOptions),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'public'),
                        to: path.resolve(__dirname, 'build')
                    }
                ]
            }),
            new ForkTsCheckerWebpackPlugin()
        ].filter(Boolean)
    }
};
