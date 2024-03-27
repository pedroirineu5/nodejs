const fs = require('fs').promises

async function listDirectories(rootDir){
    rootDir = rootDir || fs.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files)
}


listDirectories()