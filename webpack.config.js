module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loaders: ['eslint'],
        }],
        loader: {
            test: /\.js$/,
            loaders: ['babel']
        }
    }
};
