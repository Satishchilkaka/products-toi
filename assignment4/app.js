const express = require('express')
const path = require('path')
const router = express.Router()
const bodyParser = require('body-parser')
const userList = require('./router/users')
const dirRoute = require('./helper/path')
const app = express()

app.use(bodyParser.urlencoded({extended : false}))

app.use('/login', (req, res, next) => {

    res.sendFile(path.join(__dirname, './', 'views', 'index.html'))
  
})


 app.use(userList)
app.listen(3000)