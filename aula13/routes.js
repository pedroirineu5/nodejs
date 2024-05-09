const express = require('express')
const route = express.Router()
const home = require('./src/controllers/homeController')
const testes = require('./src/controllers/paginaTeste')

function meuMiddelware(req, res, next){
    req.session =  {nome: 'Luiz' , senha: '123456'}
    console.log()
    console.log('Passei no middleware')
    console.log()
    next()
}

// rotas da página home
route.get('/', meuMiddelware, home.paginaInicial, (req,res,next)=>
    {
        console.log('AGORA EU FUI RODADO PQ COLOCARAM O NEXT')
        console.log(`No meio das requisições(middleware), salvei as informações do usuário olha aqui: ${req.session.nome} e ${req.session.senha}`)
    })
route.post('/',home.testandoPost)

// rotas da página /testes
route.get('/testes', testes.paginaTeste)
route.post('/testes', testes.testePost)



module.exports = route
