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
    }).then((user) => {
        if (user) {
            res.redirect('/products');
        }
        else {
            res.locals.error = 'Invalid username/password!';
            res.redirect('/login');
        }
    });
});

router.post('/add', (req, res) => {
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
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
});

router.get('/getAll', (req, res) => {
    Users.findAll().then(users => {
        res.json(users);
    });
});

router.get('/get/:username', (req, res) => {
    var username = req.params.username;
    Users.findOne({
        where: {
            username: username,
        }
    }).then((user) => {
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'Not found' });
        }
    });
});


module.exports = router;