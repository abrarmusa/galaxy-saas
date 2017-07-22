const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


// creating the User schema:
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        default: ''
    },

    address: {
        type: String,
        default: ''
    },

    city: {
        type: String,
        default: ''
    },

    country: {
        type: String,
        default: ''
    }
});



// before saving the model, encrypt the password:
userSchema.pre('save', function(next) {
    const user = this;

    // generate hashed password:
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) {
                return next(err);
            }

            // store hashed password as user's password
            user.password = hash;

            // proceed
            next();
        });
    });
});


// method for comparing the hashed password and provided password :
userSchema.methods.comparePasswords = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if(err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

// create the User model
const User = mongoose.model('user', userSchema);


module.exports = User;