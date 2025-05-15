function Banner() {
    return (
        <div className="Process">
            <div className="overlay"></div>
            <center>
                <div className="sub-head">
                    <img src="/artyom.jpg" alt="image" />
                    <span>Artyom Agadzhanyan</span>
                </div>
                <p className="heading" style={{ maxWidth: 450 }}>Let’s talk about your next big move</p>
                <p className="pitch" style={{ maxWidth: 300 }}>Hop on a call with us to see how our services can accelerate your growth.</p>
                <div className="links">
                    <a href="https://calendar.app.google/K3gVRUCWCoKaFfEe9" target="_blank" className="nav-link">
                        <span>Schedule a quick call</span>
                        <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                    </a>
                </div>
                <p style={{ marginTop: 12.5, color: "rgba(255, 255, 255, .7)" }}>It's <span style={{ color: "white" }}>Free</span></p>
            </center>
        </div>
    )
}

export default Banner