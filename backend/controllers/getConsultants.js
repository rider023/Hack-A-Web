import Doctor from "../models/doctorModel.js"

export const getConsultants = (req,res) => {

    Doctor.findOne({email:req.user.email}).exec((error,doctor)=>{

        if(error){
            return res.status(402).json({
                message:"Server Error Occured"
            })
        }

        if(doctor.consultants.length === 0){
            return res.status(200).json({
                message:"No Consultants in the list"
            })
        }

        return res.status(200).json(doctor.consultants)
    })

}