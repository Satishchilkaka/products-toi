const express = require('express')
const app = express()

const userRoute = require('./routes/index')

app.set('view engine', 'ejs')

app.set('views', 'views')

app.use(userRoute)
app.listen(3000)