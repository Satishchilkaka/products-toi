
exports.getIndex = (req, res, next) => {
    res.status(200)
    .render('index', {
        path: '/index',
        pageTitle: 'Login',
        mainCSS: true,
        formCSS: true
    })
}

