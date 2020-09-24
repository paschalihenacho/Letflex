const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minglength: 5,
  },
  lastName: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// userSchema.methods.comparePassword = function(plainPassword,cb){
//     bcrypt.compare(plainPassword, this.password, function(err, isMatch){
//         if (err) return cb(err);
//         cb(null, isMatch)
//     })
// }

// userSchema.methods.generateToken = function(cb) {
//     var user = this;
//     var token =  jwt.sign(user._id.toHexString(),'secret')

//     user.token = token;
//     user.save(function (err, user){
//         if(err) return cb(err)
//         cb(null, user);
//     })
// }

// userSchema.statics.findByToken = function (token, cb) {
//     var user = this;

//     jwt.verify(token,'secret',function(err, decode){
//         user.findOne({"_id":decode, "token":token}, function(err, user){
//             if(err) return cb(err);
//             cb(null, user);
//         })
//     })
// }

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model("User", userSchema);

module.exports = { User };