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
        devtool: isDev ? 'inline-source-map' : 'source-map',
        entry: {
            krazyKatPeekin: path.join(__dirname, 'src/KrazyKatPeekin.tsx')
        },
        devServer: {
            clientLogLevel: 'silent',
            contentBase: './public',
            hot: true,
            port: 3000,
            publicPath: '/',
            watchContentBase: true
        },
        watch: env.watch,
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'build')
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        {
                            loader: require.resolve('ts-loader')
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
