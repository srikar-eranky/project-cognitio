const express = require('express');
const Mood = require('../models/moodModel');
const router = express.Router();

/* GET calendar moods for a specified array of dates. */
router.get('/calendar', async function(req, res, next) {
    try {
        if (!req.dates) {
            return res.status(400).json({message:'Dates are required!'});
        }
        
        if (!req.user){
            return res.status(400).json({message:'User is required!'});
        }

        const dates = req.dates;
        const user = req.user;
    
        if (!user){
            return res.status(404).json({message:'User not found'});
        }
        
        const moods = await Mood.find({
            userId: user._id,
            date: { $in: dates}
        }).sort({date: 1});

        res.status(200).json({moods});

      } catch (err) {
        console.log("Error retrieving moods: ", err);
        res.status(500).json({message:'Internal Server Error'});
      }
});

// Create/Update a Mood Rating for a specified date
router.post('/rating', async function(req, res, next) {
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
})

module.exports = router;