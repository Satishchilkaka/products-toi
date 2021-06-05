const product = []
exports.addProductsToShop = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add products to shop',
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    })
}

exports.getProducts = (req, res, next) => {

    const AdminAddProduct = JSON.parse(JSON.stringify(req.body))

    product.push({ productTitle: AdminAddProduct.title })
    res.redirect('/')
}

exports.displayProductInStore = (req, res, next) => {

    res.render('shop', {
        productName: product,
        path: '/',
        pageTitle: 'shop',
        hasProducts: product.length > 0,
        activeShop: true, 
        productCSS: true
    })
}
