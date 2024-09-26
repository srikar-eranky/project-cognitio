require('dotenv').config()
const express = require('express');
const cors = require('cors');
const entryRoutes = require('./routes/entries')
const moodRoutes = require('./routes/moods')
const userRoutes = require('./routes/users')

// database
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json())
app.use(cors());
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/journals', entryRoutes);
app.use('/api/moods', moodRoutes);
app.use('/api/users', userRoutes);

//connect to db
mongoose.connect(process.env.DB_URL).
then(() => {
    console.log("Connected to db");
}).catch((error) => {
    console.error("Error occured", error)
})


module.exports = app;