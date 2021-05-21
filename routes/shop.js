const express = require('express')
const path = require('path')
const router = express.Router()

const rootDir = require('../util/path')
const adminRoute = require('./admin')
const product = require('../routes/admin')
router.get('/',(req, res, next) => {
   const productName = product.product
  // const productName = product.product[0].productTitle
    res.render('shop', {productTitle: product.product[0], path: '/', pageTitle: 'shop', hasProducts: product.product.length > 0})
    console.log(productName)
   // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
   // console.log(product.product.productTitle)

})


module.exports = router