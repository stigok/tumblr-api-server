'use strict';

const express = require('express');
const tumblr = require('tumblr.js');
const config = require('../config.js');

const router = new express.Router();
const tumblrClient = tumblr.createClient(config.tumblr.auth);

router.get('/posts', (req, res, next) => {
  tumblrClient.posts(config.tumblr.blogName, {reblog_info: true, filter: 'raw'}, (err, data) => { // eslint-disable-line camelcase
    if (err) {
      console.error('Error on tumblr call', err);
      return next(err);
    }
    return res.json(data.posts);
  });
});

module.exports = router;
