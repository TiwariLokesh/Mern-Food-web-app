import mongoose from "mongoose";

 export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Mern-Restaurant"
    }).then(()=>{
        console.log("Connected to  database successfully");
    }).catch((err) =>{
        console.log(`Some error occurred while connecting to database! ${err}`);
    })
};
