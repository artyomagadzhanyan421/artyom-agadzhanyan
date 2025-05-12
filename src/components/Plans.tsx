import "../styles/Plans.css";

function Plans() {
    return (
        <div className='Process' id="plans">
            <center>
                <div className="sub-head">
                    <span style={{ color: 'rgba(255, 255, 255, .7)' }}>Plans</span>
                </div>
            </center>
            <center>
                <p className="heading section">Flexible plans for growth</p>
            </center>
            <center>
                <p className="pitch">Transparent pricing designed to fit your requirements.</p>
            </center>
            <div className="plans">
                <div className="plan">
                    <div className="plan-type">
                        <i className='bx bx-trophy'></i>
                        <p>Basic</p>
                    </div>
                    <p className="price">$480<span>/month</span></p>
                    <p className="pitch-plan">Essential tools and features for starting your journey with ease.</p>
                    <a href="#" className="nav-link plan-link">
                        <span>Go with this plan</span>
                        <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                    </a>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Baisc workflow automation</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Basic chatbot development</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>60 content request</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>E-mail support</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>1 consultation a month</span>
                        </li>
                    </ul>
                </div>
                <div className="plan">
                    <div className="plan-type">
                        <i className='bx bx-rocket'></i>
                        <p>Professional</p>
                    </div>
                    <p className="price">$960<span>/month</span></p>
                    <p className="pitch-plan">Advanced capabilities designed to meet growing business needs.</p>
                    <a href="#" className="nav-link plan-link">
                        <span>Go with this plan</span>
                        <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                    </a>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Advance workflow automation</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Advance chatbot development</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>150 content request</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>E-mail support</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>2 consultation a month</span>
                        </li>
                    </ul>
                </div>
                <div className="plan">
                    <div className="plan-type">
                        <i className='bx bx-trophy'></i>
                        <p>Enterprises</p>
                    </div>
                    <p className="price">Custom</p>
                    <p className="pitch-plan">Comprehensive solutions tailored for large-scale business success.</p>
                    <a href="#" className="nav-link plan-link">
                        <span>Go with this plan</span>
                        <i className='bx bx-link-external' style={{ fontSize: 16 }}></i>
                    </a>
                    <ul>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Custom workflow automation</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Custom chatbot development</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Unlimited content request</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>24hr priority support</span>
                        </li>
                        <li>
                            <i className='bx bx-check'></i>
                            <span>Unlimited consultation a month</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Plans