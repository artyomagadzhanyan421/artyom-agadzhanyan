import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <div className="avatar">
                    <img src="/artyom.jpg" alt="image" />
                    <span>Artyom A.</span>
                </div>
                <ul>
                    <li><a href="#">Who I'am?</a></li>
                    <li><a href="#">Process</a></li>
                    <li><a href="#">Showcase</a></li>
                    {/* <li><a href="#">Skills</a></li> */}
                    <li><a href="#">Skills</a></li>
                    {/* <li><a href="#">Experience</a></li> */}
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href="#" className="nav-link">
                    <span>Get in touch</span>
                    <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                </a>
            </nav>
        </div>
    )
}

export default Navbar