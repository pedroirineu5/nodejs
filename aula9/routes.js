const express = require('express')
const route = express.Router()
const controllers = require('./controllers/homeControllers')


route.get('/',(req,res)=>{controllers.paginaInicial})
// route.get('/testes',(req,res)=>{controllers.paginaTeste})


module.exports = route