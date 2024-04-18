exports.paginaTeste = (req,res)=>{
   res.send(`
   <form action="/" method="POST">
   nome: <input type="text" name="nome">
   <button>Enviar</button>
   </form>
   `)
}

exports.testePost = (req,res)=>{
    res.send('POST CONCLUÍDO')
}