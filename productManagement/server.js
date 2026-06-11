const express = require('express')
const productRouter = require('./routes/productsRoute')

const app = express()

const port = 5004

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Ye hamara server hai.....")
})

app.use('/product', productRouter)
// http://localhost:5004/product/getAllProducts

app.listen(port,()=>{
    console.log("Server running ...")
})