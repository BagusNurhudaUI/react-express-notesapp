const express = require('express');
const registerUser = require('./userContorollers');

const router = express.Router()

// router.route('/').post(registerUser)

router.post('/', registerUser)
module.exports = router;