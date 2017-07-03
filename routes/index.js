var express =  require('express');
var router = express.Router();

var users = require('./users');
var products = require('./products');
var orders = require('./orders');
var purchases = require('./purchases');
var api = require('./api');

router.get('/', (req, res) => {
    res.render('cover');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/partial/:name', (req, res) => {
    var name = req.params.name;
    res.render('partials/partial' + name);
});

router.use('/users', users);
router.use('/products', products);
router.use('/orders', orders);
router.use('/purchases', purchases);
router.use('/api', api);

// router.get('*', (req, res) => {
//     res.render('index');
// });

module.exports = router;