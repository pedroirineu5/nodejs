const express = require('express')
const app = express()
const routes = require('./routes')

app.use(
    express.urlencoded(
        {extended: true}
    )
)
// para rodar o conteúdo estático
app.use(express.static('./public'))


// para rodas as views
app.set('views', './src/views')
// rodar um html com aqueles if's da vida
app.set('view engine', 'ejs')


// literalmente um comando para pedir ao express para usar as minhas rotas criadas
app.use(routes)

//mensagem de inicio
app.listen(3000, () => {
    console.log('Starting server at: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
