const JournalEntry = require("../models/journalEntryModel");
const mongoose = require("mongoose");

const getEntry = async (req, res) => {
    const { id, date } = req.params;
    const queryId = new mongoose.Types.ObjectId(id);
    const queryDate = new Date(date);

    if(!id) {
        return res.status(400).json({error: "No id"})
    }

    if (!date) {
        return res.status(400).json({error: "No date"})
    }

    try {
        const journalEntry = await JournalEntry.findOne({
            date: { $eq: queryDate },
            userId: queryId
        })

        if(!journalEntry) {
            return res.status(404).json(null);
        }

        return res.status(200).json(journalEntry);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const createEntry = async (req, res) => {
    const { prompt, content, userId } = req.body;
    try {
        const journalEntry = await JournalEntry.create({prompt, content, userId})
        return res.status(200).json(journalEntry);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getEntry,
    createEntry
}