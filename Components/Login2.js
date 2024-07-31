const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const MicrosoftStrategy = require("passport-azure-ad-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
      callbackURL: "http://yourwebsite.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // handle user profile here
      console.log(JSON.stringify(profile))
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
      callbackURL: "http://yourwebsite.com/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // handle user profile here
    }
  )
);

passport.use(
  new MicrosoftStrategy(
    {
      clientID: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
      callbackURL: "http://yourwebsite.com/auth/microsoft/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // handle user profile here
    }
  )
);
