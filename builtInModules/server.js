const http = require('http')
const os = require('os')
const path = require('path')
const fs = require('fs')
const colors = require('colors')


const server = http.createServer((req,res)=>{
    res.end("Thi is my first server")
})
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())

console.log(__dirname)

fs.writeFileSync('message.txt', 'We are learning Node.')

const fileData = fs.readFileSync('message.txt', 'utf-8')
console.log(fileData.red

)

const filemngrpath = path.join(__dirname, 'fileManager')
console.log(filemngrpath,"filemngrpath")
const fileReactPath = path.join(filemngrpath, 'message.txt')
fs.writeFileSync(fileReactPath, "Learn HTML CSS JS")
// fs.mkdirSync(filemngrpath, {recursive:true})

// /Users/anitakhamitkar/WisdomSprouts/b81-b82/builtInModules/fileManager/folderdata

// fs.writeFileSync('./fileManager/message.txt', "Learned React")
const fileReact = fs.readFileSync('./fileManager/message.txt', 'utf-8')
console.log(colors.underline.bgRed(fileReact))


server.listen(5003,()=>{
    console.log("server started...")
})