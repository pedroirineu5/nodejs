const fs = require('fs').promises
const path = require('path')

async function lerDiretorio(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)
        console.log(file, stats.isDirectory())
    }
}

lerDiretorio('../')// tem um mini delay
console.log('roda primeiro, porque é mais rápido que a funcao async')