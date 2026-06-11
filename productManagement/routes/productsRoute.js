const express = require('express')
const productController = require('../controllers/productsController')

const router = express.Router()



router.get("/getAllProducts", productController.getAllProducts)

router.get('/getProductByID/:ID', productController.getProductByID) 
// http://localhost:5004/product/getProductByID/
router.post('/createProduct', productController.createPtroduct)
router.delete('/deleteById/:ID', productController.deleteById)  

router.patch('/updateProdcut/:ID', productController.updateProdcut)

router.get('/search/category/', productController.categorySearch)  
router.get('/search/price/', productController.searchByPrice)


module.exports = router

// http://localhost:5004/search/?category=Electronic
// http://localhost:5004/search/?minPrice=100&maxPrice=2000     req.query.minPrice req.query.maxPrice