const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    hashedPassword: {
      type: String,
      required: [true, 'Password is required.']
    },
    imageUrl: {
      type: String,
    },
    isAdmin: Boolean,
    preferences: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

const User = model('User', userSchema);

module.exports = User;

