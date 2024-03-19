// const mod1 = require('./mod1')
// importou o do module.exports

const { Pessoa } = require('./mod1')
// via destructuring 

const p1 = new Pessoa('pedro','henrique')
console.log(p1)
