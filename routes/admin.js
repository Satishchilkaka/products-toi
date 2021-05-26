const express = require('express')
const router = express.Router();

const addProducts = require('../controllers/products')

router.get('/add-product',addProducts.addProductsToShop)

router.post('/add-product', addProducts.getProducts)


module.exports = router
