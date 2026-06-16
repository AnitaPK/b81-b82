const express = require('express')
const cors = require('cors')
const {conneDB} = require('./config/db')
require('dotenv').config()
const taskRouter = require('./routes/taskRoute')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/task', taskRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))