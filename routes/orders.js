var express =  require('express');
var router = express.Router();

var Users = require('../ORM/Users');
var Orders = require('../ORM/Orders');

router.get('/', (req, res) => {
    res.render('orders');
});

// router.post('/add', (req, res) => {
//     var productInfo = req.body;
//     Products.findOrCreate({
//         where: {
//             name: productInfo.name
//         },
//         defaults: {
//             price: productInfo.price,
//             description: productInfo.description,
//             sku: productInfo.sku
//         }
//     }).spread((product, created) => {
//         res.render('product_list', {success: created});
//     }).catch((err) => {
//         res.status(500).json({ error: err });
//     });
// });

router.get('/getAll', (req, res) => {
    Orders.findAll({
        include: [
            {
              model: Users,
              as: 'users'
            }
        ]
    }).then((orders) => {
        res.json(orders);
    });
});

router.get('/get/:orderId', (req, res) => {
    var orderId = req.params.orderId;
    Orders.findAll({
        include: [
            {
              model: Users,
              as: 'users'
            }
        ],
        where: {
            id: orderId
        }
    }).then((orders) => {
        if ((orders && orders.length > 0)) {
            res.json(orders);
        }
        else {
            res.status(404).json({ error: 'Not found' });
        }
    });
});

module.exports = router;