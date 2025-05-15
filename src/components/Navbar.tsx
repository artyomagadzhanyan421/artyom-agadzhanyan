import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const toggleFunc = () => setToggle(!toggle);

    return (
        <div className="Navbar">
            <nav>
                <a href="#" className="avatar">
                    <img src="/artyom.jpg" alt="image" />
                    <span>Artyom A.</span>
                </a>
                <ul className={toggle ? "toggle" : ""}>
                    <li><a href="#process" onClick={toggleFunc}>Process</a></li>
                    <li><a href="#showcase" onClick={toggleFunc}>Showcase</a></li>
                    <li><a href="#plans" onClick={toggleFunc}>Plans</a></li>
                    <li><a href="#contact" onClick={toggleFunc}>Contact</a></li>
                    <li><a href="#faqs" onClick={toggleFunc}>FAQs</a></li>
                    <li className='touch'><a href="#" onClick={toggleFunc}>Get in touch</a></li>
                </ul>
                <a href="#" className="nav-link">
                    <span>Get in touch</span>
                    <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                </a>
                <i className="bx bx-grid-alt" onClick={toggleFunc}></i>
            </nav>
        </div>
    )
}

export default Navbar