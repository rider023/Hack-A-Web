import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const doctorSchema = mongoose.Schema({
  full_name: {
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
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  age: {
    type: Number,
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
      requestDate:{
        type:Date,
      }
    },
  ],
});

doctorSchema.virtual('password').set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

doctorSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
