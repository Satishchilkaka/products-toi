const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../helper/path')
const bodyParser = require('body-parser')
const userList = []

router.use(bodyParser({ extended: false }))

router.get('/users-list', (req, res, next) => {
    res.render('users-list', {
        pageTitle: 'users list',
        path:'/users-list',
        userName:userList[0].UserName
    })
    res.sendFile(path.join(rootDir, 'views', 'users-list.html'))
})

router.post('/users-list', (req, res, next) => {
    res.redirect('/users-list')
    const user = JSON.parse(JSON.stringify(req.body)) 
    userList.push(user)
    console.log(userList[0].UserName)
})


module.exports = router