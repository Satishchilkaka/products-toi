const express = require('express')
const app = express()

const loginRoute = require('./routes/index')
const userProfileRoute = require('./routes/user-profile')
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(loginRoute)
app.use(userProfileRoute)
app.listen(3000)