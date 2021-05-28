const express = require('express')
const indexRoute = require('./routes/index')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(indexRoute)
app.listen(3001)