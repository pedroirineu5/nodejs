const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Agora vai edition, consegui configurar junto com o nodemon o projeto')
})


app.listen(3000, ()=>{
    console.log('Starting server at: http://localhost:3000')
})