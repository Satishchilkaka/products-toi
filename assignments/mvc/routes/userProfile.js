const express = require('express')
const router = express.Router()


router.get('/users-list', (req, res, next) => {
    res.status(200)
    .render('users-list', {
        path: '/users-list',
        pageTitle:'user profile'
    })
})

router.post('/users-list', (req, res, next) => {
    res.status(200)
    .render('users-list', {
        path: '/users-list',
        pgeTitle: 'use'
    })
})


module.exports = router