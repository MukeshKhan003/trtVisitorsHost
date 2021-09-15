import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faFacebookF, faTwitter, faInstagram, faLinkedin, faGooglePlus, faInstagramSquare, faGooglePlusSquare, faFacebookSquare, faTwitterSquare, faYoutubeSquare  } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
library.add(
  faArrowRight,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGooglePlus
)

function Footer() {
    return (
        
            <footer>
                <div class="container-fluid">
                    <div class="row text-left">
                        <div class="col-md-12 footerColmd">
                            <div class="mb-5 mx-auto text-center footerCol">
                            <FontAwesomeIcon icon={faFacebookSquare} className="text-light mr-48 mrgn" size="3x"/>
                            <FontAwesomeIcon icon={faGooglePlusSquare} className="text-light mr-48 mrgn" size="3x"/>
                            <FontAwesomeIcon icon={faLinkedin} className="text-light mr-48 mrgn" size="3x"/>
                            <FontAwesomeIcon icon={faInstagramSquare} className="text-light mr-48 mrgn" size="3x"/>
                            <FontAwesomeIcon icon={faTwitterSquare} className="text-light mr-48 mrgn" size="3x"/>
                            <FontAwesomeIcon icon={faYoutubeSquare} className="text-light mr-48 mrgn" size="3x"/>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3 copyrightP">
                        <p className = "footerP">© 2020 Copyright: trt-visitors@gmail.com</p>
                    </div>
                </div>
            </footer>
        
    )
}

export default Footer
