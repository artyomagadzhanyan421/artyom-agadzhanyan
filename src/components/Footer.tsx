import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div>
          <div className="sub-head">
            <img src="/artyom.jpg" alt="image" />
            <span>Artyom Agadzhanyan</span>
          </div>
          <span className="footer-span">Your developer in web solutions, creating smarter systems for smarter businesses.</span>
          <div className="socials">
            <a href="https://www.linkedin.com/in/artyom-agadzhanyan-78a015352/" target="_blank"><i className='bx bxl-linkedin'></i></a>
            <a href="https://wa.link/us57bp" target="_blank"><i className='bx bxl-whatsapp'></i></a>
            <a href="https://t.me/artyomagadzhanyan" target="_blank"><i className='bx bxl-telegram'></i></a>
            <a href="https://github.com/artyomagadzhanyan421" target="_blank"><i className='bx bxl-github'></i></a>
          </div>
        </div>
        <div className="footer-div">
          <ul className="footer-links">
            <li>Sections</li>
            <li><a href="#process">Process</a></li>
            <li><a href="#showcase">Showcase</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
          <ul className="footer-links">
            <li>Other</li>
            <li><a href="/Artyom_Agadzhanyan.pdf" download>Resume</a></li>
            <li><a href="mailto:artyom.agadzhanyan421@gmail.com">Email</a></li>
            <li><a href="https://calendar.app.google/K3gVRUCWCoKaFfEe9" target="_blank">Book a call</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer