const express = require('express')
const path = require('path')
const router= express.Router()

const app = express()

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'base.html'))
})

module.exports=router