var express = require('express');
var router = express.Router();


// ADMIN VIEW
router.route('/')
.get(isLoggedIn, function(req, res) {
  res.render('admin', {user: req.user});
});


function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.render('login', {message: 'You need to login'});
}

module.exports = router;
