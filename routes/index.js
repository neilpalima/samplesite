var express =  require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('cover');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/products', (req, res) => {
    res.render('products');
});

router.get('/partial/:name', (req, res) => {
    var name = req.params.name;
    res.render('partials/partial' + name);
});


module.exports = router;