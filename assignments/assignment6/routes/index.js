const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')
router.get('/', (req, res, next) => {
    res.status(200).render('index', {
        pageTitle: 'index',
        path: '/index'
    })
   // res.status(200).sendFile(path.join(rootDir, 'views', 'index.html'))
})

module.exports = router