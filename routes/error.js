'use strict';

const express = require('express');
const router = new express.Router();

// If this route is reached, it signifies a 404
router.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  err.message = 'Not found';
  return next(err);
});

// Default error handlers
router.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res
    .status(err.status || 500)
    .send(err.message || 'There was an error with the request');
});

module.exports = router;
