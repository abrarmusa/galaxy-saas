const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/User');
const {secret} = require('../config');


// create token for given user:
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, timestamp}, secret);
};


// signing in route callback
exports.signin = function(req, res, next) {
    res.send({token: tokenForUser(req.user), username: req.user.username, info: {
        fullname: req.user.fullname,
        address: req.user.address,
        city: req.user.city,
        country: req.user.country
    }});
}



// route callback for signing up:
exports.signup = function(req, res, next) {
    // extract email and password from the body
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        return res.status(422).send({error: 'Email and password must be provided!'});
    }

    User.findOne({username: username})
        .then(user => {
            if(user) {
                res.status(422).send({error: 'Username is already in use!'});
            }
        })

    User.findOne({email: email}, function(err, existingUser) {
        if(err) {
            return next(err);
        }

        if(existingUser) {
            return res.status(422).send({error: 'Email is already in use!'});
        }

        const user = new User({
            username,
            email,
            password
        });

        user.save()
            .then(() => res.json({token: tokenForUser(user), username: user.username}))
            .catch((err) => next(err));
    });
}


exports.changePassword = function(req, res, next) {
    const {currentPassword, newPassword} = req.body;
    User.findById(req.user._id)
        .then((user) => {
            user.comparePasswords(currentPassword, function(err, isMatch) {
                if(err) {
                    console.log(err);
                    return err;
                }

                if(!isMatch) {
                    res.status(422).send({error: 'Wrong password!'})
                }

                bcrypt.genSalt(10, function(err, salt) {
                    if(err) {
                        return err;
                    }

                    bcrypt.hash(newPassword, salt, null, function(err, hash) {
                        if(err) {
                            return err;
                        }

                        user.update({password: hash})
                            .then(() => res.json({message: 'Successfully changed password!'}))
                        
                    })
                })

            })
        })
}


exports.editInfo = function(req, res, next) {
    const {fullname, address, city, country} = req.body;

    User.findByIdAndUpdate(req.user._id, {fullname, address, city, country}, {new: true})
        .then((user) => {
            res.send({info: {
                fullname: user.fullname,
                address: user.address,
                city: user.city,
                country: user.country
            }})
        })
}