const express  = require ('express')

const router = express.Router()

const getUser = require('../controller/user')

router.get('/', getUser.getIndex)

router.post('/userProfile', getUser.getUsersProfiles)



module.exports = router