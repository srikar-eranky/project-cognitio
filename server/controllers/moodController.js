const express = require('express');
const Mood = require('../models/moodModel');

// Create/Update a Mood Rating for a specified date
const createMood = async function(req, res) {
  try {
      const {date, rating} = req.body;
      const userId = req.user._id;

      let mood = await Mood.findOne({
          date: date,
          userId: userId
      })

      if (!mood) {
          mood = new Mood({
              userId,
              rating,
              date
          })
      } else {
          mood.rating = rating;
      }

      await mood.save();
  } catch (err) {
      console.log('Error saving mood entry: ', err);
      res.status(500).json({message: 'Internal Server Error'});
  }
}

module.exports = {
  createMood
};