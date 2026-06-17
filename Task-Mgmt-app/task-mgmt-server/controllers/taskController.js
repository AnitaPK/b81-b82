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
        const ID = req.params.ID
        const status = req.body.status
    try {
        statuArr = ["Pending", "Inprogress", "Completed"]
        if(!statuArr.includes(status)){
            return res.status(400).send({msg:"Data not found",success:false})
        }
        const taskForStatusUpdate = await Task.findByPk(ID)
        // console.log(taskForStatusUpdate)
        if(!taskForStatusUpdate){
            return res.status(400).send({msg:"Task not found", success:false})
        }

        await taskForStatusUpdate.update({status:status})
        res.status(200).send({msg:"Task status updated successfully"})


    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Server error"})
    }
}
async function updateTask(req,res){
    const ID = req.params.ID

    try {
         const taskForUpdate = await Task.findByPk(ID)
        // console.log(taskForUpdate)
        if(!taskForUpdate){
            return res.status(400).send({msg:"Task not found", success:false})
        }
            // add code for date validation 

        await taskForUpdate.update({
            title:req.body.title || taskForUpdate.title,
            description:req.body.description || taskForUpdate.description,
            startDate:req.body.startDate || taskForUpdate.startDate,
            endDate:req.body.endDate || taskForUpdate.endDate
        })
        res.status(200).send({msg:"Task updated successfully", success:true})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Server error"})
    }
}
async function daleteTask(req,res){
    const ID = req.params.ID
    try {
        const taskForDelete = await Task.findByPk(ID)
        console.log(taskForDelete)
        if(!taskForDelete){
            return res.status(400).send({msg:"Task not found", success:false})
        }
        await taskForDelete.destroy()
        // Task.destroy({where:{id:ID}})
        res.status(200).send({msg:"Task deleted successfully"})
        
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