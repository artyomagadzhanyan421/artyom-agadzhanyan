import { useRef } from "react";
import emailjs from "emailjs-com";

import "../styles/Contact.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_svnvybe',   
            'template_d6lowfa',  
            form.current,
            'ZSiixRao-LhNSGWc8'    
        ).then(
            (result) => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message. Please try again.");
                console.error(error.text);
            }
        );
    };

    return (
        <div className="Process" id="contact">
            <center>
                <div className="sub-head">
                    <span style={{ color: "rgba(255, 255, 255, .7)" }}>Contact</span>
                </div>
                <p className="heading section">What would you like to discuss for today?</p>
                <p className="pitch">Whether you have questions or are ready to discuss your business, I'm here to help. Reach out today.</p>
            </center>
            <form ref={form} onSubmit={sendEmail}> 
                <input type="text" name="user_name" placeholder="Your name" required />
                <input type="email" name="user_email" placeholder="Email address" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Hi, I'm reaching out for..." required></textarea>
                <button type="submit" className="nav-link">
                    <span>Submit</span>
                    <i className='bx bx-send' style={{ fontSize: 16 }}></i>
                </button>
            </form>
        </div>
    )
}

export default Contact