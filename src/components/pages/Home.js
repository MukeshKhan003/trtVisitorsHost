import React from 'react';
import '../style/Home.css';
import Advertisement from '../inc/Advertisement';
import muruganHome from '../asset/Murugan.jpg';
import ammanHome from '../asset/amman.jpg';
import childparkHome from '../asset/child-park.jpg';
import aanchaneyaHome from '../asset/aanchaneya.jpg';
import kanchanagiriHillsHome from '../asset/kancha_hills.jpg';
import lordShivaHome from '../asset/lordshiva.jpg';

function Home() {
    return (
        <div>
            <Advertisement/>
            
            <div className = "sectionHome">
                <div class="container text-center">
                    <h1 class="text-dark">TIRUTTANI FAMOUS PLACES</h1>
                </div>
                <div className = "container">
                    <div className = "row rowOne">
                        <div className = "col-md-4">
                            <div className = "card">
                                <div className = "card-img">
                                    <img src={muruganHome} alt="Member" class="img-fluid  p-4"/>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-8">
                            <div className = "card big">
                                <div class="card-body">
                                    <h5 class="card-title cardText">Arulmigu Subramaniya Swamy Temple</h5>
                                    <p class="card-text">Arulmigu Subramaniya Swamy Temple is a Hindu temple, on the hill of Thiruttani, Tiruvallur district, Tamil Nadu, India, dedicated to Lord
                                        Muruga. The hill has 365 steps indicating 365 days of the year. It is fifth among the six abodes of Lord Muruga (Aarupadai veedugal) The
                                        other five are Palani Murugan Temple, Swamimalai Murugan Temple, Thiruchendur Murugan Temple, Thiruparankundram and
                                        Pazhamudircholai Murugan Temple.</p>
                                    <a href="/" class="btn btn-primary">Visit More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row rowOne">
                        <div className = "col-md-8">
                            <div className = "card big">
                                <div class="card-body">
                                    <h5 class="card-title cardText">18th Centuery Amman Temple</h5>
                                    <p class="card-text">Amman Temple is a Hindu temple, on the hill of Thiruttani, Tiruvallur district, Tamil Nadu, India, dedicated to Lord
                                        Muruga. The hill has 365 steps indicating 365 days of the year. It is fifth among the six abodes of Lord Muruga (Aarupadai veedugal) The
                                        other five are Palani Murugan Temple, Swamimalai Murugan Temple, Thiruchendur Murugan Temple, Thiruparankundram and
                                        Pazhamudircholai Murugan Temple. It's Powerful amman...</p>
                                    <a href="/" class="btn btn-primary">Visit More</a>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card">
                                <div className = "card-img">
                                    <img src={ammanHome} alt="Member" class="img-fluid  p-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row rowOne">
                        <div className = "col-md-4">
                            <div className = "card">
                                <div className = "card-img">
                                    <img src={childparkHome} alt="Member" class="img-fluid  p-4"/>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-8">
                            <div className = "card big">
                                <div class="card-body">
                                    <h5 class="card-title cardText">Children's Park</h5>
                                    <p class="card-text">Children's Park is a Hindu temple, on the hill of Thiruttani, Tiruvallur district, Tamil Nadu, India, dedicated to Lord
                                        Muruga. The hill has 365 steps indicating 365 days of the year. It is fifth among the six abodes of Lord Muruga (Aarupadai veedugal) The
                                        other five are Palani Murugan Temple, Swamimalai Murugan Temple, Thiruchendur Murugan Temple, Thiruparankundram and
                                        Pazhamudircholai It's Very famous park of Thiruttani...</p>
                                    <a href="/" class="btn btn-primary">Visit More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row rowOne">
                        <div className = "col-md-8">
                            <div className = "card big">
                                <div class="card-body">
                                    <h5 class="card-title cardText">Sholingar Aanchaneya Temple</h5>
                                    <p class="card-text">Aanchaneya Temple is a Hindu temple, on the hill of Thiruttani, Tiruvallur district, Tamil Nadu, India, dedicated to Lord
                                        Muruga. The hill has 365 steps indicating 365 days of the year. It is fifth among the six abodes of Lord Muruga (Aarupadai veedugal) The
                                        other five are Palani Murugan Temple, Swamimalai Murugan Temple, Thiruchendur Murugan Temple, Thiruparankundram and
                                        Pazhamudircholai Murugan Temple. It's Powerful amman...</p>
                                    <a href="/" class="btn btn-primary">Visit More</a>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card">
                                <div className = "card-img">
                                    <img src={aanchaneyaHome} alt="Member" class="img-fluid  p-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row rowOne">
                        <div className = "col-md-4">
                            <div className = "card">
                                <div className = "card-img">
                                    <img src={kanchanagiriHillsHome} alt="Member" class="img-fluid  p-4"/>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-8">
                            <div className = "card big">
                                <div class="card-body">
                                    <h5 class="card-title cardText">Kaanchanagiri Hills</h5>
                                    <p class="card-text">Kaanchanagiri Hills is a Hindu temple, on the hill of Thiruttani, Tiruvallur district, Tamil Nadu, India, dedicated to Lord
                                        Muruga. The hill has 365 steps indicating 365 days of the year. It is fifth among the six abodes of Lord Muruga (Aarupadai veedugal) The
                                        other five are Palani Murugan Temple, Swamimalai Murugan Temple, Thiruchendur Murugan Temple, Thiruparankundram and
                                        Pazhamudircholai It's Very famous park of Thiruttani...</p>
                                    <a href="/" class="btn btn-primary">Visit More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row rowOne">
                        <div className = "col-md-8">
                            <div className = "card big">
                                <div class="card-body">
                                    <h5 class="card-title cardText">Loard Siva Temple</h5>
                                    <p class="card-text">Lord Shivan Temple is a Hindu temple, on the hill of Thiruttani, Tiruvallur district, Tamil Nadu, India, dedicated to Lord
                                        Muruga. The hill has 365 steps indicating 365 days of the year. It is fifth among the six abodes of Lord Muruga (Aarupadai veedugal) The
                                        other five are Palani Murugan Temple, Swamimalai Murugan Temple, Thiruchendur Murugan Temple, Thiruparankundram and
                                        Pazhamudircholai Murugan Temple. It's Powerful amman...</p>
                                    <a href="/" class="btn btn-primary">Visit More</a>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div className = "card">
                                <div className = "card-img">
                                    <img src={lordShivaHome} alt="Member" class="img-fluid  p-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            
        </div>
    )
}

export default Home
