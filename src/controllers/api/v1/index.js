const express = require('express');
const routes = require('./routes.js');
const router = express.Router();

router.get('/i/:item_id/details', routes.getItemDetails);
router.get('/i/:item_id/attributes', routes.getItemAttributes);

module.exports = router;
