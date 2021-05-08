const express = require('express')
const router = express.Router()
const dirRoute = require('../helper/path')
 const path = require('path')
/* 
 router.get('/users', (req, res, next) => {
    res.sendFile(path.join(dirRoute, 'views', 'users.html'))
 }) */
router.post('/users', (req, res, next) => {
console.log(req.body)
    res.redirect('/')
    
})

module.exports= router