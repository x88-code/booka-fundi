import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  fundiId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Fundi'
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  notes: String,
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
