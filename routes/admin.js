const path = require('path');

const express = require('express');

const adminView = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminView.getAddProductPage);
// Get Add product 

router.post('/add-product', adminView.postProduct);
// Add a product

router.get('/products', adminView.getAddedProducts);
// Display added product

module.exports = router;
