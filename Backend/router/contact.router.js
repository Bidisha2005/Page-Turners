import express from "express";
import { submitContactForm, getAllMessages } from "../controller/contact.Controller.js";

const router = express.Router();

// Route to submit contact form
router.post("/contact", submitContactForm);

// Route to retrieve all messages
router.get("/contact/messages", getAllMessages);

export default router;
