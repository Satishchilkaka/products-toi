const express = require('express')
const app = express()
const indexRoute = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.get('/', (req, res, next) => {
    res.status(200).render('index', {
        pageTitle: 'index',
        path: '/index'
    })
 })
app.use(indexRoute)
app.listen(3000)

