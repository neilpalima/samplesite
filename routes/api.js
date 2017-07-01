var express =  require('express');
var router = express.Router();

router.get('/name', (req, res) => {
    res.json({
        name: 'Bob'
    });
});

module.exports = router;
