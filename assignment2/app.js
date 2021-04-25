const express = require('express')

const app = express();
/* app.use((req, res, next) => {
    console.log('Middle ware function one')
    next()
})
app.use((req, res, next) => {
    console.log('Middle ware function two')
}) */

 app.use('/users', (req, res, next) => {
    console.log('Test one')
    res.send('<h1> Hello express </h1><ul><li> Test user 1</li></ul><ul><li>Test user 2</ul></li><ul><li>Test user 3<ul></li>')
    
})

app.use('/', (req, res, next) => {
    console.log('Test two')
    res.send('<h1> Welcome to express </h1>')
})

app.listen(3000)