const express = require('express')
const router = express.Router();

const getProductsList = require('../controllers/products')

router.get('/add-product',getProductsList.addProductsToShop)

router.post('/add-product', getProductsList.getProducts)


module.exports = router
