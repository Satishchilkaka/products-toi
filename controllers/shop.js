const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      productName: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProductDetails = (req, res, next) => {
const productID = req.params.productId
console.log(productID)
res.redirect('/')
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      productName: products,
      pageTitle: 'Shop',
      path: '/shop/index',
      formsCSS: true,
      productCSS: true
    });
  });
};

exports.getCartView = (req, res, next) => {
  res.render('shop/cart', {
    path: '/shop/cart',
    pageTitle: 'Cart',
    mainCSS: true,
    productCSS: true
    
  });
};

exports.getOrdersView = (req, res, next) => {
  res.status(200)
  .render('shop/orders', {
    path: '/shop/orders',
    pageTitle: 'Orders',
    mainCSS: true,
    productCSS: true
  })
}

