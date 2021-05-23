const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../helper/path')

router.get('/', (req, res, next) => {
    res.status(200).render('index', {
        path: '/index',
        pageTitle: 'user'
    })
    //  res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

module.exports = router