const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dashboardRoutes = require('./routes/dashboradRoute')
const db = require('./config/db')

const app = express()

const port = process.env.PORT || 7003

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Server running")
})

app.use('/dashboard' , dashboardRoutes)

app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`)
})