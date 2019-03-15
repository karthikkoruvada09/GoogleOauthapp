const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: '145198234010-h6jfgnt5loqlqherpr7gtek35kqlki4k.apps.googleusercontent.com',
            clientSecret: 'Ftkquz8lGXTOEQbULro99-fR',
            callbackURL:'/auth/google/redirect'
        },
        (token, refreshToken, profile, done) => {
            
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};