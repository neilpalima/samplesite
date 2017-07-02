var express =  require('express');
var router = express.Router();

var Users = require('../ORM/Users');

router.post('/signin', (req, res) => {
    var userCredentials = req.body;
    Users.findOne({
        where: {
            username: userCredentials.username,
            password: userCredentials.password
        }
    }).then(user => {
        if (user) {
            res.redirect('/products');
        }
        else {
            res.locals.error = 'Invalid username/password!';
            res.redirect('/login');
        }
    })

});

router.post('/create', (req, res) => {
    var userInfo = req.body;
    Users.findOrCreate({
        where: {
            username: userInfo.username
        },
        defaults: {
            password: userInfo.username,
            email: userInfo.email,
            address: userInfo.address,
            type: userInfo.type
        }
    }).spread((user, created) => {
        res.render('user_list', {success: created});
    });
});

module.exports = router;