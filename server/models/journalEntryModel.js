const mongoose = require('mongoose');
// Import the User model if you need to use it directly in this file, adjust the path as necessary
const User = require('./userModel'); // Ensure the path is correct

const journalEntrySchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    default: 'Nothing here!'
  },
  date: {
    type: Date,
    default: function() {
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // This matches the model name as registered in userModel.js
  }
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);

module.exports = JournalEntry;