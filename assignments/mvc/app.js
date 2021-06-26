const express = require('express')
const app = express()
const path = require('path')

const userRoute = require('./routes/index')

app.set('view engine', 'ejs')

app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoute)
app.listen(3000)