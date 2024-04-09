const express = require('express');
const router = express.Router();

/* GET user data. */
router.get('/', async function(req, res, next) {
  try {
    if (!req.user) {
        return res.status(401).json({message:'User not logged in'});
    }

    const user = await User.findOne({googleId: req.user.googleId});

    if (!user){
        return res.status(404).json({message:'User not found'});
    }

    res.status(200).json({user});
  } catch (err) {
    console.log("Error retrieving user data: ", err);
    res.status(500).json({message:'Internal Server Error'});
  }
});



module.exports = router;