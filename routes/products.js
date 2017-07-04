var express =  require('express');
var router = express.Router();

var Products = require('../ORM/Products');

router.get('/', (req, res) => {
    Products.findAll().then((products) => {
        res.render('products');
    });
});

router.post('/add', (req, res) => {
    var productInfo = req.body;
    Products.findOrCreate({
        where: {
            name: productInfo.name
        },
        defaults: {
            price: productInfo.price,
            description: productInfo.description,
            sku: productInfo.sku
        }
    }).spread((product, created) => {
        res.render('product_list', {success: created});
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
});

router.get('/getAll', (req, res) => {
    Products.findAll().then((products) => {
        res.json({products: products});
    });
});

router.get('/get*', (req, res) => {
    var name = decodeURIComponent(req.query.name) || decodeURIComponent(req.params.name);
    Products.findOne({
        where: {
            name: name,
        }
    }).then(product => {
        if ((product)) {
            res.json(product);
        }
        else {
            res.status(404).json({ error: 'Not found' });
        }
    });
});

module.exports = router;