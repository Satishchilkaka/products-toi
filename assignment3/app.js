const express = require('express')
const path = require('path')
const rootDir = require('./until/path')
const userRoute = require('./routes/users')
const shopRoute = require('./routes/shop')
const app = express()

app.use(shopRoute)

app.use(userRoute)
app.listen(3000)