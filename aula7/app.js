const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send(`
    <form action="/" method="POST">
    nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})

app.post('/',(req,res)=>{
    res.send('penis')
})

app.get('/sobre', (req,res)=>{
    res.send('HTML DA PÁGINMA SOBRE OBRIGADO POR ENTRAR EM CONTATO COM A GENTE')
})

app.listen(3000,()=>{
    console.log('O servidor está iniciando...')
    console.log('servidor iniciado: http://localhost:3000')
})

// nessa aula vou aprender a como usar o nodemon, para não ficar ligando e desligando o servidor o tempo todo
// literalmente, só baixar ele com "npm install nodemon --save-dev" é uma dependencia de desenvolvimento, então deixa ela por lá mesmo.
