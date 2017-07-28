const path = require('path');

module.exports = {
    entry: "./demo/app",
    output: {
        path: path.resolve(__dirname, './demo/src'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader?',
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            }
        ]
    }
};