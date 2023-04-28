'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pages-controller');

router.get('/', controller.default);
router.get('/payment.do', controller.payment);
router.post('/confirm.do', controller.complete);

module.exports = router;