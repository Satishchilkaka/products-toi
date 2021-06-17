
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const adminRoute = require('./routes/admin')
const shopRoute =  require('./routes/shop')
const pageNotFound = require('./controllers/error')
const cartRoute = require('./routes/cart')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoute)

app.use(shopRoute)
app.use(cartRoute)
app.use(pageNotFound.notFound)

app.listen(3000) 

