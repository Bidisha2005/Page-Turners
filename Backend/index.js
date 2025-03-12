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
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './router/book.router.js';
import userRoute from './router/user.router.js';
import cors from "cors";
import contactRoute from './router/contact.router.js';
import path from 'path'; // Import the path module

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/api", contactRoute);

// Serve static files from the frontend build folder
app.use(express.static(path.join(process.cwd(), "../Frontend/dist")));

// Serve the frontend's index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "../Frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})