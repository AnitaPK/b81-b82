const express = require('express')
const empController = require('../controllers/empController')

const router = express.Router()

router.get('/getAllEmp', empController.getAllEmp)

router.post('/createEmp',empController.createEmp )

router.delete('/delEmp/:ID', empController.deleteEmp)

router.patch('/updateEmp/:ID' ,empController.updateEmp)

// http://localhost:5003/emp/getAllEmp
// http://localhost:5003/emp/createEmp
module.exports = router