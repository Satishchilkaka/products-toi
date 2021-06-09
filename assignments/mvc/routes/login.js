const express = require('express')

const router = express.Router()

router.get('/login', (req, res, next) => {
    res.status(200)
    .render('login', {
        path: '/login',
        pageTitle: 'Login page'

    })
})

module.exports = router