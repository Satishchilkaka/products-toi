
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const adminRoute = require('./routes/admin')
const shopRoute =  require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use('/admin',adminRoute)
// When both method are having a common path we can apply a filters 
// EX. adminRoute are having different methods but we can apply filter 
app.use(shopRoute)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'pageNot-found.html'))

})

app.listen(3000) 
