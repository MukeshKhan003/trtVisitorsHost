import React from 'react'
// import Advertisement from '../inc/Advertisement';
import addPush from '../asset/add-push.jpg'
import '../style/AddPushPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHackerNewsSquare} from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare, faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(
    faHackerNewsSquare,
    faUserSecret,
    faPhoneSquare
)

function AddPush() {
    return (
        <div>
            {/* <Advertisement/> */}
            <div class="sectionAdd">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="pray">
                                <img src={addPush} alt="Member" class="img-fluid  p-4"/>
                            </div>
                        </div>
                        <div class="col-md-6 addpush">
                            <div class="panel text-left">
                                <h1>Terms And Condition</h1>
                                <p class="pt-4">
                                    Your Advertisement it's Increaseyour Product and Company wise Growthing
                                </p>
                                <p>
                                    Once, your Addvertisement published after Customers automed increased.
                                </p>
                                <p>
                                    Once You have to pay Amount it's not returned Your Amount.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="section-2 container-fluid p-0">
                <div class="purchase text-center">
                    <h1>Welcome your Advertise and Choose Your Plans !</h1>
                    <div class="cards">
                        <div class="d-flex flex-row justify-content-center flex-wrap">
                            <div class="card">
                                <div class="card-body">
                                    <div class="title">
                                        <h5 class="card-title">ONE MONTH</h5>
                                    </div>
                                    <p class="card-text">
                                        30 - Days You have to Push your Advertisement in Tirtuttani-Visitors website.
                                    </p>
                                    <div class="pricing">
                                        <h1>Rs.99</h1>
                                        <a href="/" class="btn btn-dark px-5 py-2 mb-5">Click Now</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="title">
                                        <h5 class="card-title">SIX MONTHS</h5>
                                    </div>
                                    <p class="card-text">
                                        180 - Days You have to Push your Advertisement in Tirtuttani-Visitors website.
                                    </p>
                                    <div class="pricing">
                                        <h1>Rs.499</h1>
                                        <a href="/" class="btn btn-dark px-5 py-2 mb-5">Click Now</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="title">
                                        <h5 class="card-title">ONE YEAR</h5>
                                    </div>
                                    <p class="card-text">
                                        365 - Days You have to Push your Advertisement in Tirtuttani-Visitors website.
                                    </p>
                                    <div class="pricing">
                                        <h1>Rs.999</h1>
                                        <a href="/" class="btn btn-dark px-5 py-2 mb-5">Click Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-3 container-fluid p-0 text-center">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <h1>About Advertisement Content Push</h1>
                    <p>Most of all Advertisement Contents and most decrative designs also we ave to Push. And best Price Rate wise we have to Provide. And Best Services and Support wise Provide we our Best. Then, Best Offers, Benifits also there, Please Contact</p>
                </div>
            </div>
            <div class="platform row">
                <div class="col-md-6 col-sm-12 text-right">
                    <div class="desktop shadow-lg">
                        <div class="d-flex flex-row justify-content-center">
                            {/* <i class="fa fa-user-secret fa-3x py-2 pr-3"></i> */}
                            <FontAwesomeIcon icon={faUserSecret} className="fa-3x py-2 pr-3" size="3x"/>
                            <div class="text text-left">
                                <h3 class="pt-1 m-0">
                                    Contact Us
                                </h3>
                                <p class="p-0 m-0 text-center">
                                    Developers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 text-left">
                    <div class="desktop shadow-lg">
                        <div class="d-flex flex-row justify-content-center">
                            {/* <i class="fa fa-phone-square fa-3x py-2 pr-3"></i> */}
                            <FontAwesomeIcon icon={faPhoneSquare} className="fa-3x py-2 pr-3" size="3x"/>
                            <div class="text text-left">
                                <h3 class="pt-1 m-0">
                                    Contact Us
                                </h3>
                                <p class="p-0 m-0 text-center">
                                    Website
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section class="section-5">
            <h1 class="contact-us">Contact Us</h1>
                <div class="container">
                    <div class="contact-form row">
                        <div class="form-field col-lg-6">
                            <input id="name" class="input-text" type="text" placeholder="Mukesh" />
                            <label for="name" class="label">first name</label>
                        </div>
                        <div class="form-field col-lg-6">
                            <input id="name" class="input-text" type="text" placeholder="Khan" />
                            <label for="name" class="label">last name</label>
                        </div>
                        <div class="form-field col-lg-6">
                            <input id="email" class="input-text" type="email" placeholder="mukesh@gmail.com" />
                            <label for="email" class="label">email</label>
                        </div>
                        <div class="form-field col-lg-6">
                            <input id="company" class="input-text" type="text" placeholder="JP Contracts" />
                            <label for="company" class="label">Company Name</label>
                        </div>
                        <div class="form-field col-lg-6">
                            <input id="phone" class="input-text" type="text" placeholder="+918525844***" />
                            <label for="phone" class="label">contact number</label>
                        </div>
                        <div class="form-field col-lg-6">
                            <select name="cars" class="input-text">
                                <option value="fp">Famous Places</option>
                                <option value="fs">Food Streets</option>
                                <option value="ed">Educations</option>
                                <option value="ss">Shopping Stores</option>
                                <option value="en">Entertainement Areas</option>
                                <option value="dev">Website Developements</option>
                            </select>
                            <label for="message" class="label">Product Category</label>
                        </div>
                        <div class="form-field col-lg-12">
                            <input id="message" class="input-text" type="text" />
                            <label for="message" class="label">message</label>
                        </div>
                        
                        <div class="form-field col-lg-12">
                            <input class="submit-btn"  type="submit" value="submit" />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default AddPush
