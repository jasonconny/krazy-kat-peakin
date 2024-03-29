const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = async (env={}) => {
    console.log(env);

    const isDev = env.development;
    const isProd = env.production;

    const htmlWebpackPluginOptions = Object.assign(
        {},
        {
            chunks: ['krazyKatPeakin'],
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
        mode: isDev ? 'development' : 'production',
        bail: isProd,
        devtool: isDev ? 'inline-source-map' : 'source-map',
        entry: {
            krazyKatPeakin: path.join(__dirname, 'src/KrazyKatPeakin.tsx')
        },
        devServer: {
            client: {
                logging: isDev ? 'info' : 'silent',
                progress: isDev
            },
            historyApiFallback: {
                disableDotRule: true
            },
            hot: true,
            port: 3000,
        },
        target: 'web',
        output: {
            assetModuleFilename: 'static/media/[name].[hash:8].[ext]',
            chunkFilename: 'static/js/[name].chunk.js',
            filename: '[name].js',
            path: path.resolve(__dirname, 'build'),
            publicPath: '/'
        },
        resolve: {
            extensions: [
                '.ts',
                '.tsx',
                '.js',
                '.json',
                '.jsx',
            ],
            modules:  [path.resolve(__dirname, './src'), 'node_modules']
        },
        module: {
            strictExportPresence: true,
            rules: [
                {
                    oneOf: [
                        // Static Files
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.woff?2$/],
                            type: 'asset'
                        },
                        // Transpile TypeScript
                        {
                            test: /\.(ts|tsx)$/,
                            include: path.resolve(__dirname, 'src'),
                            loader: require.resolve('babel-loader')
                        },
                        // bundle module specific SCSS
                        {
                            test: /\.scss/,
                            use: [
                                {
                                    loader: require.resolve('style-loader')
                                },
                                {
                                    loader: require.resolve('@teamsupercell/typings-for-css-modules-loader')
                                },
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 3,
                                        sourceMap: true,
                                        modules: {
                                            exportLocalsConvention: 'camelCase',
                                            mode: 'local',
                                            localIdentName: '[name]__[local]--[hash:base64:5]',
                                            localIdentHashSalt: 'kkp',
                                        }
                                    }
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        sourceMap: true,
                                        postcssOptions: {
                                            plugins: [
                                                [postcssPresetEnv]
                                            ]
                                        }
                                    }
                                },
                                {
                                    loader: require.resolve('resolve-url-loader'),
                                    options: {
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: require.resolve('sass-loader'),
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        plugins: [
            new ESLintPlugin({
                eslintPath: require.resolve('eslint'),
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                quiet: true
            }),
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false
            }),
            new HtmlWebpackPlugin(htmlWebpackPluginOptions),
            new CopyWebpackPlugin({
                patterns: [
                    {from: 'public', to: 'build'}
                ]
            }),
            isDev && new CaseSensitivePathsPlugin(),
            new ForkTsCheckerWebpackPlugin({
                async: false,
                typescript: {
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                    diagnosticOptions: {
                        syntactic: true
                    }
                }
            })
        ].filter(Boolean)
    }
};
