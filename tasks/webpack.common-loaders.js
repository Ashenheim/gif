module.exports = () => [
    { test: /.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
    { test: /.css$/, use: ['style-loader', 'css-loader'] },
];
