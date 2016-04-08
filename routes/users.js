var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {     //route for users/register since already in users.js
  res.render('register', {
    'title': 'Register'
  });
});

router.get('/login', function(req, res, next) {     //route for users/register since already in users.js
  res.render('login', {
    'title': 'Login'
  });
});

module.exports = router;
