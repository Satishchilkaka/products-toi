
exports.getIndex = (req, res, next) => {
    res.status(200)
    .render('index', {
        path: '/index',
        pageTitle: 'Login',
        mainCSS: true,
        formCSS: true
    })
}



exports.getUsersProfiles = (req, res, next) => {
    res.status(200)
    .render('user-profile', {
        path: '/user/userProfile',
        pageTitle: 'user profile',
        mainCSS: true
    })
}

