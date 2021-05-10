const express = require('express')
const path = require('path')
const router = express.Router()

const rootDir = require('../util/path')
const adminRoute = require('./admin')
const product = require('../routes/admin')
router.get('/',(req, res, next) => {
   const productName = product.product[0].productTitle
  
    res.render('shop', {pName: productName, path: '/', pageTitle: 'Shop'})
    console.log(productName)
   // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
    

})


module.exports = router