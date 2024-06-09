const express = require('express');
const router = express.Router();
const controllers = require('../controllers/indexControllers');

router.get('/', controllers.index);

module.exports = router;