const express = require('express');
const router = express.Router();
const findUser = require('../controllers/find.controller');

router.post('/user', findUser);

module.exports = router;