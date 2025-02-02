const defineUIConfig = require('../config.yml');
const express = require('express');
const app = express();
const port = defineUIConfig().settings.dashboard.port;

module.exports = { app, port, express };