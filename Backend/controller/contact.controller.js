import Contact from "../model/contact.model.js"; // Import the Contact model

// Controller to handle contact form submission
export const submitContactForm = async (req, res) => {
    try {
        const { name, yearBranch, email, message } = req.body;

        // Check if required fields are provided
        if (!name || !yearBranch || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new contact entry
        const createdContact = new Contact({
            name,
            yearBranch,
            email,
            message,
        });

        await createdContact.save(); // Save to database

        res.status(201).json({
            message: "Message sent successfully",
            contact: {
                _id: createdContact._id,
                name: createdContact.name,
                yearBranch: createdContact.yearBranch,
                email: createdContact.email,
                message: createdContact.message,
                createdAt: createdContact.createdAt,
            },
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error (submitContactForm)" });
    }
};

// Controller to get all contact messages
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            message: "Messages retrieved successfully",
            messages,
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error (getAllMessages)" });
    }
};
