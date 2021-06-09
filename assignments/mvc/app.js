const express = require ('express')
const app = express()

const loginRoute = require('./routes/login')
const userRoute = require('./routes/userProfile')

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(loginRoute)
app.use(userRoute)
app.listen(3000)