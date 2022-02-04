import Doctor from "../models/doctorModel.js";

export const getDoctors = (req,res,next) => {

    Doctor.find().exec((error,doctors)=>{
        if(error){
            return res.status(410).json({
                error
            })
        }
        return res.status(200).json({
            doctors
        })
    })

}