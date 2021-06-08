
const path = require('path')
const fs = require('fs')
const savePath = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json');
const getProductsFromFile = (callB) => {
    fs.readFile(savePath, (err, productData) => {
        if (err) {
            return callB([])
        }

        callB(JSON.stringify(productData))
    })
}
module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(savePath, JSON.stringify(products), (err) => {
                console.log(err)
           })
        })

    }

    static fetchAll(callB) {
        getProductsFromFile(callB)
    }
}