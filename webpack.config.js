const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test';
const isProd = ENV === 'build';

console.log(isProd ? 'Production build...' : 'Debug build...');

// Webpack Config
module.exports = function makeWebpackConfig() {

    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    /**
     * Devtool
     * Reference: http://webpack.github.io/docs/configuration.html#devtool
     * Type of sourcemap to use per build type
     */
    config.devtool = 'source-map';

    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     */
    config.entry = isTest ? {} : {
        'demo':         './demo/main.ts',
        'src':          './src/index.ts'
    };

    /**
     * Output
     * Reference: http://webpack.github.io/docs/configuration.html#output
     */
    config.output = {
        path: path.resolve(__dirname, './demo/build'),
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].js.map',
        chunkFilename: '[name].[chunkhash].chuck.js'
    };

    /**
     * Resolve
     * Reference: http://webpack.github.io/docs/configuration.html#resolve
     */
    config.resolve = {
        // only discover files that have those extensions
        extensions: ['.ts', '.js']
    };

    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     * This handles most of the magic responsible for converting modules
     */
    config.module = {
        rules: [
            // .ts files for TypeScript
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader',
                exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            }
        ]
    };

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [

        // Define env variables to help with builds
        // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        new webpack.DefinePlugin({
            // Environment helpers
            'process.env': {
                ENV: JSON.stringify(ENV)
            }
        }),

        new HtmlWebpackPlugin ({
            inject: true,
            template: './demo/index.html'
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true,
            options: {
                /**
                 * Apply the tslint loader as pre/postLoader
                 * Reference: https://github.com/wbuchwalter/tslint-loader
                 */
                tslint: {
                    emitErrors: false,
                    failOnHint: false
                }

            }
        })
    ];

    config.plugins.push(
        // Generate common chunks if necessary
        // Reference: https://webpack.github.io/docs/code-splitting.html
        // Reference: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        new CommonsChunkPlugin({
            name: [ 'demo', 'src' ],
            minChunks: Infinity
        })
    );

    // Add build specific plugins
    if (isProd) {
        config.plugins.push(
            // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
            // Only emit files when there are no errors
            new webpack.NoErrorsPlugin(),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            // Minify all javascript, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin({
                beautify: false, //prod
                output: {
                    comments: false
                }, //prod
                mangle: {
                    screw_ie8: true
                }, //prod
                compress: {
                    screw_ie8: true,
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                    negate_iife: false // we need this for lazy v8
                }
            })
        );
    }

    return config;
}();
