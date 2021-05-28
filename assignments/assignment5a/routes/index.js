const express = require ('express')
const router = express.Router()
const rootDir = require('../helper/path')
const path = require('path')

router.get('/', (req, res, next) => {
    res.status(200).render('index', {
        path: '/index',
        pageTitle: 'new index'
    })
   // res.status(200).sendFile(path.join(rootDir, 'views', 'index.html'))
})

module.exports = router