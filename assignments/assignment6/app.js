const express = require('express')
const app = express()
const indexRoute = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(indexRoute)
app.listen(3000)

