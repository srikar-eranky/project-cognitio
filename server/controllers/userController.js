const User = require('../models/userModel')
const mongoose = require('mongoose')

const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "invalid id"})
        }
    
        const user = await User.findById(id);
    
        if (!user) {
            return res.status(404).json({error: "No user found"});
        }
    
        res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

const createUser = async (req, res) => {
    const { firstName, lastName, username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username: username });

        if (existingUser) {
            // If user exists, return a conflict status code (409)
            return res.status(200).json(existingUser);
        }

        const newUser = await User.create({ firstName, lastName, username, password })
        return res.status(200).json(newUser)
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {
    getUser,
    createUser
}