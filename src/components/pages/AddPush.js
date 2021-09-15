import React from 'react'
// import Advertisement from '../inc/Advertisement';
import addPush from '../asset/add-push.jpg'
import '../style/AddPushPage.css';

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
                        <div class="col-md-6">
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
            
        </div>
    )
}

export default AddPush
