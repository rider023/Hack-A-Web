import Doctor from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';

export const doctorSignup = (req, res, next) => {
  Doctor.findOne({ email: req.body.email }).exec((error, doctor) => {
    if (doctor) {
      return res.status(201).json({
        message: 'Doctor already exist',
      });
    }

    if (req.body.password === req.body.confirm_password) {
      const new_doctor = new Doctor({
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        age: req.body.age,
        specialization:req.body.specialization,
        qualification:req.body.qualification
      });

      try {
        new_doctor.save().then((data) => {
          return res.status(200).json({
            message: 'User created',
            data,
          });
        });
      } catch (error) {
        return res.status(400).json({
          err: error,
        });
      }
    }

    if (req.body.password !== req.body.confirm_password) {
      return res.status(400).json({
        message: "passwords don't match",
      });
    }
  });
};

export const doctorSignin = (req, res, next) => {
  Doctor.findOne({ email: req.body.email }).exec((error, doctor) => {
    if (doctor) {
      if (doctor.authenticate(req.body.password)) {
        const payload = { email: req.body.email }; //* payload

        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: '3h',
        });

        return res.status(200).json({
          jwt_token: accessToken,
          message: 'login successfully',
        });
      } else {
        return res.status(201).json({
          message: 'Wrong password!!',
        });
      }
    } else {
      return res.status(202).json({
        message: 'not registered!! register first',
      });
    }
  });
};
