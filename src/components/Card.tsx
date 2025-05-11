import "../styles/Card.css";

function Card() {
    return (
        <div className="Card">
            <div className="avatar-flex">
                <div className="avatar">
                    <img src="/artyom.jpg" alt="artyom" />
                    <div>
                        <p className="name">Hi, I'm Artyom!</p>
                        <p className="job">Web Developer</p>
                    </div>
                </div>
                <div className="available">
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgb(110, 212, 62)" }} />
                    <span>Available for work</span>
                </div>
            </div>
            <div className="socials">
                <a href="#">
                    <i className='bx bxl-linkedin-square'></i>
                    <span>LinkedIn</span>
                </a>
                <a href="#">
                    <i className='bx bxl-whatsapp'></i>
                    <span>WhatsApp</span>
                </a>
                <a href="#">
                    <i className='bx bxl-telegram'></i>
                    <span>Telegram</span>
                </a>
            </div>
            <div className="heading">
                <span>Establish websites that outrank, outlast, outshine</span>
            </div>
            <div className="socials two">
                <a href="#">
                    <i className='bx bx-folder-open'></i>
                    <span>Dive Into My Work</span>
                </a>
                <a href="#">
                    <i className='bx bx-calendar-plus'></i>
                    <span>Crash My Calendar</span>
                </a>
            </div>
        </div>
    )
}

export default Card