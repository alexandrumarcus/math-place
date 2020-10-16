const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  email :{
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  problems: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: "Member"
  }
})

module.exports = mongoose.model('User', UserSchema)