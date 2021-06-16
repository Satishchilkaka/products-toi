const Product = require('../models/product')
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
    const product = new Product(AdminAddProduct.title)
    product.save()
    res.redirect('/')
}

exports.displayProductInStore = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            productName: products,
            path: '/',
            pageTitle: 'shop',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        })
        console.log(products)
    })
}
