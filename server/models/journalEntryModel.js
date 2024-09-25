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
    type: String,
    default: function() {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        return formattedDate;
    },
  },
  userId: {
    type: String,
    required: true,
    ref: 'User' // This matches the model name as registered in userModel.js
  }
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);

module.exports = JournalEntry;