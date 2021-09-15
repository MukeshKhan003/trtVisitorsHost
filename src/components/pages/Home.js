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
            <section class="section-2 container-fluid">
                <div class="container text-center">
                    <h1 class="text-dark">TIRUTTANI FAMOUS PLACES</h1>
                </div>
                <div class="team row">
                    <div class="col-md-4 col-sm-12 text-center">
                        <div class="card">
                            <img src={muruganHome} alt="Member" class="img-fluid  p-4"/>
                            <div class="card-body">
                            <h5 class="card-title">Arulmigu Subramaniya Swamy Temple</h5>
                            <p class="card-text">Arulmigu Subramaniya Swamy Temple is fifth among the six abodes of Lord Muruga (Aarupadai veedugal)...</p>
                            <a href="/" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 text-center">
                        <div class="card">
                            <img src={ammanHome} alt="Member" class="img-fluid  p-4"/>
                            <div class="card-body">
                                <h5 class="card-title">18th Centuery Amman Temple</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 text-center">
                        <div class="card">
                            <img src={childparkHome} alt="Member" class="img-fluid  p-4"/>
                            <div class="card-body">
                                <h5 class="card-title">Children's Park</h5>
                                <p class="card-text">Tiruttani Surrounding is one of the best Park in Childrens Park for there in Tiruttani.</p>
                                <a href="/" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-2 container-fluid">
                <div class="team row">
                    <div class="col-md-4 justify-content-center col-sm-12 text-center">
                        <div class="card">
                            <img src={aanchaneyaHome} alt="Member" class="img-fluid  p-4"/>
                            <div class="card-body">
                                <h5 class="card-title">Sholingar Aanchaneya Temple</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 justify-content-center col-sm-12 text-center">
                        <div class="card">
                            <img src={kanchanagiriHillsHome} alt="Member" class="img-fluid  p-4"/>
                            <div class="card-body">
                                <h5 class="card-title">Kaanchanagiri Hills</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 justify-content-center col-sm-12 text-center">
                        <div class="card">
                            <img src={lordShivaHome} alt="Member" class="img-fluid  p-4"/>
                            <div class="card-body">
                                <h5 class="card-title">Loard Siva Temple</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    )
}

export default Home
