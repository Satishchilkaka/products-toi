const express = require('express')
const router = express.Router();

router.get('/add-products',(req,res, next) => {
    res.status(200).send('<h1>Add list</h1><form action="/product" method ="POST"><input type ="text" name= "name"><button type="submit">Add product</button></form>')
  
})

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

router.use((req, res, next) => {
    res.status(404).send('<h1> Page not found</h1>')
})

module.exports = router