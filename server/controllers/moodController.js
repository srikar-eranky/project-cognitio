const Mood = require('../models/moodModel');
const { ObjectId } = require("mongodb");

// get Mood for that day and user
const getMood = async function(req, res) {
  const { id, dates } = req.body;
  if(!id) {
    return res.status(400).json({error: "Id missing"})
  }
  if(!dates){
    return res.status(400).json({error: "Missing date"})
  }
  try {
    const moods = await Mood.find({
      userId: ObjectId.createFromHexString(id),
      date: { $in: dates }
    }).sort({date: 1});
    if(!moods) {
      return res.status(404).json({error: "Moods not found"});
    }
    return res.status(200).json({ratings: moods});
  } catch(error) {
    return res.status(500).json({error: "Internal Server error"})
  }
}

// Create/Update a Mood Rating for a specified date
const createMood = async function(req, res) {
  const {id, date, rating} = req.body;
  const userId = ObjectId.createFromHexString(id);
  try {
      
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
      return res.status(200).json(mood);
  } catch (err) {
      console.log('Error saving mood entry: ', err);
      res.status(500).json({message: 'Internal Server Error'});
  }
}

module.exports = {
  createMood,
  getMood
};