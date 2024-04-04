const mongoose = require('mongoose');
// Import the User model
const User = require('./userModel'); // Adjust the path as necessary

const moodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // This should match the model name exported in userModel.js
    required: true
  },
  mood: {
    type: String,
    required: true,
    enum: ['Happy', 'Sad', 'Anxious', 'Angry', 'Hopeful', 'Stressed', 'Calm', 'Tired'],
  },
  intensity: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  note: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood;