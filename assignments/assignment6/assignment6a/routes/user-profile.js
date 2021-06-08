
const path = require('path')
const rootDir = require('../../util/path')
const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()


router.use(bodyParser({ extended: false }))

router.get('/user-profile', (req, res, next) => {
    res.render('user-profile', {
        pageTitle: 'users list',
        path:'/user-profile',
      
    })
   // res.sendFile(path.join(rootDir, 'views', 'user-profile.html'))
})

router.post('/user-profile', (req, res, next) => {
   // res.redirect('/user-profile')
   res.render('user-profile', {
    pageTitle: 'users list',
    path:'/user-profile'
   })
    const user = JSON.parse(JSON.stringify(req.body)) 
   console.log(user)
})

module.exports = router