import "../styles/Plans.css";

function Plans() {
    return (
        <div className='Process' id="plans">
            <center>
                <div className="sub-head">
                    <span style={{ color: 'rgba(255, 255, 255, .7)' }}>Plans</span>
                </div>
                <p className="heading section">Flexible plans for growth</p>
                <p className="pitch">Transparent pricing designed to fit your requirements.</p>
            </center>
            <div className="plans">
                <div className="plan">
                    <div className="plan-type">
                        <i className='bx bx-trophy'></i>
                        <p>Basic</p>
                    </div>
                    <p className="price">$100<span>/price</span></p>
                    <p className="pitch-plan">Essential for individuals or local businesses needing a simple online presence.</p>
                    <a href="https://calendar.app.google/K3gVRUCWCoKaFfEe9" target="_blank" className="nav-link plan-link">
                        <span>Go with this plan</span>
                        <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                    </a>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>1 responsive landing page</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Custom layout (React.js)</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Mobile-friendly design</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>3 round of revisions</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Delivery from 3–5 days</span>
                        </li>
                    </ul>
                </div>
                <div className="plan">
                    <div className="plan-type">
                        <i className='bx bx-rocket'></i>
                        <p>Professional</p>
                    </div>
                    <p className="price">$300<span>/price</span></p>
                    <p className="pitch-plan">Best for businesses ready for a multi-page site to attract customers.</p>
                    <a href="https://calendar.app.google/K3gVRUCWCoKaFfEe9" target="_blank" className="nav-link plan-link">
                        <span>Go with this plan</span>
                        <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                    </a>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Up to 10 pages</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Responsive and SEO-ready</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>React.js for modern UI</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>4 rounds of revisions</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Delivery from 5–7 days</span>
                        </li>
                    </ul>
                </div>
                <div className="plan">
                    <div className="plan-type">
                        <i className='bx bx-diamond'></i>
                        <p>Enterprises</p>
                    </div>
                    <p className="price">$600<span>/price</span></p>
                    <p className="pitch-plan">Suitbale for businesses wanting a custom, scalable website with backend.</p>
                    <a href="https://calendar.app.google/K3gVRUCWCoKaFfEe9" target="_blank" className="nav-link plan-link">
                        <span>Go with this plan</span>
                        <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                    </a>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Up to 20 pages</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>React.js + backend or CMS</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>SEO optimization + fast load</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>5 rounds of revisions</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Delivery from 7–10 days</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Plans