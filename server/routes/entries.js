const express = require('express');
const JournalEntry = require('../models/journalEntryModel');
const router = express.Router();

/* GET journal entry. */
router.get('/journal', async function(req, res, next) {
    try{
        if (!req.user) {
            return res.status(400).json({message:'User is required!'});
        }
        if (!req.date) {
            return res.status(400).json({message:'Date is required!'});
        }

        const date = req.date;
        const user = req.user;

        if (!user){
            return res.status(404).json({message:'User not found'});
        }

        const journalEntry = await JournalEntry.findOne({
            date: date,
            userId: user._id,
        })

        res.status(200).json({journalEntry});

    } catch (err) {
        console.log("Error retrieving journal entry: ", err);
        res.status(500).json({message:'Internal Server Error'});
    }
});

// Create/update a journal entry for a specified date
router.post('/journal', async function(req, res, next) {
    try {
        const {prompt, content, date} = req.body;
        const userId = req.user._id;

        let journalEntry = await JournalEntry.findOne({
            date: date, 
            userId: userId
        });

        if (!journalEntry){
            journalEntry = new JournalEntry({
                prompt,
                content,
                date,
                userId
            })
        } else {
            journalEntry.prompt = prompt;
            journalEntry.content = content;
        }

        await journalEntry.save();

        res.status(200).json({message: 'Journal entry saved!'});
    } catch (err) {
        console.log('Error saving journal entry: ', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
})

module.exports = router;