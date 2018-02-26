const express = require('express');
const routes = require('./routes.js');
const router = express.Router();

router.get('/jobs', routes.getJobs);
router.get('/job/:id', routes.getJob);
// router.post('/job', routes.postJob);

module.exports = router;
