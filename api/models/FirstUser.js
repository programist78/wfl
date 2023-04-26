import mongoose from 'mongoose';

const FirstUser = new mongoose.Schema(
  {
    fullname: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    confirmedEmail: {type: Boolean, default: false},
    confirmationCode: { type: String }, 
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('FirstUser', FirstUser);