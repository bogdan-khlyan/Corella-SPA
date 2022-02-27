const express = require('express')
const {createProxyMiddleware} = require('http-proxy-middleware')
const app = express()


app.use('/api', createProxyMiddleware({target: 'https://corella.website', changeOrigin: true}))
app.use('/', createProxyMiddleware({target: 'http://localhost:8081', changeOrigin: true}))
// app.use('/image', createProxyMiddleware({target: 'https://dev.namisushi.dn.ua', changeOrigin: true}))


app.listen(8080, () => void console.log('start'))