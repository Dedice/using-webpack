const products = [{
    sku: '111445GB3',
    type: 'Smartphone',
    name: 'HTC One (M7)',
    description: 'With a sleek aluminum body, a live home screen that streams all of your favorite content, a photo gallery that comes to life, and dual frontal stereo speakers, the new HTC One is ready to reshape your smartphone experience.',
    image: 'htc-one-m7-view.jpg',
    mpn: 'A123X',
    release_date: new ISODate("2013-03-17T08:14:15.656Z"),
    manufacturer: {
        name: 'HTC',
        logo: 'htc-logo.jpg',
        url: 'http://www.htc.com/'
    },
    shipping: {
        weight: 143.2,
        dimensions: {
            width: 68.2,
            height: 137.4,
            depth: 9.3
        }
    },
    quantity: 10,
    pricing: {
        price: 210.5
    }
}, {
    sku: '444113GN0',
    type: 'Notebook',
    name: 'Dell Alienware 13 R2',
    description: 'Game with maximum mobility. 13-inch laptop with Intel ® processors, an optional graphics amplifier, all-day battery life and optional 62 WHr for ultimate on-the-go action.',
    image: 'alienware-13r2-view.jpg',
    mpn: 'A378S1DDW',
    release_date: new ISODate("2015-07-17T08:14:15.656Z"),
    manufacturer: {
        name: 'Dell',
        logo: 'dell-logo.jpg',
        url: 'http://www.dell.com/'
    },
    shipping: {
        weight: 2.058,
        dimensions: {
            width: 328.0,
            height: 27.9,
            depth: 235.0
        }
    },
    quantity: 15,
    pricing: {
        price: 1755.0
    }
}];


function find(obj) {
    return products.filter(function(product) {
        return obj.sku === product.sku;
    });
}


export {
    find
};