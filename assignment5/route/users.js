const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../helper/path')

const users = []

router.post('/users-list', (req, res, next) => {
    const name = JSON.parse(JSON.stringify(req.body))
    users.push(name)
    console.log(users)
    res.status(200).render('users-list', {
        pageTitle: 'users list',
        path: '/users-list',
        userList:  users[0].UserName
    })
    // res.sendFile(path.join(rootDir, 'views', 'users-list.html'))
})

router.get('/users-list', (req, res, next) => {
    
    res.status(200).render('users-list', {
        pageTitle: 'users list0',
        path: '/users-list',
        
    })
})

module.exports = router
