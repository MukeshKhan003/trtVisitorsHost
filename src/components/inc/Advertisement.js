import React from 'react'
import '../style/AdvertiseComp.css'
import jewelleryAdd from '../asset/Jewelry-Add.jpg';
import schoolAdd from '../asset/School-add.jpg';
import dressAdd from '../asset/dress-add.jpg';

function Advertisement() {
    return (
        <div>
            <div className = "section-add pb-5">
                <div class="container text-center">
                    <h1 class="text-dark">Advertisement Push</h1>
                    <p class="text-secondary">Just Known <a href="/">Do You want Push Advertisement ?</a> </p>
                </div>
                <div class="row team m-auto">
                    <div class="col-md-4 justify-content-center col col-12 text-center">
                        <div class="card  mr-2 shadow-lg">
                            <div class="card-img-top">
                                <img src={jewelleryAdd} alt="Member" class="img-fluid  p-4"/>
                            </div>
                            <div class="card-body">
                                <div class="card-title">GRT JEWELRY</div>
                                <p class="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aut magnam eos maxime rem earum deserunt veniam corrupti expedita cum.
                                </p>
                                <a href="/" class="text-decoration-none text-blue">Go Somewhere</a>
                                <p class="text-black-50">CEO at This Website</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 justify-content-center col col-12 text-center">
                        <div class="card mr-2 shadow-lg">
                            <div class="card-img-top">
                                <img src={schoolAdd} alt="Member" class="img-fluid  p-4"/>
                            </div>
                            <div class="card-body">
                                <div class="card-title">GRT JEWELRY</div>
                                <p class="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aut magnam eos maxime rem earum deserunt veniam corrupti expedita cum.
                                </p>
                                <a href="/" class="text-decoration-none text-blue">Go Somewhere</a>
                                <p class="text-black-50">CEO at This Website</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 justify-content-center col col-12 text-center">
                        <div class="card  mr-2 shadow-lg">
                            <div class="card-img-top">
                                <img src={dressAdd} alt="Member" class="img-fluid  p-4"/>
                            </div>
                            <div class="card-body">
                                <div class="card-title">GRT JEWELRY</div>
                                <p class="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aut magnam eos maxime rem earum deserunt veniam corrupti expedita cum.
                                </p>
                                <a href="/" class="text-decoration-none text-blue">Go Somewhere</a>
                                <p class="text-black-50">CEO at This Website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default Advertisement
