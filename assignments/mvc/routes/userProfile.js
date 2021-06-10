const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { stringifyConfiguration } = require('tslint/lib/configuration')
const userData = []
router.use(bodyParser.urlencoded({extended: false}))
router.get('/users-list', (req, res, next) => {
    res.status(200)
    .render('users-list', {
        path: '/users-list',
        pageTitle:'user profile',
       
    })
})

router.post('/users-list', (req, res, next) => {
   
    res.status(200)
    .render('users-list', {
        path: '/users-list',
        pgeTitle: 'use'
    })
    const userD = JSON.parse(JSON.stringify(req.body))
    console.log(userD)
})


module.exports = router