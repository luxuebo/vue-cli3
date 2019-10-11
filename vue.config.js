const webpack = require('webpack');
module.exports = {
    publicPath:'./',
    outputDir:'dist',
    assetsDir:'',
    indexPath:'index.html',
    filenameHashing:true,
    pages:undefined,
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:true,
    crossorigin:undefined,
    integrity:false,
    devServer:{
        // host: 'localhost',
        port:8888,
        open: true,
        proxy: {
            '/caipu': {
              target: 'http://apis.juhe.cn/cook/query',
              ws: true,
              pathRewrite:{
                '^/caipu':''
              },
              changeOrigin: true
            },
            '/api': {
              target: 'https://www.haipipbl.com',
              ws: true,
              pathRewrite:{
                '^/api':''
              },
              changeOrigin: true
            },
        }
    },
    parallel:require('os').cpus().length > 1,
    pluginOptions:{

    },
    configureWebpack: {
       plugins: [
          new webpack.ProvidePlugin({

            $:"jquery",

            jQuery:"jquery",

            "windows.jQuery":"jquery"

          })

        ],
        devtool:'source-map'
    }
}