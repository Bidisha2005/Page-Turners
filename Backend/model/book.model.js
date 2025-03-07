import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // Assuming it's a URL
    title: { type: String, required: true },
    pdfUrl:{ type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
