exports.paginaInicial = (req,res)=>{
    res.render('index')
}

exports.testandoPost = (req,res)=>{
    res.send(`Opa, mano sou a sua nova rota de POST, vamos brincar!`)
}
