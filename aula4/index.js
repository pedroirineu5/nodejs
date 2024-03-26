const fs = require('fs').promises
const path = require('path')

async function lerDiretorio(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files)
}

function walk(files){
    for(let file of files){
        console.log(file)
    }
}

lerDiretorio()// tem um mini delay
console.log('fasdfdas')