const imbac = require('imba/dist/compiler.js')
const fs = require('fs')
const path = require('path')

module.exports = (on) => {
  on('file:preprocessor', async (file) => {
    var source = fs.readFileSync(file.filePath, { encoding: 'utf-8' })
    var { js, _ } = imbac.compile(source, { evaling: true, filename: file.filePath })
    fs.mkdirSync(path.dirname(file.outputPath), { recursive: true })
    fs.writeFileSync(file.outputPath, js)
    return file.outputPath
  })
}