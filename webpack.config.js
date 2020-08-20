const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = async (env={}) => {
    console.log(env);

    const isDev = env.development;
    const isProd = env.production;

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
        mode: isDev ? 'development' : 'production',
        bail: isProd,
        devtool: isDev ? 'inline-source-map' : 'source-map',
        entry: {
            krazyKatPeekin: path.join(__dirname, 'src/KrazyKatPeekin.tsx')
        },
        devServer: {
            clientLogLevel: 'silent',
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: {
                disableDotRule: true
            },
            hot: true,
            port: 3000,
            publicPath: '/',
            watchContentBase: true
        },
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
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false
            }),
            new HtmlWebpackPlugin(htmlWebpackPluginOptions)
        ].filter(Boolean)
    }
};
