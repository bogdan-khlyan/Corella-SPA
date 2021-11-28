const path = require('path')
const defaultSettings = require('./src/settings')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'Corella'

module.exports = {
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: '8081',
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
    },
}
