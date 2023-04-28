import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    fullname: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: 
      {type: String,
    },
    confirmedEmail: {type: Boolean},
    subscriberMail: {type: Boolean, default: false},
    token: { type: String },
    confirmationCode: { type: String }, 
    balance: {type: Number},
    avatarUrl: { type: String },
    twoauth: {type: Boolean, default: false},
    havetwoauth: {type: Boolean, default: false},
    // havetwoauth
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', User);