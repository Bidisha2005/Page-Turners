import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books); // Fixed typo: changed 'rex' to 'res'
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Server error", error });
    }
};
