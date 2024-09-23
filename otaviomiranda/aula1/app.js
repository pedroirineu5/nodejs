// const mod1 = require('./mod1')
// importou o do module.exports
const axios = require('axios')
const { Pessoa } = require('./mod1')
// via destructuring 

const p1 = new Pessoa('pedro','henrique')
console.log(p1)

axios('https://otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))
