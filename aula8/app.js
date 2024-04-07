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

app.post('/',(req,res) => {
    res.send('formulário enviado')
})

app.get('/tests',(req,res) => {
    console.log(req.params)
    res.send('oi')
})

app.listen(3000, () => {
    console.log('Starting server at: http://localhost:3000')
})
