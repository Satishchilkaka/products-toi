const express = require('express')
const path = require('path')
const app = express()
const rootDir = require('./helper/path')
const usersRoute = require('./route/users')
const bodyParser = require('body-parser')
let user = []
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')
app.get('/', (req, res, next) => {

    res.render('index',{
        pageTitle: 'add user',
        path : '/'
    })
   // res.status(200).sendFile(path.join(rootDir, 'views', 'index.html'))
}) 
app.use(usersRoute)




app.listen(3000)

