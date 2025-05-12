import "../styles/Process.css";

function Process() {
    return (
        <div className='Process' id="process">
            <center>
                <div className="sub-head">
                    <span style={{ color: 'rgba(255, 255, 255, .7)' }}>Process</span>
                </div>
                <p className="heading section">Your path to excellence</p>
                <p className="pitch">A simple, effective approach to deliver excellence.</p>
            </center>
            <div className="process">
                <div className="phase">
                    <i className="bx bx-target-lock"></i>
                    <h3>Discovery & Analysis</h3>
                    <span>I dive deep into your needs, exploring ideas and defining strategies for long-term success.</span>
                </div>
                <div className="phase">
                    <i className="bx bxs-dashboard"></i>
                    <h3>Development & Test</h3>
                    <span>I craft tailored solutions for your goals and rigorously test them for top-notch reliability.</span>
                </div>
                <div className="phase">
                    <i className="bx bxs-planet"></i>
                    <h3>Launch & Maintain</h3>
                    <span>I deploy your solution seamlessly and ensure its continued performance with ongoing care.</span>
                </div>
            </div>
        </div>
    )
}

export default Process