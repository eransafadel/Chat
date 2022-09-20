import express from 'express';
const app = express();
import cors from "cors";
const userRoute = require("./routes/userRoutes");
import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();
mongoose.connect(`${process.env.MONGO_URL}`
).then(()=>console.log("DB connection Succsessful")).catch( (err)=>{console.log(err)})





app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoute);

app.listen(`${process.env.PORT}`,()=>{
    console.log(`Server Running! in port:${process.env.PORT}`);
})