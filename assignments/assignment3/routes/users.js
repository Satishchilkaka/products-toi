const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const rootDir = require('../until/path')

router.get('/users', (req, res, next) => {
 res.sendFile(path.join(rootDir, 'views', 'users.html'))

})
router.post('/users',(req, res, next) => {
    console.log(req.body)
    // res.redirect('/')
   // res.send('<h1> User added </h1>')
   res.sendFile(path.join(__dirname, '..','script', 'main.js'))
})

module.exports= router

