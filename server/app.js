const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
require('./config/passportSetup'); // Adjust the path as necessary
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  // Assuming app.js is located in the 'server' directory and index.html is one level up.
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});


// DB Connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB database'));

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', require('./routes/authRoutes'));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running`);
});
