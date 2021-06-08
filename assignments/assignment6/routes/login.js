const express = require('express')
const router = express.Router()

router.get('/login', (req, res, next) => {
    res.status(200)
    .render('login', {
        path: '/login',
        pageTitle: 'login page'
    })
})

module.exports = router