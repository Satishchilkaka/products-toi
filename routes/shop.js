const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const adminRoute = require('./admin')
const router = express.Router()
router.get('/',(req, res, next) => {
   
    res.render('shop')
   // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
    

})


module.exports = router