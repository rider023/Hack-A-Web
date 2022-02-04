import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const userSignup = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(201).json({
        message: 'User already exist',
      });
    }

    if (req.body.password === req.body.confirm_password) {
      const new_user = new User({
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        age: req.body.age,
        contact: req.body.contact,
      });

      try {
        new_user.save().then((data) => {
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

export const userSignin = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      if (user.authenticate(req.body.password)) {
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
