require('dotenv').config()
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({mssg: "Server started"});
})


module.exports = app;