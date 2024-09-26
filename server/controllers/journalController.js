const JournalEntry = require("../models/journalEntryModel");
const mongoose = require("mongoose");

const getEntry = async (req, res) => {
    const { id, date } = req.params;
    const queryId = id;
    const queryDate = date;

    if(!id) {
        return res.status(400).json({error: "No id"})
    }

    if (!date) {
        return res.status(400).json({error: "No date"})
    }

    try {
        const journalEntry = await JournalEntry.findOne({
            userId: queryId,
            date: queryDate
        })

        if(!journalEntry) {
            return res.status(404).json({error: "Entry not found"});
        }

        return res.status(200).json({journal: journalEntry});
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