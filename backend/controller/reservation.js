import ErrorHandler from '../error/error.js'
import { Reservation } from '../models/reservationSchema.js';

export const sendReservation = async(req,res,next)=>{
const {firstName, lastname,email,phone,date,time} = req.body;
if(firstName || lastname || email || phone || date || time ){
    return next(new ErrorHandler("Please fill full reservation form!",400));
}
try{
    await Reservation.create(firstName, lastname,email,phone,date,time);
    res.status(200),
    json({
        success: true,
        message: "Reservation Sent Successfully!",
    });
}catch (error){

}
};