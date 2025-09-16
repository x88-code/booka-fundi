import mongoose from 'mongoose';

const fundiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Fundi', fundiSchema);
