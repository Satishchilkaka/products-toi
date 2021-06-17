const express = require('express')
const router = express.Router()

router.get('/add-cart', (req, res, next) => {
    res.status(200)
    .render('add-cart', {
        path: '/add-cart',
        pageTitle: 'cart'
    })
})

module.exports = router

