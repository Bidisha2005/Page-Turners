import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './router/book.router.js'
import userRoute from './router/user.router.js'
import cors from "cors";
import contactRoute from './router/contact.router.js'

const app = express()
app.use(cors());
app.use(express.json());



dotenv.config();

const PORT= process.env.PORT ||3000;
const URI=process.env.MongoDBURI;

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})