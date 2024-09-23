const express = require('express')
const route = express.Router()
const home = require('./src/controllers/homeController')
const testes = require('./src/controllers/paginaTeste')


// rotas da página home
route.get('/', home.paginaInicial)
route.post('/', home.testandoPost)

// rotas da página /testes
route.get('/testes', testes.paginaTeste)
route.post('/testes', testes.testePost)

module.exports = route
