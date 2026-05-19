// console.log("Hello NodeJS") 
// 0.0.0.0 
// 127.0.0.1  localhost
// 255.255.255 

// 8bit 


const http = require("http")
const port = 5003
const server = http.createServer((req,res)=>{
    res.end("Hello from server....")
})

server.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})