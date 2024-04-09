require('dotenv').config()
const express = require('express');
const entryRoutes = require('./routes/entries')
const calendarRoutes = require('./routes/calendars')
const userRoutes = require('./routes/users')

// database
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/journals', entryRoutes);
app.use('/api/calendars', calendarRoutes)
app.use('/api/users', userRoutes)

//connect to db
mongoose.connect(process.env.DB_URL).
then(() => {
    console.log("Connected to db");
}).catch((error) => {
    console.error("Error occured", error)
})


module.exports = app;