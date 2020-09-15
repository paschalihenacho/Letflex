const express = require("express");
require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const User = require("../models/UserGoogle");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async function (accessToken, refreshToken, profile, done) {
      const existingUser = await User.findOne({ id: profile.id });
      if (!existingUser) {
        const user = new User({
          id: profile.id,
          displayName: profile.displayName,
        });
        const result = await user.save();
        return done(null, { id: user.id });
      }
      return done(null, existingUser);
    }
  )
);

//Could be async if we wanted it to
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    let user = await UserController.findOne({ id });
    if (!user) {
      return done(new Error("User not found"));
    }
    done(null, user);
  } catch (e) {
    done(e);
  }
});

const router = express.Router();

router.get(
  "/login",
  passport.authenticate(
    "google",
    {
      scope: ["email", "profile"],
    },
    function (req, res) {
      res.redirect("/");
    }
  )
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  }),
  function (req, res) {
    req.session.user = req.user;
    res.redirect("/in");
  }
);

module.exports = router;