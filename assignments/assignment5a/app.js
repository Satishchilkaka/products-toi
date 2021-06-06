const express = require('express')
const indexRoute = require('./routes/index')
const pageNotFound = require('./controller/error')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(indexRoute)
app.use(pageNotFound)
app.listen(3000)