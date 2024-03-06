const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('../models/user'); // Adjust the path as necessary
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },
  async (request, accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.email ? profile.email : profile.emails[0].value;
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        user = await User.create({
          googleId: profile.id,
          displayName: profile.displayName,
          email: email
        });
        console.log('New user created:', user);
    } else {
      console.log('User logged in:', user);
    }

      done(null, user);
    } catch (error) {
      console.error('Error during user authentication:', error);
      done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
