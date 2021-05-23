const express = require('express')

const router = express.Router()


const getProduct = require('../controllers/products')

router.get('/', getProduct.displayProductInStore)


module.exports = router