const mongoose = require('mongoose');
// Import the User model
const User = require('./userModel'); // Adjust the path as necessary

const moodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // This should match the model name exported in userModel.js
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  date: {
    type: Date,
    default: function() {
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    },
    required: true
  }
});

const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood;