import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className = "navbar-dark bg-dark shadow">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">

                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            {/* <Link to = '/' class="navbar-brand">Trt-Visitors</Link> */}
                            <a class="navbar-brand" href="/">Trt-Visitors</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <Link to = '/' class="nav-link active">Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link to = '/addpush' class="nav-link active">Add-Push</Link>
                                </li>
                                <li class="nav-item">
                                <Link to = '/contactus' class="nav-link active">Contact Us</Link>
                                </li>
                                <li class="nav-item">
                                <Link to = '/aboutUs' class="nav-link active">About Us</Link>
                                </li>
                            </ul>
                            
                            </div>
                        </div>
                    </nav>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
