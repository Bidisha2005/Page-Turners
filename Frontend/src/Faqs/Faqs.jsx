import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const faqs = [
  {
    question: "What are the best resources for engineering students?",
    answer:
      "Some great resources include online platforms like Coursera, Udemy, NPTEL, and YouTube tutorials. Books like 'Engineering Mathematics' by B.S. Grewal and coding platforms like LeetCode and GeeksforGeeks are also helpful.",
  },
  {
    question: "How can I improve my coding skills?",
    answer:
      "Practice regularly on platforms like LeetCode, CodeChef, and HackerRank. Work on personal projects, participate in hackathons, and contribute to open-source projects.",
  },
  {
    question: "What are some good internship opportunities for engineers?",
    answer:
      "Engineering students can apply for internships on platforms like Internshala, LinkedIn, and company career pages. Research internships, software development roles, and core engineering internships are great options.",
  },
  {
    question: "How do I prepare for engineering exams effectively?",
    answer:
      "Focus on understanding concepts rather than memorizing. Solve previous years' question papers, create a study schedule, and use online tutorials for difficult topics.",
  },
  {
    question: "What programming languages should I learn?",
    answer:
      "It depends on your field, but generally, C, C++, Python, and Java are widely used. For web development, JavaScript is essential. For AI/ML, Python is the best choice.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-900 dark:text-white p-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">FAQs for Engineering Students</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-600 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-4 dark:bg-gray-800 rounded-md shadow-md focus:outline-none"
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-700 rounded-md mt-2">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FAQPage;
