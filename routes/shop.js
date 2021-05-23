const express = require('express')
const path = require('path')
const router = express.Router()

const rootDir = require('../util/path')
const adminRoute = require('./admin')
const product = require('../routes/admin')
router.get('/', (req, res, next) => {

   res.render('shop', {
      productName: product.product, 
      path: '/', 
      pageTitle: 'shop', 
      hasProducts: product.product.length > 0,
      activeShop: true,
      productCSS: true

   })
})

   // const productName = product.product[0].productTitle
   // console.log(productName)
   // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
   // console.log(product.product.productTitle)




module.exports = router