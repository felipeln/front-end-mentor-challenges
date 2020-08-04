const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')


const server = express()
server.use(express.static('./'))
nunjucks.configure('./',{
    autoescape: true,
    noCache: true,
    express: server
})

server.use(routes)

server.set('view engine','njk')

// ligar o servidor
const porta = process.env.PORT || 8080;
server.listen(porta)