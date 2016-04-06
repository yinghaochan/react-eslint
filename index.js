module.exports = {
    extends: 'airbnb',
    plugins: [
        'react',
    ],
    env: {
        es6     : true,
        browser : true,
        commonjs: true,
    },
    rules: require('./rules.js'),
}
