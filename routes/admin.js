const express = require('express')
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path')
router.get('/add-product',(req,res, next) => {
  // res.send(('<form action="/admin/add-product" method="POST"><input type= "text" name="message"><button type= "submit">Send</button>'))
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = router