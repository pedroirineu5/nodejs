exports.paginaInicial = (req,res)=>{
    res.send(`
    <form action="/" method="POST">
    nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
}

exports.testandoPost = (req,res)=>{
    res.send(`Opa, mano sou a sua nova rota de POST, vamos brincar!`)
}
