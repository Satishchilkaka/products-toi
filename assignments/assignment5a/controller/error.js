const express = require ('express')
const router = express.Router()
const route = express.Router()
router.get('',(req, res, next) => {
    res.render('404',{
        path:'/404',
        pageTitle:'pageNotfound'
    })
})
module.exports = router