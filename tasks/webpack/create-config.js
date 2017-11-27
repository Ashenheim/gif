const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const createConfig = () => {
    const rootDir = path.resolve(__dirname, '../../');

    const rules = [
        { test: /.tsx?$/, use: ['ts-loader'] },
    ];

    return {
        context: rootDir,
        entry: './source',
        output: {
            path: path.resolve(rootDir, './build'),
            filename: '[name].bundle.js',
        },
        module: { rules },
        resolve: {
            extensions: ['.tsx', '.ts'],
        },
        plugins: [
            new HtmlWebpackPlugin(),
        ]
    };
};

module.exports = createConfig;
