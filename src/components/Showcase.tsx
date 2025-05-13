import "../styles/Showcase.css";

function Showcase() {
    return (
        <div className="Process" id="showcase">
            <center>
                <div className="sub-head">
                    <span style={{ color: "rgba(255, 255, 255, .7)" }}>Showcase</span>
                </div>
                <p className="heading section">Library of works</p>
                <p className="pitch">Tailored solutions for different type of businesses and cases.</p>
            </center>
            <div className="process">
                <div className="project">
                    <img src="/showcase/forge.png" alt="image" />
                    <h3>Forge Marketing</h3>
                    <span>Marketing website with intuitive navigation, and responsive design.</span>
                    <div className="links project-link">
                        <a href="https://sales-project-theta.vercel.app/" target="_blank" className="nav-link">
                            <span>Live demo</span>
                            <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                        </a>
                        <a href="https://github.com/artyomagadzhanyan421/sales-project" target="_blank" className="nav-link">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <img src="/showcase/webify.png" alt="image" />
                    <h3>Webify Agency</h3>
                    <span>Website project built specifically for digital design agencies.</span>
                    <div className="links project-link">
                        <a href="https://agency-project-nu.vercel.app/" target="_blank" className="nav-link">
                            <span>Live demo</span>
                            <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                        </a>
                        <a href="https://github.com/artyomagadzhanyan421/agency-project" target="_blank" className="nav-link">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <img src="/showcase/cipher.png" alt="image" />
                    <h3>Cybersecurity Website</h3>
                    <span>Modern cybersecurity website designed for tech-savvy businesses.</span>
                    <div className="links project-link">
                        <a href="https://cyber-project-beryl.vercel.app/" target="_blank" className="nav-link">
                            <span>Live demo</span>
                            <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                        </a>
                        <a href="https://github.com/artyomagadzhanyan421/cyber-project" target="_blank" className="nav-link">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <img src="/showcase/lumify.png" alt="image" />
                    <h3>Lumify SAAS</h3>
                    <span>Modern website in a sleek dark theme, perfect for tech companies and startups.</span>
                    <div className="links project-link">
                        <a href="https://tech-product.vercel.app/" target="_blank" className="nav-link">
                            <span>Live demo</span>
                            <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                        </a>
                        <a href="https://github.com/artyomagadzhanyan421/tech-product" target="_blank" className="nav-link">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <img src="/showcase/artyom.png" alt="image" />
                    <h3>Portfolio Website</h3>
                    <span>Portfolio website to share information about services and projects.</span>
                    <div className="links project-link">
                        <a href="https://artyom-portfolio.vercel.app/" target="_blank" className="nav-link">
                            <span>Live demo</span>
                            <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                        </a>
                        <a href="https://github.com/artyomagadzhanyan421/tech-product" target="_blank" className="nav-link">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <img src="/showcase/bitebook.png" alt="image" />
                    <h3>BiteBook Application</h3>
                    <span>Culinary web application using React and TypeScript.</span>
                    <div className="links project-link">
                        <a href="https://tech-product.vercel.app/" target="_blank" className="nav-link">
                            <span>Live demo</span>
                            <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                        </a>
                        <a href="https://github.com/artyomagadzhanyan421/tech-product" target="_blank" className="nav-link">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase