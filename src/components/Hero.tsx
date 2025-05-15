import "../styles/Hero.css";

function Hero() {
    return (
        <div className="Hero">
            <center>
                <div className="sub-head">
                    <img src="/artyom.jpg" alt="image" />
                    <span>Hi, my name is Artyom!</span>
                </div>
                <p className="heading">Transforming Workflows Into Interactive Websites</p>
                <p className="pitch">I’m a front-end developer who specialized in building stylish, scalable web apps with React and TypeScript.</p>
                <div className="links">
                    <a href="/Artyom_Agadzhanyan.pdf" download className="nav-link">
                        <span>My Resume</span>
                        <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                    </a>
                    <a href="#plans" className="nav-link">
                        <span>See Plans</span>
                    </a>
                </div>
                <div className="stack">
                    <i className='bx bxl-react'></i>
                    <i className='bx bxl-typescript' ></i>
                    <i className='bx bxl-nodejs'></i>
                    <i className='bx bxl-mongodb' ></i>
                    <i className='bx bxl-redux'></i>
                </div>
            </center>
        </div>
    )
}

export default Hero