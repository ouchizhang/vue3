// const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)
module.exports = {
    // css: {
    //     // 是否使用css分离插件 ExtractTextPlugin
    //     extract: IS_PROD,
    //     // 开启 CSS source maps?
    //     sourceMap: false,
    //     // css预设器配置项
    //     loaderOptions: {
    //     },
    //     // 启用 CSS modules for all css / pre-processor files.
    //     modules: false,
    // },
    devServer: {
        hot: true,
        open: true,
        port: 8080,
        host: "127.0.0.1"
    }
}