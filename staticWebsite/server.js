const express = require('express')
require('dotenv').config()

const app = express()


const port = process.env.PORT || 3000

app.use(express.static('public'))

// app.get('/',(req,res)=>{
//     res.send("i am server")
// })


app.listen(port,()=>{
    console.log(`server started on http://loaclhost:${port}`)
})