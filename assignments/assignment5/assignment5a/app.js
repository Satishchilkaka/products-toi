const express = require('express')
const app = express()
const indexRoute = require('./routes/index')
const usersRoute = require('./routes/users')
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
app.use(indexRoute)

app.use(usersRoute)

app.use('', (req, res, next) => {
    res.status(404).render('404', {
        path: '/404',
        pageTitle: 'page not found'
    })
})
app.listen(3000)