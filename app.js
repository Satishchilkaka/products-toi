
const express = require('express')

const app = express()

app.use((req,res, next) => {
    res.send('<h1>Hell express</h1>')
    console.log(req.url)
})

app.listen(3000) 
