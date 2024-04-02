import ErrorHandler from '../error/error.js'
import {} from '../models/reservationSchema.js';

export const sendReservation = async(req,res,next)=>{
const {firstName, lastname,email,phone,date,time} = req.body;
if(firstName || lastname || email || phone || date || time ){
    return next(new ErrorHandler("Please fill full reservation form!",400));
}

}