const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('User', userSchema);
