const express = require('express')
const app = express()

const loginRoute = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(loginRoute)
app.listen(3000)