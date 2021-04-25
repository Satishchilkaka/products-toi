
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
const products = []
app.get('/add-products',(req,res, next) => {
    res.send('<h1>Add list</h1><form action="/product" method ="POST"><input type ="text" name= "name"><button type="submit">Add product</button></form>')
  
})
app.post('/product', (req, res, next) => {
    console.log(req.body)
products.push(req.body)
    res.redirect('/list')
})

app.get('/list',(req, res, next) => {
    res.send('<h1> List of products</h1>')

})


app.listen(3000) 
