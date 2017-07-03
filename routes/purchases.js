var _ = require('underscore');
var express =  require('express');
var router = express.Router();

var Purchases = require('../ORM/Purchases');
var Products = require('../ORM/Products');

router.get('/getAll', (req, res) => {
    Purchases.findAll({
    include: [
        {
          model: Products,
          as: 'products'
        }
    ]
    }).then((purchases) => {
        res.json(purchases);
    });
});

router.get('/get/:orderId', (req, res) => {
    var orderId = req.params.orderId;
    Purchases.getAllByOrderId(orderId).then((purchases) => {
        if (purchases && purchases.length > 0) {
            res.json(purchases);
        }
        else {
            res.status(404).json({ error: 'Not found' });
        }
    });
});

router.get('/getOrderPrice/:orderId', (req, res) => {
    var orderId = req.params.orderId;
    Purchases.getAllByOrderId(orderId, true).then((purchases) => {
        if (purchases && purchases.length > 0) {
            var price = 0;

            _.each(purchases, (item) => {
                console.log(item)
                price += (item.quantity * item['products.price'])
            });

            res.json({price: price});
        }
        else {
            res.status(404).json({ error: 'Not found' });
        }
    });
});

module.exports = router;