const passport = require('passport');
const AdminUser = require('../models/AdminUser');
const JwtStrategy = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const LocalStrategy = require('passport-local');
const {secret} = require('../config');


// setting local strategy:
const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    AdminUser.findOne({email: email}, function(err, user) {
        if(err) {
            return done(err);
        }

        if(!user) {
            return done(null, false);
        }

        user.comparePasswords(password, function(err, isMatch) {
            if(err) {
                return done(err);
            }

            if(!isMatch) {
                return done(null, false);
            }

            return done(null, user);
        });
    });
});



// setting the jwt strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    AdminUser.findById(payload.sub)
        .then((user) => {
            if(user) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
        .catch((err) => done(err, false));
});


// tell passport to use defined strategies:
passport.use('admin-jwt',jwtLogin);
passport.use('admin-local',localLogin);