const mongoose = require('mongoose');
// Import the User model
const User = require('./userModel'); // Adjust the path as necessary

const moodSchema = new mongoose.Schema({
  userId: {
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
    type: String,
    default: function() {
      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      return formattedDate;
    },
    required: true
  }
});

const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood;