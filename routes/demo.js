const express = require('express');
const demo = require('../controllers/demo');
const authRouter= express.Router();

authRouter.
route('/').
get(demo);

module.exports = authRouter;