import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://grocerry-deliverry-apps:grocerrydeliverryapps@cluster0.gcams9o.mongodb.net/Grocerry-Deliverry-Apps').then(()=>console.log("DB Connected"));
}
