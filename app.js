
const express = require('express')

const app = express()

app.use((req,res, next) => {
    res.send({test1:"test"})
})

app.listen(3000)
