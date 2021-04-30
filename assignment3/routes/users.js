const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const rootDir = require('../until/path')

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'))

})
router.post('/users',(req, res,next) => {
    console.log(req)
    res.redirect('/')
})

module.exports=router

