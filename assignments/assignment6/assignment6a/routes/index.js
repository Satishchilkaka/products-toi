const express = require('express')

const router = express.Router()

router.get('/login', (req, res, next) => {
    res.status(200)
    .render('login', {
        path: '/login',
        pageTitle: 'Login page'
    })
})

router.post('/user-profile"', (req, res, next) => {
    res.status(200)
    .render('/user-profile', {
        path:'user-profile',
        pageTitle: 'user page'
    })
    console.log(req.body)
})

module.exports = router