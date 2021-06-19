const path = require('path');

const express = require('express');

const shopView = require('../controllers/shop');

const router = express.Router();

router.get('/', shopView.getIndex);

router.get('/products', shopView.getProducts);

router.get('/cart', shopView.getCartView);

router.get('/orders', shopView.getOrdersView)

module.exports = router;
