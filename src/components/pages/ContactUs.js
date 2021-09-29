import React from 'react'
import '../style/ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mukeshKhan from '../asset/mukeshMain.jpg'
import sekar from '../asset/sekarJelakam.jpg'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHackerNewsSquare, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarker, faPhone, faPhoneSquare, faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(
    faHackerNewsSquare,
    faUserSecret,
    faPhoneSquare
)

function ContactUs() {
    return (
        <div>
        <section class="head pb-5">
            <div class="container py-5">
                <div class="card">
                    <div class="card-body">
                        <h1 class="font-weight-light text-center py-3">fill your details</h1>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="row pt-3">
                                    <div class="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                                        <span className = "spanOne"><FontAwesomeIcon icon={faMapMarker}/></span>
                                        
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-9 col-9">
                                        <h3 class="font-weight-light">Find Us at Office</h3>
                                        <p>
                                            No: 662, Main Street, Indiranagar 
                                            Perungalathur, Ranipet,
                                            Tamil Nadu, India.
                                        </p>
                                    </div>
                                </div>
                                <div class="row pt-3">
                                    <div class="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                                        
                                    <span className = "spanTwo"><FontAwesomeIcon icon={faPhone}/></span>
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-9 col-9">
                                        <h3 class="font-weight-light">Give us a Ring</h3>
                                        <p>
                                            Mukesh Khan 
                                            +91 8525844231 
                                            Mon-Sun 8.00 to 17.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6 col-md-12 col-sm-12 col-12 contactSty">
                                            <label>First Name</label>
                                            <input type="text" class="form-control contactForm" placeholder="First Name" />
                                        </div>
                                        <div class="form-group col-lg-6 col-md-12 col-sm-12 col-12 contactSty">
                                            <label>Last Name</label>
                                            <input type="text" class="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6 col-md-12 col-sm-12 col-12 contactSty">
                                            <label>Email</label>
                                            <input type="Email" class="form-control" placeholder="Email" />
                                        </div>
                                        <div class="form-group col-lg-6 col-md-12 col-sm-12 col-12 contactSty">
                                            <label for="message" class="label">Product Category</label>
                                            <select name="cars" class="form-control">
                                                <option value="fp">Famous Places</option>
                                                <option value="fs">Food Streets</option>
                                                <option value="ed">Educations</option>
                                                <option value="ss">Shopping Stores</option>
                                                <option value="en">Entertainement Areas</option>
                                                <option value="dev">Website Developements</option>
                                              </select>
                                            
                                        </div>
                                    </div>
                                    <label for="">Message</label>
                                    <textarea class="form-control mb-3" placeholder="Message" id="" cols="10" rows="5"></textarea>
                                    <button class="btn btn-primary float-right submit-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-6 container-fluid p-0 text-center">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <h1>We have to Push Advertisement Call 24*7</h1>
                </div>
            </div>
            <div class="platform row">
                <div class="col-md-3 col-sm-12 text-right">
                    <div class="desktop shadow-lg">
                        <div class="d-flex flex-row justify-content-center">
                            <FontAwesomeIcon icon={faPhone} className="fa-3x py-2 pr-3" size="3x"/>
                            <div class="text text-left">
                                <h3 class="pt-1 m-0">
                                    Call Now
                                </h3>
                                <p class="p-0 m-0 text-center">
                                    8525844231
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12 text-left">
                    <div class="desktop shadow-lg">
                        <div class="d-flex flex-row justify-content-center">
                            <FontAwesomeIcon icon={faWhatsapp} className="fa-3x py-2 pr-3" size="3x"/> 
                            <div class="text text-left">
                                <h3 class="pt-1 m-0">
                                    Whatsapp
                                </h3>
                                <p class="p-0 m-0 text-center">
                                    96559377889
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12 text-right">
                    <div class="desktop shadow-lg">
                        <div class="d-flex flex-row justify-content-center">
                            <FontAwesomeIcon icon={faTelegram} className="fa-3x py-2 pr-3" size="3x"/>
                            <div class="text text-left">
                                <h3 class="pt-1 m-0">
                                    Telegram
                                </h3>
                                <p class="p-0 m-0 text-center">
                                    8525844231
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12 text-right">
                    <div class="desktop shadow-lg">
                        <div class="d-flex flex-row justify-content-center">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-3x py-2 pr-3" size="3x"/>
                            <div class="text text-left">
                                <h3 class="pt-1 m-0">
                                    Mail
                                </h3>
                                <p class="p-0 m-0 text-center">
                                    trtvisitors@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-1">
            <div class="container-1 text-center">
                <h1 class="text-dark">Developers On This Website...</h1>
                <p class="text-secondary">Just Known <a href="/">Do You want Contact this Developers ?</a> </p>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-6">
                        <div class="pray">
                            {/* <img src="../assets/mukeshMain.jpg" alt="Pray"> */}
                            <img src={mukeshKhan} alt="Member" class="img-fluid  p-4"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel text-left">
                            <h1>MUKESH KHAN</h1>
                            <p class="pt-4">
                                Website Creation and Software Developer at working Tiruttani-Visitors.
                            </p>
                            <p>
                                Do You want any Website and Software Contact me.
                            </p>
                            <p>
                                G-Mail: mukeshkhan352@gmail.com
                            </p>
                            <p>
                                CEO at Tiruttani-Visitors
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-1">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-6">
                        <div class="pray">
                            <img src={sekar} alt="Member" class="img-fluid  p-4"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel text-left">
                            <h1>Shekhar JELAKHAM</h1>
                            <p class="pt-4">
                                Website Creation, Android Developer and Content Creator at working Tiruttani-Visitors.
                            </p>
                            <p>
                                Do You want any Website and Software Contact me.
                            </p>
                            <p>
                                G-Mail: shekarjelakam@gmail.com
                            </p>
                            <p>
                                COO at Tiruttani-Visitors
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default ContactUs
