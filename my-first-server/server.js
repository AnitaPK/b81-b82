const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 5003

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("We are learning NODE")
})

app.get('/b81b82',(req,res)=>{
    res.status(200).send("This is our server ")
})

app.post('/contact',(req,res)=>{
    console.log(req.body)
    let name = req.body.Name
    name = name.toUpperCase()
    res.status(200).send({msg:"successfully submitted", success:true,user:name})
})

let student

app.post('/student-info',(req,res)=>{
    console.log(req.body)
     student = {
        name:req.body.name,
        course:req.body.course,
        id:req.body.id
    }
    res.status(200).json({msg:"Got student information", success:true})

})
app.get('/getStudent', (req,res)=>{
    res.status(200).send({success:true,stu:student})
})


app.listen(port, ()=>{
    console.log(`Server started on http:locaclhost:${port}`)
})

// http://localhost:5004
// http://localhost:5004/b81b82



