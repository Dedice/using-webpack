import products from './modules/products';

var product = products.find({
    sku: '111445GB3'
});


console.log(product);