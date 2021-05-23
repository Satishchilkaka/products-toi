const express = require('express')
const router = express.Router()
const dirRoute = require('../helper/path')
 const path = require('path')

 router.post('/users', (req, res, next) => {
    console.log(req.body)
    res.redirect('/users-list')
    
 })
 
 router.get('/users-list', (req, res, next) => {
    res.sendFile(path.join(dirRoute, 'views', 'users.html'))
   
    
 })

module.exports= router