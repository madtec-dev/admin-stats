var express = require('express');
var router = express.Router();
module.exports = function(router, passport) {

  // LOGIN ======================================
  router.get('/admin/login', function(req, res) {
    if(req.isAuthenticated()) {
      res.redirect('/admin');
    } else {
      res.render('login', {message: req.flash('loginMessage') });
    }

  });
  router.post('/admin/login', passport.authenticate('local-login', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login',

    failureFlash: true
  }))

  // SIGNUP =======================================
  router.get('/admin/signup', function(req, res) {
    if(req.isAuthenticated()) {
      res.redirect('/admin');
    } else {
      res.render('signup', {message: req.flash('signupMessage') });
    }
  });

  router.post('/admin/signup', passport.authenticate('local-signup', {
    successRedirect: '/admin',
    failureRedirect: '/admin/signup',

    failureFlash: true
  }));

  // LOGOUT ========================
  router.get('/admin/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  })
}
