const express = require('express')
const  {
createTask,
getAllTasks,
getTaskByID,
updateStatus,
updateTask,
daleteTask
} = require('../controllers/taskController')

const router = express.Router()

router.post('/create', createTask)
router.get('/getAll', getAllTasks)
router.get('/getTask/:ID', getTaskByID)
router.patch('/updateStatus/:ID', updateStatus)
router.put('/updateTask/:ID', updateTask)
router.delete('/delete/:ID', daleteTask)



// F. /getCompleted 

module.exports = router


// http://localhost:7005/task/create 
// {
//     "title":"Learn MERN",
//     "Description":"ert dfghj tyui bnm",
//     "startDate":"2026-06-10",
//     "endDate":"2026-06-30",

// }