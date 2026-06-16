const { sequelize } = require("../config/db")
const  Task = require("../models/taskModel")


async function createTask(req,res){
    console.log(req.body)
    const {title,description,startDate,endDate} = req.body
    try {
        if(!title || !description || !startDate || !endDate){
            return res.status(400).send({msg:"All fields required", success:false})
        }
        if(new Date(endDate) < new Date(startDate)){
            return res.status(400).send({msg:"End date should be greater that start date", success:false})
        }
        const newTask = await Task.create({title,description,startDate,endDate})
        console.log(newTask)
        res.status(200).send({msg:"Task created successfully", success:true})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Server error",success:false})
    }
}

async function getAllTasks(req,res){
    try {
        const tasks = await Task.findAll()
        res.status(200).send({tasks:tasks,success:true})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Server error"})
    }
}

async function getTaskByID(req,res){
    const ID = req.params.ID
    try {
        const task = await Task.findByPk(ID)
        if(!task){
            return res
            .status(400).send({msg:"task not found", success:false})
        }
        res.status(200).send({task:task,success:true})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Server error"})
    }
}

async function updateStatus(req,res){
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Server error"})
    }
}
async function updateTask(req,res){
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Server error"})
    }
}
async function daleteTask(req,res){
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Server error"})
    }
}


module.exports = {
createTask,
getAllTasks,
getTaskByID,
updateStatus,
updateTask,
daleteTask
}