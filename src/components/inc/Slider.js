import React from 'react'
import temples from '../asset/templesHead.jpg';
import agriculture from '../asset/agricultureHead.jpg';
import streetFood from '../asset/streetFoodHead.jpg';

function Slider() {
    return (
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={temples} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h3 className = 'text-light'>90's Century Temples</h3>
                <p>It's Very complicated and Cultures Building then Very Famous Places.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={agriculture} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Best Agriculture Lands</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={streetFood} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Best Street Foods</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    );
}

export default Slider
