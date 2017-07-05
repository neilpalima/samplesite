var express =  require('express');
var router = express.Router();

var Users = require('../ORM/Users');
var Orders = require('../ORM/Orders');

router.get('/', (req, res) => {
    res.render('orders');
});

router.post('/add', (req, res) => {
    //TODO
});

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

router.get('/countAll', (req, res) => {
    Orders.findAndCountAll().then((orders) => {
        res.json({count: orders.count});
    });
});

module.exports = router;