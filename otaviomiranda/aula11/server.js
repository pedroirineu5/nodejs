const express = require('express')
const app = express()
const routes = require('./routes')

app.use(
    express.urlencoded(
        {extended: true}
    )
)
// literalmente um comando para pedir ao express para usar as minhas rotas criadas

app.set('views', './src/views')
app.set('view engine', 'ejs')


app.use(routes)

app.listen(3000, () => {
    console.log('Starting server at: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
