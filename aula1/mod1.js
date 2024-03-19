// const nome = 'Pedro'
// const sobrenome = 'Henrique'
// const idade = 19

// const falaNome =  () => `Olá ${nome} ${sobrenome} e tenho ${idade} anos de idade`



// // tipos de exportação
// module.exports.name = nome
// exports.pairname = sobrenome
// exports.falaNome = falaNome
// exports.idade = idade
// this.qualquerCoisa = 'Qualquer coisa'

class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

exports.Pessoa = Pessoa