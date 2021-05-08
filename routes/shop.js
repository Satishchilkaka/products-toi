const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const adminRoute = require('./admin')
const router = express.Router()
router.get('/',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
    console.log(adminRoute.product)

})


module.exports = router