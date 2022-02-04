import User from '../models/userModel.js';
import Doctor from '../models/doctorModel.js';

export const getUser = (req, res, next) => {
  User.findOne({ email: req.user.email }).exec((error, user) => {
    if (error) {
      return res.status(410).json({
        error,
      });
    }

    return res.status(200).json({
      user,
    });
  });
};

export const getDoctor = (req, res, next) => {
  Doctor.findOne({ email: req.user.email }).exec((error, doctor) => {
    if (error) {
      return res.status(410).json({
        error,
      });
    }

    return res.status(200).json({
      doctor,
    });
  });
};
