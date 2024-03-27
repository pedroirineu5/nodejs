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
     
        if (stats.isDirectory()){
            lerDiretorio(fileFullPath)   
        }


        //criando expressão regular para evitar que printe os arquivo/diretorios de .git e node_modules

        if(/\.git/g.test(fileFullPath)) continue
        if(/\node_modules/g.test(fileFullPath)) continue
        if(!/\.css$/g.test(fileFullPath)) continue

        console.log(file)
    }
} 
 
lerDiretorio('./')// tem um mini delay
console.log('roda primeiro, porque é mais rápido que a funcao async')
