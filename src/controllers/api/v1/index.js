const express = require('express');
const routes = require('./routes.js');
const router = express.Router();

router.get('/posts', routes.getPosts);
router.get('/post/:id', routes.getPost);
router.post('/post', routes.postPost);

module.exports = router;
