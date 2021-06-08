const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser({ extended: false }))

const users = []

router.post('/users-list', (req, res, next) => {
    const user = JSON.parse(JSON.stringify(req.body))
    users.push(user)
    res.status(200)
    .render('users-list',  {
       // path: '/users-list',
        pageTitle: 'user profile',
        userNames: users

    })
  
    
    console.log(users[0].UserName)
})

router.get('/users-list', (req, res, next) => {
    res.status(200)
    .render('users-list', {
        path: '/users-list',
        pageTitle: 'list user'
        
    })
})

module.exports = router