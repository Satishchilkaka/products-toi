const express = require('express')
const path = require('path')
const router = express.Router()
const userList = require('./router/users')
const app = express()


app.use('/', (req, res, next) => {

   res.sendFile(path.join(__dirname, './', 'views', 'index.html'))
  
})
app.use(userList)
app.listen(3000)