const express  = require ('express')

const router = express.Router()

const getUser = require('../controller/user')

router.get('/', getUser.getIndex)



module.exports = router