'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config');

const app = express();

// Harden server
app.use(helmet());

// Set CORS headers
app.use(cors(config.web.cors));

// Add tumblr routes
app.use('/', require('./routes/tumblr'));

// Add generic error routes
app.use(require('./routes/error'));

module.exports = app;
