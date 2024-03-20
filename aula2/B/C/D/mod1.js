module.exports = class Animal{
    constructor(nome){
        this.nome = nome
    }

    latir(){
        return `${this.nome} está latindo`
    }
}
