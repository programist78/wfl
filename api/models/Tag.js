import mongoose from 'mongoose';

const Tag = new mongoose.Schema(
  {
    name: {type: String}
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('tag', Tag);