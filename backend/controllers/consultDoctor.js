import Doctor from '../models/doctorModel.js';

export const consultdoctor = (req, res, next) => {

    const consultant = {
      name: req.body.name,
      email: req.user.email,
      symptoms: req.body.symptoms,
      gender: req.body.gender,
      requestDate: Date.now(),
    };

    Doctor.findOneAndUpdate(
      { email: req.body.doctor_email },
      { $push: { consultants: consultant } }
    ).exec((error, data) => {
      if (data === null) {
        return res.status(402).json({
          message: "error adding consultant, Can't find the Doctor email",
        });
      }

      if(error){
          return res.status(402).json({
              error
          })
      }

      return res.status(200).json({
        message: 'Request Submitted! You will soon get a response from doctor',
        data,
      });
    });

};
