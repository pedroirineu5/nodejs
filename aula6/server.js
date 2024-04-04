// importando o express direto da pasta node_modules
const express = require('express')
const app = express()


// criando as rotas do sistema, com o método de requisição(REQUEST) e resposta(RESPONSE)
app.get('/', (req,res)=>{
    res.send('Hello world!') 
})



// isso aqui é para não ter problemas com a porta na hora de rodar o servidor
app.listen(3000,()=>{
    console.log('Server started at port 3000')
    console.log('Your server is ready: http://localhost:3000') // colocando a url do servidor e ainda por cima dizendo qual porta está sendo ocupada
})

// para rodar o servidor basta colocar:
// node serve.js (tudo isso no terminal e no diretorio da aula6)
