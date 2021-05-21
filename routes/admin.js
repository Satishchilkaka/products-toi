const express = require('express')
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path')

const product = []

router.get('/add-product',(req,res, next) => {
   // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))

 res.render('add-product', {
   pageTitle: 'Add products',
   path: '/admin/add-product',
   activeAddProduct: true,
   productCSS: true,
   formsCSS: true
  })
})

router.post('/add-product', (req, res, next) => {
  const AdminAddProduct = JSON.parse(JSON.stringify(req.body))
    
    product.push({productTitle: AdminAddProduct.title})
    res.redirect('/')
   // console.log(product)
})


exports.routes = router;
exports.product= product