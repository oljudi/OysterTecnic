const router = require('express').Router()
const passport = require('../config/passport');

const {
  signUp,
  logIn,
  logOut
} = require('../controllers/auth.controller')


// SIGNUP ROUTE
router.post('/signup', signUp);

// LOGIN ROUTE
router.post('/login', passport.authenticate('local'), logIn);

// LOGOUT ROUTE
router.get('/logout', logOut);

module.exports = router;
