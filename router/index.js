const express = require('express')
const router = express.Router()
const regs = require('../controllers/registration')

// GET HOME page route
router.get('/', regs.index)

// GET REGISTRATION Page route
router.get('/register', regs.regs)

// POST REGISTRATION info to database
router.post('/register', regs.signup)

module.exports = router