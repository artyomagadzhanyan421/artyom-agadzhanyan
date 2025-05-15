import { useState } from "react";
import "../styles/Faqs.css";

const faqsData = [
    {
        question: "What is your typical project timeline?",
        answer: "The timeline for a project typically ranges from 4 to 8 days, depending on the scope and complexity. After an initial consultation, I’ll provide a detailed timeline with key milestones so you know what to expect at each stage.",
    },
    {
        question: "Do you offer ongoing maintenance and support?",
        answer: "Yes, I offer ongoing maintenance and support packages to ensure your website stays updated and runs smoothly. This includes updates, bug fixes, and any necessary changes as your business grows.",
    },
    {
        question: "Can you work with existing brand guidelines?",
        answer: "Absolutely! I’m experienced in working with existing brand guidelines to ensure your website aligns with your established identity. I can seamlessly incorporate your branding while enhancing your digital presence.",
    },
    {
        question: "How do you handle revisions and feedback?",
        answer: "Revisions and feedback are a crucial part of the process. I typically offer a set number of revision rounds to refine the design based on your input. I ensure clear communication throughout, so your vision is brought to life effectively.",
    },
    {
        question: "How do I get started?",
        answer: "Just reach out! We’ll discuss your needs, create a plan, and get to work on your website.",
    },
];

function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="Process" id="faqs">
            <center>
                <div className="sub-head">
                    <span style={{ color: "rgba(255, 255, 255, .7)" }}>FAQs</span>
                </div>
                <p className="heading section">I'm here to help</p>
                <p className="pitch">FAQs designed to provide the information you need.</p>
            </center>
            <div className="faqs">
                {faqsData.map((faq, index) => (
                    <div className="faq" key={index} onClick={() => toggleFaq(index)}>
                        <div className="faq-flex">
                            <p>{faq.question}</p>
                            <i className={`bx bx-chevron-down ${openIndex === index ? "rotate" : ""}`}></i>
                        </div>
                        <span className={openIndex === index ? "faq-desc show" : "faq-desc"}>
                            {faq.answer}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;