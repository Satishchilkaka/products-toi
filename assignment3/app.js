const express = require('express')
const path = require('path')
const rootDir = require('./until/path')
const userRoute = require('./routes/users')
const shopRoute = require('./routes/shop')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(shopRoute)

app.use(userRoute)
app.listen(3000)