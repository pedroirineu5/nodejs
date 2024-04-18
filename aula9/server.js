const express = require('express')
const app = express()
const routes = require('./routes')

app.use(
    express.urlencoded(
        {extended: true}
    )
)
// literalmente um comando para pedir ao express para usar as minhas rotas criadas
app.use(routes)


app.listen(3000, () => {
    console.log('Starting server at: http://localhost:3000')
})
