const express = require('express')
const cors = require('cors')
const {conneDB} = require('./config/db')
require('dotenv').config()
const taskRouter = require('./routes/taskRoute')
const userRouter = require('./routes/userRoute')
const assignTaskRouter = require('./routes/assignTaskRouter')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/task', taskRouter)
app.use('/user', userRouter)
app.use('/assign', assignTaskRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))