import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './router/book.router.js'
import userRoute from './router/user.router.js'
import cors from "cors";
import contactRoute from './router/contact.router.js'
import path from "path"

const app = express()
app.use(cors());
app.use(express.json());



dotenv.config();

const PORT= process.env.PORT ||3000;
const URI=process.env.MongoDBURI;

const _dirname= path.resolve();

try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB")

} catch (error) {
    console.log("Error",error)
}

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.use("/api", contactRoute);

//deployment
app.use (express.static(path.join(_dirname,"/Frontend/dist")))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(_dirname,"Frontend","dist","index.html"));
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})