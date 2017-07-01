var express =  require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/partial/:name', (req, res) => {
    var name = req.params.name;
    res.render('partials/partial' + name);
});


module.exports = router;