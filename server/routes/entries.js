const express = require('express');
const router = express.Router();
const {
    getEntry,
    createEntry
} = require("../controllers/journalController");

/* GET journal entry. */
router.get('/:id/:date/', getEntry);

// Create a journal entry
router.post('/', createEntry);

module.exports = router;