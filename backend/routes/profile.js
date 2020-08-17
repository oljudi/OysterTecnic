const router = require('express').Router()

const {
    isLoggedIn
} = require('../middlewares/auth')

const {
    profileView,
    dashboards
} = require('../controllers/profile.controller')

// Profile route
router.get('/', isLoggedIn, profileView)

// Dashboards route
router.get('/dashboard', isLoggedIn, dashboards)

module.exports = router