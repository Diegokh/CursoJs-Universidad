const path = require('path');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, 'modulos.ts'),
    output: {
        filename: 'modulos.js',
        path: path.resolve(__dirname),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        static: path.join(__dirname),
        port: 8080,
        open: true,
    },
};
