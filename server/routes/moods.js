const express = require('express');
const router = express.Router();
const {
    createMood,
    getMood
} = require('../controllers/moodController');

/* GET calendar moods for a specified array of dates. */
router.post('/getMoods', getMood);

// Create/Update a Mood Rating for a specified date
router.post('/', createMood);

module.exports = router;