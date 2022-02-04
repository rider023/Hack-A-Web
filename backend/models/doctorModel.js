import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  consultants: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      scheduled: {
        type: Boolean,
        default: false,
      },
      scheduledAt: {
        type: Date,
        unique: true,
      },
      symptoms: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        emum: ['male', 'female', 'other'],
      },
    },
  ],
});

export default Doctor = mongoose.model('doctor', doctorSchema);
