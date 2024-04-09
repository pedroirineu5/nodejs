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
    res.send('penis') // res.send é usado para mostrar o 
})


//              v quando você está se referindo a um parametro opcional se usa :
app.get('/tests/:userid?/:parametroopcional?',(req,res) => {
    console.log(req.params) // isso vai logar um objeto vazio, ou seja, conseguimos fazer várias besteirinhas.
    res.send(req.params) // aqui está printando no site o ID do usuário que estava na URL.
    // res.send() // mostrando o parametro adicional e opcional no site
})

app.listen(3000, () => {
    console.log('Starting server at: http://localhost:3000')
})
