const path = require('path');

module.exports = {
    entry: './src/index.ts',
    target: 'node',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                use: 'ts-loader', 
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};
