const express = require('express')
const dashboardController = require('../controllers/dashboardController')

const router =  express.Router()

router.get('/tp', dashboardController.getTotalPopulation)
router.get('/tc', dashboardController.getTotalContries)
router.get('/tenCP', dashboardController.getTopTenPopulatedCountries)
router.get('/conti-wise-population', dashboardController.getPopulationByContinent)
router.post('/get-higher-pop-given-value', dashboardController.getCountryByGivenPop)



module.exports = router


// http://localhost:5005/dashboard/ 