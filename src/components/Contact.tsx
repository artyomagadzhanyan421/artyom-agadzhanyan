import "../styles/Contact.css";

function Contact() {
    return (
        <div className="Process" id="contact">
            <center>
                <div className="sub-head">
                    <span style={{ color: "rgba(255, 255, 255, .7)" }}>Contact</span>
                </div>
                <p className="heading section">What would you like to discuss for today?</p>
                <p className="pitch">Whether you have questions or are ready to discuss your business, I'm here to help. Reach out today.</p>
            </center>
            <form>
                <input type="text" placeholder="John Smith" required />
                <input type="email" placeholder="artyom@gmail.com" required />
                <textarea placeholder="Hi, I'm reaching out for..." required></textarea>
                <button className="nav-link">
                    <span>Submit</span>
                    <i className='bx bx-send' style={{ fontSize: 16 }}></i>
                </button>
            </form>
        </div>
    )
}

export default Contact