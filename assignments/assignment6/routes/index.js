const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')
const bodyParser = require('body-parser')



 router.post('/user-welcome', (req, res, next) => {
    const name = JSON.parse(JSON.stringify(req.body))
     res.status(200)
     .render('user-welcome', {
         path: '/user-welcome',
         pageTitle: 'User profile'
     })

    
    
     console.log(name)

 })

 router.get('/user-welcome', (req, res, next) => {
    res.status(200)
    .render('user-welcome', {
        path:'/user-welcome',
        pageTitle: 'User profile'

    })
})
module.exports = router